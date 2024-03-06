import styles from "./Information.module.css";

import Tab from "./Tab.jsx";
function Information() {
  const tabs = [
    {
      title: (
        <div className={styles.navbar}>
          <h3>Survey your team</h3>
          <p>
            Powerfull questions that get to the huart of how team members really
            fill
          </p>
        </div>
      ),
      content: <img src="../../../src/img/contentTab.png" alt="tab" />,
    },
    {
      title: (
        <div className={styles.navbar}>
          <h3>Resolve issues quickly</h3>
          <p>Anonymous messaging that connects managers and employees.</p>
        </div>
      ),
      content: <img src="../../../src/img/contentTab.png" alt="tab" />,
    },
    {
      title: (
        <div className={styles.navbar}>
          <h3>Plan your 1-on-1s</h3>
          <p>Plan meetings together and give a stake employees and teams.</p>
        </div>
      ),
      content: <img src="../../../src/img/contentTab.png" alt="tab" />,
    },
    {
      title: (
        <div className={styles.navbar}>
          <h3>Track your progress</h3>
          <p>
            Easy-to-read reports and sharable results help managers and teams.
          </p>
        </div>
      ),
      content: <img src="../../../src/img/contentTab.png" alt="tab" />,
    },
  ];

  return (
    <div className={styles.container}>
      <Tab tabs={tabs}></Tab>
    </div>
  );
}

export default Information;
