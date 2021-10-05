import React, { useState, useEffect } from "react";
import { IoReturnUpBack } from "react-icons/io5";
import { getBook } from "../../api/bookAPI";
import LoadingImage from "../../components/Spinner";
import loadingPath from "../../assets/Spin-1s-200px.gif";
import {
  Container,
  ContainerInline,
  Button,
  FlexRow,
  ContainerInlineTextAlignLeft,
} from "../../components/CommonComponents";

const Book = ({ id, handleBackClick }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [book, setBook] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getBook(id)
      .then((response) => {
        if (!response.error) {
          setBook(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);
  return (
    <Container>
      <Button onClick={handleBackClick} size={1.5}>
        <IoReturnUpBack />
      </Button>

      {!isLoading && book !== null ? (
        <>
          <FlexRow>
            <ContainerInline>
              <h1>{book.title}</h1>
              <h2>{book.author}</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse vestibulum, magna in interdum elementum, enim urna
                interdum arcu, non hendrerit libero enim vitae sem. Aliquam erat
                volutpat.
              </p>
              {book.isAvailable ? (
                ""
              ) : (
                <>
                  <h4>{` Burrowed by: ${book.borrowedMemberId}`}</h4>
                  <h4>{` Burrowed by: ${book.borrowedDate}`}</h4>
                </>
              )}
            </ContainerInline>
          </FlexRow>
          <FlexRow>
            {book.isAvailable ? (
              <>
                {" "}
                <Button onClick={() => console.log("call lend API")}>
                  Lend
                </Button>
                <Button
                  onClick={() => console.log("call deleteBook API")}
                ></Button>
              </>
            ) : (
              <>
                <h4>{` Burrowed by: ${book.borrowedMemberId}`}</h4>
                <h4>{` Burrowed by: ${book.borrowedDate}`}</h4>
              </>
            )}
          </FlexRow>
        </>
      ) : (
        <LoadingImage src={loadingPath} />
      )}
    </Container>
  );
};
export default Book;
