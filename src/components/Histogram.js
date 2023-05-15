import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import styles from './Histogram.module.css';

function Histogram({ data }) {
  const [width, setWidth] = useState(0);
  const containerRef = useRef(null);
  const [hoveredData, setHoveredData] = useState(null);

  useEffect(() => {
    function handleResize() {
      const containerWidth = containerRef.current.offsetWidth;
      setWidth(containerWidth);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const margin = { top: 40, right: 100, bottom: 50, left: 100 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = 600 - margin.top - margin.bottom;
  const x = d3.scaleBand()
    .domain(data.map(({ word }) => word))
    .range([0, innerWidth])
    .padding(0.1);
  const y = d3.scaleLinear()
    .domain([0, d3.max(data, ({ count }) => count)])
    .nice()
    .range([innerHeight, 0]);
  const xAxis = d3.axisBottom(x);
  const yAxis = d3.axisLeft(y).tickFormat(d3.format("d"));

  const handleMouseEnter = (data) => {
    setHoveredData(data);
  };

  const handleMouseLeave = () => {
    setHoveredData(null);
  };

  return (
    <div ref={containerRef} className={styles.container}>
      <svg width={width} height={600}>
        <g transform={`translate(${margin.left},${margin.top})`}>
          {data.map(({ word, count }) => (
            <rect
              key={word}
              x={x(word)}
              y={y(count)}
              width={x.bandwidth()}
              height={innerHeight - y(count)}
              className={styles.bar}
              onMouseEnter={() => handleMouseEnter({ word, count })}
              onMouseLeave={handleMouseLeave}
            />
          ))}
          <g transform={`translate(0,${innerHeight})`}>
            <g ref={node => d3.select(node).call(xAxis)} />
            <text
              x={innerWidth / 2}
              y={margin.bottom - 5}
              className={styles.xAxisLabel}
            >
              Words
            </text>
          </g>
          <g transform={`translate(0,0),${innerWidth}`}>
            <g ref={node => d3.select(node).call(yAxis)} />
            <text
              x={-innerHeight / 2}
              y={-margin.left + 20}
              className={styles.yAxisLabel}
            >
              Count
            </text>
          </g>
          {hoveredData && (
            <text
              x={x(hoveredData.word) + x.bandwidth() / 6}
              y={y(hoveredData.count) - 5}
              className={styles.hoverText}
            >
              {`${hoveredData.word}: ${hoveredData.count}`}
            </text>
          )}
        </g>
      </svg>
    </div>
  );
}

export default Histogram;
