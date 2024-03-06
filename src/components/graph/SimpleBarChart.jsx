/* eslint-disable react/prop-types */
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Bar } from "recharts";
import styles from "./SimpleBarChart.module.css";

function SimpleBarChart({ width, height, data }) {
  return (
    <BarChart
      data={data}
      margin={{}}
      width={width}
      height={height}
      className={styles.bar_chart}
    >
      <CartesianGrid strokeDasharray="2 2" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="pv" fill="#bfff" />
    </BarChart>
  );
}

export default SimpleBarChart;
