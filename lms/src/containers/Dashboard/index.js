import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBooks } from "../../store/booksSlice";
import Tabs from "../../components/Tabs";
import { getBooks } from "../../api/bookAPI";
import HeaderImage from "../../components/Spinner";
import loading from "../../assets/Spin-1s-200px.gif";
import Books from "./Books";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  //const [books, setBooks] = useState([]);

  const booksFromRedux = useSelector((state) => state.books.value);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    getBooks()
      .then((response) => {
        if (!response.error) {
          console.log(setBooks(response.data));
          dispatch(setBooks(response.data));

        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [dispatch]);

  const contents = [
    { title: "Books", elements: <Books catalog={booksFromRedux}></Books> },
    { title: "Members", elements: <h1>Contents of members go here</h1> },
  ];

  return isLoading ? (
    <HeaderImage src={loading} />
  ) : (
    <Tabs contents={contents} />
  );
};
export default Dashboard;
