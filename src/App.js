import React, { useState } from 'react';
import * as d3 from 'd3';
import SubmitButton from './components/SubmitButton';
import Histogram from './components/Histogram';
import ExportButton from './components/ExportButton';
import styles from './App.module.css';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    fetch('https://www.terriblytinytales.com/test.txt')
      .then(response => response.text())
      .then(text => {
        const words = text.split(/\s+/).reduce((map, word) => {
          map.set(word, (map.get(word) || 0) + 1);
          return map;
        }, new Map());

        const data = Array.from(words, ([word, count]) => ({ word, count }))
          .sort((a, b) => b.count - a.count)
          .slice(0, 20);

        setData(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error);
        setIsLoading(false);
      });
  };

  return (
    <div className={styles.app}>
      <div className={styles.controls}>
        <SubmitButton onSubmit={handleSubmit} />
        {data.length > 0 && (
          <ExportButton
            data={data}
            filename="histogram_data.csv"
          />
        )}
      </div>
      {isLoading ? (
        <div className={styles.loading}>Loading...</div>
      ) : data.length > 0 ? (
        <Histogram
          data={data}
          width={600}
          height={400}
          margin={{ top: 20, right: 20, bottom: 60, left: 60 }}
          innerHeight={360}
          x={d3.scaleBand()
            .domain(data.map(d => d.word))
            .range([0, 600 - 60])
            .padding(0.2)}
          y={d3.scaleLinear()
            .domain([0, d3.max(data, d => d.count)])
            .range([360, 0])}
        />
      ) : null}
    </div>
  );
}

export default App;
