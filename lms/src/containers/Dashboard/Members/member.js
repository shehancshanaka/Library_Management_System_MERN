import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IoReturnUpBack } from "react-icons/io5";
import {
  deleteMember,
  getMember,
} from "../../../api/memberAPI";
import LoadingImage from "../../../components/Spinner";
import loadingPath from "../../../assets/Spin-1s-200px.gif";
import {
  Container,
  ContainerInline,
  Button,
  FlexRow,
} from "../../../components/CommonComponents";
import MemberViewImage from "../../../assets/person-bw.png";
import ConfirmationDialog from "../../../components/confirmationDialog";
const ContainerInlineTextAlignLeft = styled(ContainerInline)`
  align-items: flex-start;
`;

const Member = ({ id, handleBackClick }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [member, setMember] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const handelDelete = (confirmation) => {
    if (confirmation) {
      deleteMember(member.id);
    }
    setShowDeleteConfirmation(false);
  };
  useEffect(() => {
    setIsLoading(true);
    getMember(id)
      .then((response) => {
        if (!response.error) {
          setMember(response.data);
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

        {!isLoading && member !== null ? (
          <>
            <FlexRow>
              <ContainerInlineTextAlignLeft>
  <>
                  <h4>{` Member First Name: ${member.name}`}</h4>
                  <h4>{` Member  Last Name: ${member.lastName}`}</h4>
                  <h4>{` Member NIC: ${member.nic}`}</h4>
                  <h4>{` Member Address: ${member.address}`}</h4>
                  <h4>{` Member user Type: ${member.userType}`}</h4>
                </>
              </ContainerInlineTextAlignLeft>
              <ContainerInline >
                <img
                  src={MemberViewImage}
                  alt="Book cover placeholder"
                  style={{ border: " 1px solid black" }}
                />
              </ContainerInline>
            </FlexRow>
            <FlexRow>
              <Button danger onClick={() => setShowDeleteConfirmation(true)}>
                Delete
              </Button>
            </FlexRow>
          </>
        ) : (
          <LoadingImage src={loadingPath} />
        )}
      </Container>
      <ConfirmationDialog
        handleClose={handelDelete}
        show={showDeleteConfirmation}
        headerText="Confirm member deletion"
        detailText="Are you sure want to delete this member? this action can't be undone"
      />
      
      
    </>
  );
};
export default Member;
