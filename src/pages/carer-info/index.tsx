import React from "react";
import VericalTabs from "./VericalTabs";

const TestO = () => {
  return <>0</>;
};

const Test1 = () => {
  return <>1</>;
};

const Test2 = () => {
  return <>2</>;
};

const CarerInfo = () => {
  return (
    <div>
      <VericalTabs
        tabsDataArray={[
          { index: 0, title: "0", percentage: 10, backgroundColor: "red" },
          { index: 1, title: "1", percentage: 50, backgroundColor: "green" },
          { index: 2, title: "2", percentage: 80, backgroundColor: "yellow" },
        ]}
      >
        <TestO />
        <Test1 />
        <Test2 />
      </VericalTabs>
    </div>
  );
};

export default CarerInfo;
