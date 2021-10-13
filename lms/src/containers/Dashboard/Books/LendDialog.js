import React, { useEffect, useState } from "react";
import { Button, FlexRow } from "../../../components/CommonComponents";
import { Modal, DialogBox } from "../../../components/Modal";
import { getMembers } from "../../../api/memberAPI";


import LoadingImage from "../../../components/Spinner";
import loadingPath from "../../../assets/Spin-1s-200px.gif";

export default function LendDialog({ handleClose, show }) {
  const [member, setMember] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [members, setMembers] = useState(null);

  const sendConfirm = () => {
    if (member !== "") {
      handleClose(true, member);
    } else {
      window.alert("Please Select a member");
    }
  };
  const sendCancel = () => handleClose(false, null);

  useEffect(() => {
    setIsLoading(true);
    const response = getMembers();
    setMembers(response);
    setIsLoading(false);
  }, []);

  return (
    <Modal show={show}>
      <DialogBox>
        <h2>Lend Book</h2>
        <p>Select a Member to continue and confirm</p>
        {!isLoading && members !== null ? (
          <>
            <select
              id="member-select"
              onChange={(e) => setMember(e.target.value)}
              value={member}
            >
              <option value="">Select a member and confirm</option>
              {members.map((member, index) => (
                <option key={index} value={member.id}>
                  {member.name}
                </option>
              ))}
            </select>
            <FlexRow>
              <Button onClick={sendConfirm}>Confirm</Button>
              <Button onClick={sendCancel} color="secondary">
                Cancel
              </Button>
            </FlexRow>
          </>
        ) : (
          <LoadingImage src={loadingPath} />
        )}
      </DialogBox>
    </Modal>
  );
}
