import React, { useState } from "react";
import Tabs from "../components/Tabs";

const Dashboard = () => {
  const contents = [
  {title:"Books", elements:<h1>Contents of books go here</h1>},
  {title:"Members", elements:<h1>Contents of members go here</h1>},
]

  return (
  
    <Tabs contents={contents}></Tabs>
  
  );
};
export default Dashboard;
