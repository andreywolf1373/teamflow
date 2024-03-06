// import styles from "./Graph.module.css";
// import {
//   FaHome,
//   FaCog,
//   FaUsers,
//   FaFileAlt,
//   FaQuestionCircle,
// } from "react-icons/fa";
// import SimpleBarChart from "./SimpleBarChart";

// function Graph() {
//   const secondarydata = [
//     { name: "Jan", pv: 1440, color: "#508EF5" },
//     { name: "Feb", pv: 1398, color: "#EE726F " },
//     { name: "Mar", pv: 1500, color: "#F8CD5F" },
//     { name: "Apr", pv: 2200, color: "#F4AF59" },
//     { name: "May", pv: 2400, color: "#F4AF59" },
//     { name: "Jun", pv: 1450, color: "#9b326c" },
//     { name: "Jul", pv: 2100, color: "#95f" },
//     { name: "Aug", pv: 1150, color: "#52109c" },
//     { name: "Sep", pv: 1398, color: "#521" },
//     { name: "Nov", pv: 900, color: "#f04" },
//     { name: "Dec", pv: 200, color: "#f9f" },
//   ];

//   const data = [
//     {
//       name: "Jan",
//       pv: 30,
//     },
//     {
//       name: "Feb",
//       pv: 20,
//     },
//     {
//       name: "Mar",
//       pv: 25,
//     },
//     {
//       name: "Apr",
//       pv: 10,
//     },
//     {
//       name: "May",
//       pv: 13,
//     },
//     {
//       name: "Jun",
//       pv: 34,
//     },
//   ];

//   return (
//     <div className={styles.graphs}>
//       <div className={styles.graph_container}>
//         <aside className={styles.sidebar}>
//           <div className={styles.headshot_icons}>
//             <img src="src\img\headshot.png" alt="img" />
//             <div className={styles.icons}>
//               <FaHome className={styles.icon} />
//               <FaFileAlt className={styles.icon} />
//               <FaUsers className={styles.icon} />
//               <FaCog className={styles.icon} />
//             </div>
//             <FaQuestionCircle className={styles.iconq} />
//           </div>
//         </aside>
//         <div className={styles.group_graph}>
//           <h2>Overview</h2>
//           <div className={styles.graph_stats}>
//             <div>
//               <p className={styles.graph_num}>987.654</p>
//               <p className={styles.graph_subtitle}>Hours on projects</p>
//               <p className={styles.graph_percent}> -1.83% </p>
//             </div>
//             <div>
//               <p className={styles.graph_num}>754</p>
//               <p className={styles.graph_subtitle}>New project launched</p>
//               <p className={styles.graph_percent}> +7.89% </p>
//             </div>
//             <div>
//               <p className={styles.graph_num}>351</p>
//               <p className={styles.graph_subtitle}>Company terms</p>
//               <p className={styles.graph_percent}> +1.23% </p>
//             </div>
//           </div>
//           <div className={styles.group_charts}>
//             <SimpleBarChart data={data} width={295} height={322} />
//             <SimpleBarChart data={secondarydata} width={654} height={551} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Graph;

import styles from "./Graph.module.css";

function Graph() {
  return (
    <div className={styles.container}>
      <img src="../../../src/img/graph.png" alt="graphs" />
    </div>
  );
}

export default Graph;
