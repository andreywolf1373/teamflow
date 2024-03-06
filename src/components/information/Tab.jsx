/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./Tab.module.css"; // Подключаем файл стилей для компонента

const VerticalTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0); // Используем состояние для отслеживания активной вкладки

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className={styles.vertical_tabs}>
      <div className={styles.tab_content}>{tabs[activeTab].content}</div>
      <div className={styles.tab_navigation}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={index === activeTab ? styles.tab_active : styles.tab}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalTabs;
