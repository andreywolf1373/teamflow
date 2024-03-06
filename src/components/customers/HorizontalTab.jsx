/* eslint-disable react/prop-types */

import { useState } from "react";
import styles from "./HorizontalTab.module.css";

const HorizontalTab = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className={styles.tabs}>
      <div className={styles.tabs_content}>{tabs[activeTab].content}</div>
      <div className={styles.tabs_header}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            style={
              index === activeTab
                ? { borderTop: "4px solid #35414B" }
                : { borderTop: "4px solid #fff" }
            }
            className={
              index === activeTab ? styles.tab_header_active : styles.tab_header
            }
            onClick={() => handleClick(index)}
          >
            {tab.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalTab;
