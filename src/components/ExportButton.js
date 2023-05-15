import React from 'react';
import { CSVLink } from 'react-csv';
import styles from './ExportButton.module.css';

function ExportButton(props) {
  return (
    <CSVLink className={styles['custom-btn'] + ' ' + styles['btn-export']} data={props.data} filename={props.filename}>
      Export
    </CSVLink>
  );
}

export default ExportButton;
