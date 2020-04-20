import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = ({ data:{ confirmed, recovered, deaths }, country }) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }

        fetchAPI();
    }, []);

    const lineChart = (
        dailyData.length
            ? ( 
            <Line 
            data={{
                labels: dailyData.map(({ date }) => date),
                datasets: [{
                    data: dailyData.map(({ confirmed }) => confirmed),
                    label: 'Confirmed',
                    borderColor: 'rgba(75, 0, 130, 0.5)',
                    fill: true,
                }, {
                    data: dailyData.map(({ deaths }) => deaths),
                    label: 'Deaths',
                    borderColor: '#CC0000',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true,
                }],
            }}
            />) : null
    );

    const barChart = (
        confirmed
        ? (
            <Bar
                data={{
                    labels: ['Confirmed', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: [
                            'rgba(75, 0, 130, 0.5)',
                            'rgba(252, 248, 29, 0.5)',
                            'rgba(255, 0, 0, 0.5)',
                        ],
                        data:[confirmed.value, recovered.value, deaths.value]
                    }]
                }}
                options={{
                    legend: { display: false},
                    title: { display: true, text: `Cases in ${country}`},
                }}
            />
        )   : null
        );

    return (
        <div className={styles.container}>
            {country ? barChart : lineChart}
        </div>
    )
}

export default Chart;