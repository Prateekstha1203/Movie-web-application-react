import React, { useState } from "react";
import "./switchTabs.scss";

// const SwitchTabs = ({ data, onTabChange }) => {
//   const [selectedTab, setSelectedTab] = useState(0);
//   const [left, setLeft] = useState(0);

//   const activeTab = (tab, index) => {
//     setLeft(index * 100);
//     setTimeout(() => {
//       setSelectedTab(tab);
//     }, 300);
//     onTabChange(index, tab);
//   };
//   return (
//     <div className="switchingTabs">
//       <div className="tabItems">
//         {data.map((tab, index) => (
//           <span
//             key={index}
//             className={`tabItem ${selectedTab === index ? "active" : ""}`}
//             onClick={() => {
//               activeTab(tab, index);
//             }}
//           >
//             {tab}
//           </span>
//         ))}
//         <span className="movingBg" style={{ left }} />
//       </div>
//     </div>
//   );
// };

const SwitchTabs = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState();
  const activeTab = (item, index) => {
    setLeft(index * 100);
    setTimeout(() => {
      setSelectedTab(item);
    }, 300);
    onTabChange(item, index);
  };
  // const activeTab = (item, index) => {
  //   setLeft(index * 100);
  //   setTimeout(() => {
  //     setSelectedTab(item);
  //   }, 300);
  //   onTabChange(index, item);
  // };
  return (
    <div className="switchingTabs">
      <div className="tabItems">
        {data.map((item, index) => (
          <span
            key={index}
            className={`tabItem ${selectedTab === index ? "active" : ""}`}
            onClick={() => {
              activeTab(item, index);
            }}
          >
            {item}
          </span>
        ))}
        <span className="movingBg" style={{ left }} />
      </div>
    </div>
  );
};
export default SwitchTabs;
