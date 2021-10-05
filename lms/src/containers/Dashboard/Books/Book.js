import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IoReturnUpBack } from "react-icons/io5";
import { getBook } from "../../../api/bookAPI";
import LoadingImage from "../../../components/Spinner";
import loadingPath from "../../../assets/Spin-1s-200px.gif";
import {
  Container,
  ContainerInline,
  Button,
  FlexRow,
} from "../../../components/CommonComponents";
import BookViewImage from "../../../assets/book.png";

const ContainerInlineTextAlignLeft = styled(ContainerInline)`
  align-items: flex-start;
`;
const H1 = styled.h1`
  text-align: left;
`;
const H2 = styled.h2`
  text-align: left;
`;

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
      <Button onClick={handleBackClick} size={1.2}>
        <IoReturnUpBack />
      </Button>

      {!isLoading && book !== null ? (
        <>
          <FlexRow>
            <ContainerInlineTextAlignLeft>
              <H1>{book.title}</H1>
              <H2>{book.author}</H2>
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
            </ContainerInlineTextAlignLeft>
            <ContainerInline>
              <img
                src={BookViewImage}
                alt="Book cover placeholder"
                style={{ border: " 1px solid black" }}
              />
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
                  danger
                  onClick={() => console.log("call deleteBook API")}
                >
                  Delete
                </Button>
              </>
            ) : (
              <>
                <h4>{` Burrowed by: ${book.borrowedMemberId}`}</h4>
                <h4>{` Burrowed by: ${book.borrowedDate}`}</h4>
                <Button onClick={() => console.log("call ReturnBook API")}>
                  Return
                </Button>
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
