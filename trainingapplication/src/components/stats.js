// import React, {useState, useEffect} from 'react';
import React from 'react';
// import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, Legend, ResponsiveContainer } from 'recharts';


// function Stats(props) {
function Stats() {

    // const data = [{
    //     name: 'Activity', uv: 400, pv: 2400, amt: 2400
    // }];
    // const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, ... ];

    // const data = React.useState({
    //     name: 'Activity',
    //     activity: props.row.data.activity,
    // })

    const data = [
        {
            name: 'Spinning',
            uv: 3000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Gym Training',
            uv: 4000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Fitness',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Zumba',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Jogging',
            uv: 990,
            pv: 4800,
            amt: 2181,
        },
    ];


    return (
        <div>
            <ResponsiveContainer width="100%" aspect={3}>

                <BarChart width={600} height={300} data={data}>
                    <XAxis dataKey="name" stroke="#8884d8" />
                    <YAxis />
                    <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                    <Bar dataKey="uv" fill="#8884d8" barSize={60} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Stats;