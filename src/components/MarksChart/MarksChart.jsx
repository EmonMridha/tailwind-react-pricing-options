import { BarChart } from 'lucide-react';
import React, { use } from 'react';
import { Bar, XAxis, YAxis } from 'recharts';

const MarksChart = ({marksPromise}) => {
    const marksDataRes = use(marksPromise)
    const marksData = marksDataRes.data
    const  marksChartData = marksData.map(studnetData => {
        const student = {
            id: studnetData.studentId,
            name: studnetData.name,
            physics:studnetData.physics,
            chemistry: studnetData.chemistry,
            math: studnetData.math
        }

        const avg = (student.physics + student.chemistry +student.math) /3;
        student.avg = avg;
        return student
    })

    return (
        <div>
            <BarChart width={500} height={300} data={marksChartData}
><XAxis dataKey='name'></XAxis></BarChart>
<YAxis></YAxis>
<Bar dataKey='avg' fill='yellow'></Bar>
<Bar dataKey='chemistry' fill='blue'></Bar>
        </div>
    );
};

export default MarksChart;