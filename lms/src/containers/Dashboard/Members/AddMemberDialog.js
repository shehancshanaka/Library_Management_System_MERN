import { useState } from "react";
import {
  Button,
  Container,
  FlexRow,
  
} from "../../../components/CommonComponents";
import { Modal, DialogBox } from "../../../components/Modal";
import Input from "../../../components/input";
export default function AddMemberDialog({ handleClose, show }) {
 
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [nic, setNic] = useState("");
    const [tel, setTel] = useState("");
    const [address, setAddress] = useState("");
    const [userType, setUserType] = useState("");

    const ClearInputs = () => {
      
      setName("");
      setLastName("");
      setNic("");
      setTel("");
      setAddress("");
      setUserType("");
    };
    const sendDone = () => {
      if (
        
        name !== "" &&
        lastName !== "" &&
        nic !== "" &&
        tel !== "" &&
        address !== "" &&
        userType !== ""
      ) {
        const data = {name, lastName, nic, tel, address, userType };
        ClearInputs();
        handleClose(true, data);
      } else if (name === "") {
        window.alert("Please enter a ID to add");
      } else if (nic === "") {
        window.alert("Please enter the FirstName of the Member ");
      } else {
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
            <FlexRow>
              <Input
                label="NIC"
                value={nic}
                onChange={(e) => setNic(e.target.value)}
                type="text"
                id="nic"
                name="nic"
                required
                minLength="1"
              />
              <Input
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                id="name"
                name="name"
                required
                minLength="1"
              />
            </FlexRow>
            <FlexRow>
              <Input
                label="last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                id="lastName"
                name="lastName"
                required
                minLength="1"
              />
              <Input
                label="Telephone Number"
                value={tel}
                onChange={(e) => setTel(e.target.value)}
                type="text"
                id="lastName"
                name="lastName"
                required
                minLength="1"
              />
              <Input
                label="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                id="address"
                name="address"
                required
                minLength="1"
              />
            </FlexRow>
            <FlexRow>
              <select
                id="member-select"
                onChange={(e) => setUserType(e.target.value)}
                value={userType}
              >
                <option value="">Select a User Type and confirm</option>
                <option value="student">Student</option>
                <option value="university">University</option>
              </select>
            </FlexRow>
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
