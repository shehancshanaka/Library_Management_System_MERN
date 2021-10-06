import React, { useState } from "react";
import { Button, FlexRow, Select } from "../../../components/CommonComponents";
import { Modal, DialogBox } from "../../../components/Modal";

export default function LendDialog({ handleClose, show }) {
  const [member, setMember] = useState("");

  const sendConfirm = () => handleClose(true, member);
  const sendCancel = () => handleClose(false, null);
  return (
    <Modal show={show}>
      <DialogBox>
        <h2>Lend Book</h2>
        <p>Select a Member to continue and confirm</p>
        <select
          id="member-select"
          onChange={(e) => setMember(e.target.value)}
          value={member}
        >
          <option value="">Select a member and confirm</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </select>
        <FlexRow>
          <Button onClick={sendConfirm}>Confirm</Button>
          <Button onClick={sendCancel} color="secondary">
            Cancel
          </Button>
        </FlexRow>
      </DialogBox>
    </Modal>
  );
}
