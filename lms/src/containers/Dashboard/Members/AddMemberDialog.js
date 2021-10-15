import { useState } from "react";
import {
  Button,
  Container,
  FlexRow,
  
} from "../../../components/CommonComponents";
import { Modal, DialogBox } from "../../../components/Modal";
import Input from "../../../components/input";
export default function AddMemberDialog({ handleClose, show }) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const ClearInputs = () => {
    setId("");
    setName("");
  };
  const sendDone = () => {
    if (id !== "" && name!== "") {
      const data = { id, name };
      ClearInputs();
      handleClose(true, data);
    } else if (id === "") {
      window.alert("Please enter a Title to add");
    } else {
      window.alert("Please enter the author of the book ");
    }
  };
  const sendCancel = () => {
    ClearInputs();
    handleClose(false, null);
  };
  return (
    <Modal show={show}>
      <DialogBox>
        <h2>Add member</h2>
        <p>Enter the below details of the Member</p>
        <Container alignItems="center" disableFullWidth>
          <Input
            label="Id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            type="text"
            id="title"
            name="title"
            required
            minLength="1"
          />
          <Input
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="author"
            name="author"
            required
            minLength="1"
          />
        </Container>
        <FlexRow>
          <Button onClick={sendDone}>Done</Button>
          <Button onClick={sendCancel} color="secondary">
            Cancel
          </Button>
        </FlexRow>
      </DialogBox>
    </Modal>
  );
}
