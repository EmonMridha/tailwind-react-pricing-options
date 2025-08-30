import { LineChart, X } from 'lucide-react';
import React from 'react';
import { Line, XAxis, YAxis } from 'recharts';


const resultData = [
  {
    "studentId": 1,
    "name": "Arif Rahman",
    "physics": 85,
    "chemistry": 78,
    "math": 92
  },
  {
    "studentId": 2,
    "name": "Fatima Begum",
    "physics": 90,
    "chemistry": 88,
    "math": 95
  },
  {
    "studentId": 3,
    "name": "Rashid Khan",
    "physics": 70,
    "chemistry": 82,
    "math": 75
  },
  {
    "studentId": 4,
    "name": "Sadia Hossain",
    "physics": 88,
    "chemistry": 91,
    "math": 89
  }
]


const ResultChart = () => {
    return (
        <div>
            <LineChart width={800} height={500} data={resultData}>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Line dataKey='math'></Line>
                <Line dataKey='chemistry' stroke='red'></Line>
            </LineChart>
        </div>
    );
};

export default ResultChart;