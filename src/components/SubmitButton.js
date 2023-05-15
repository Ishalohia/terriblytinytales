import React from 'react';
import styles from './SubmitButton.module.css';

function SubmitButton(props) {
  return (
    <div>
<button className={styles['custom-btn'] + ' ' + styles['btn-submit']} onClick={props.onSubmit}>
      Submit
    </button>
    </div>
    
  );
}

export default SubmitButton;
