import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IoReturnUpBack } from "react-icons/io5";
import { getBook, lendBook, returnBook ,deleteBook} from "../../../api/bookAPI";
import LoadingImage from "../../../components/Spinner";
import loadingPath from "../../../assets/Spin-1s-200px.gif";
import {
  Container,
  ContainerInline,
  Button,
  FlexRow,
} from "../../../components/CommonComponents";
import BookViewImage from "../../../assets/book.png";
import ConfirmationDialog from "../../../components/confirmationDialog";
import LendDialog from "./LendDialog";
import { getTodaysDate } from "../../../shared/utils";
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
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [showLendConfirmation, setShowLendConfirmation] = useState(false);
  const [showReturnConfirmation, setShowReturnConfirmation] = useState(false);

  const handelDelete = (confirmation) => {
    if (confirmation) {
      deleteBook(book.id);
    }
    setShowDeleteConfirmation(false);
  };

  const handleLend = (confirmed, memberId) => {
    if (confirmed) {
      lendBook(book.id, memberId, getTodaysDate());
    }
    setShowLendConfirmation(false);
  };
  const handleReturn = (confirmed) => {
    if (confirmed) {
      returnBook(book.id);
    }
    setShowReturnConfirmation(false);
  };

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
    <>
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
                  Suspendisse vestibulum, magna in interdum elementum, enim urna.
                </p>
                {book.isAvailable ? (
                  ""
                ) : (
                  <>
                    <h4>{` Borrowed by: ${book.burrowedMemberId}`}</h4>
                    <h4>{` Borrowed by: ${book.burrowedDate}`}</h4>
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
                  <Button onClick={() => setShowLendConfirmation(true)}>
                    Lend
                  </Button>
                  <Button
                    danger
                    onClick={() => setShowDeleteConfirmation(true)}
                  >
                    Delete
                  </Button>
                </>
              ) : (
                <>
                  <Button onClick={() => setShowReturnConfirmation(true)}>
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
      <ConfirmationDialog
        handleClose={handelDelete}
        show={showDeleteConfirmation}
        headerText="Confirm book deletion"
        detailText="Are you sure want to delete this book? this action can't be undone"
      />
      <LendDialog show={showLendConfirmation} handleClose={handleLend} />
      <ConfirmationDialog
        handleClose={handleReturn}
        show={showReturnConfirmation}
        headerText="Confirm book return"
        detailText="Press 'Yes' to  confirm return the book"
      />
    </>
  );
};
export default Book;
