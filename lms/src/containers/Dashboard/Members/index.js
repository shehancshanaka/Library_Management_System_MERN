import React, { useState } from "react";
import { IoAddSharp } from "react-icons/io5";
import Table from "../../../components/Table";
import {
  FluidContainer,
  Button,
  Container,
} from "../../../components/CommonComponents";
import Member from "./member";
import AddMemberDialog from "./AddMemberDialog";
import { addMember } from "../../../api/memberAPI";
const Members = ({ catalog }) => {
  const [selectedMemberId, setSelectedMemberId] = useState(null);
  const [showAddMemberDialog, setShowAddMemberDialog] = useState(false);

  const handleTableRowClick = (id) => {
    setSelectedMemberId(id);
  };
  const handleMemberViewBackClick = () => {
    setSelectedMemberId(null);
  };
  const handleAddMember = (confirmed, data) => {
    if (confirmed) {
      addMember(data);
    }
    setShowAddMemberDialog(false);
  };
  return selectedMemberId === null ? (
    <>
      <FluidContainer>
        <Container
          flexDirection="row"
          justifyContent="flex-end"
          alignItems="flex-start"
        >
          <Button rounded onClick={() => setShowAddMemberDialog(true)}>
            <IoAddSharp />
          </Button>
        </Container>
        {
          <Table
            data={catalog}
            handleRowClick={handleTableRowClick}
            instructions="Click a row to view Single Member"
          />
        }
      </FluidContainer>
      <AddMemberDialog show={showAddMemberDialog} handleClose={handleAddMember} />
    </>
  ) : (
    <Member id={selectedMemberId} handleBackClick={handleMemberViewBackClick} />
  );
};
export default Members;
