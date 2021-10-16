import React, { useState,useEffect } from "react";
import Tabs from "../../components/Tabs";
import { getBooks } from "../../api/bookAPI";
import { getMembers } from "../../api/memberAPI";
import HeaderImage from "../../components/Spinner";
import loading from "../../assets/Spin-1s-200px.gif";
import Books from "./Books/index";
import Members from "./Members";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [members, setMembers] = useState([]);
 
  useEffect(() => {
    setIsLoading(true);
    getBooks()
      .then((response) => {
        if (!response.error) setBooks(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  useEffect(() => {
    setIsLoading(true);
    getMembers()
      .then((response) => {
        if (!response.error) setMembers(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const contents = [
    { title: "Books", elements: <Books catalog={books}></Books> },
    { title: "Members", elements: <Members catalog={members}></Members> },
  ];

  return isLoading ? (
    <HeaderImage src={loading} />
  ) : (
    <Tabs contents={contents} />
  );
};
export default Dashboard;
