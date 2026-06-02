import React, { useContext } from 'react';
import { bookContext } from '../../context';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    LabelList,
    Tooltip,
} from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', 'black'];

// FIXED: Removed TypeScript types (: number)
const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
    const { x, y, width, height, index } = props;
    const color = colors[index % colors.length];

    return (
        <path
            strokeWidth={props.isActive ? 5 : 0}
            d={getPath(Number(x || 0), Number(y || 0), Number(width || 0), Number(height || 0))}
            stroke={color}
            fill={color}
            style={{
                transition: 'stroke-width 0.3s ease-out',
            }}
        />
    );
};

const CustomColorLabel = (props) => {
    const { x, y, value, index } = props;
    const fill = colors[(index ?? 0) % colors.length];

    return (
        <text x={x} y={y} dy={-10} fill={fill} textAnchor="middle">
            {value}
        </text>
    );
};

const Dashboard = () => {
    const { readList, wishList } = useContext(bookContext);

    // Transform readList dynamically inside the component so it updates reactively
    const data = (readList || []).map(bk => ({
        name: bk.bookName,
        totalPages: bk.totalPages,
        rating: bk.rating
    }));

    return (
        <div className='h-[60vh] flex justify-center items-center my-20'>
            {data.length > 0 ? (
                <div style={{ width: '100%', maxWidth: '700px', height: '400px' }}>
                    <BarChart
                        width={700}
                        height={400}
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip cursor={{ fillOpacity: 0.5 }} />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} activeBar={{ stroke: 'purple', strokeWidth: 2 }}>
                            <LabelList dataKey="totalPages" content={<CustomColorLabel />} position="top" />
                        </Bar>
                    </BarChart>
                </div>
            ) : (
                <p className="text-red-500 font-bold">No books read yet!</p>
            )}
        </div>
    );
};

export default Dashboard;
