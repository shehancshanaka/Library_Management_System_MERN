import React, { useState,useEffect } from "react";
import Tabs from "../../components/Tabs";
import { getBooks } from "../../api/bookAPI";
import HeaderImage from "../../components/Spinner";
import loading from "../../assets/Spin-1s-200px.gif";
import Books from "./Books";



const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [books, setBooks] = useState([]);

useEffect(() => {
  setIsLoading(true);
  getBooks()
    .then((response) => {
      if (!response.error) setBooks(response.data);
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setIsLoading(false);
    });
}, []);




  const contents = [
  {title:"Books", elements:<Books catalog={books}></Books>},
  {title:"Members", elements:<h1>Contents of members go here</h1>},
]

  return isLoading ? (
    <HeaderImage src={loading} />
  ) : (
    <Tabs contents={contents} />
  );
};
export default Dashboard;
