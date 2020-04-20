import React from 'react';
import styles from './Contributors.module.css';
import { Typography } from '@material-ui/core';

function Contributors() {
    return (
        <div className={styles.aboutStyle}>
            <Typography variant="body2">
            <a href="https://github.com/general260/covid19monitor" target="_blank" rel="noopener noreferrer">Generalobasi</a>
            <a href="https://github.com/mathdroid/covid-19-api" target="_blank" rel="noopener noreferrer">Mathroid Covid-19 API</a>
            <a href="https://github.com/CSSEGISandData/COVID-19" target="_blank" rel="noopener noreferrer">CSSEGISandData</a>
            </Typography>
            <h4>This website was built to monitor the global pandemic around the World.
            Transitively from the John Hopkins Site, the data may not be used for commercial purposes.</h4>
        </div>
    )
}

export default Contributors;