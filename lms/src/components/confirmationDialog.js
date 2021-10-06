import {Button,FlexRow } from "./CommonComponents";
import {Modal,DialogBox } from "./Modal";


export default function ConfirmationDialog({

handleClose,show,headertext,detailtext

}) {
    const sendYes = () =>handleClose (true);
    const sendNo = () =>handleClose(false);

    return (
        <Modal show={show}>
            <DialogBox>
                <h2>{headertext}</h2>
                <p>{detailtext}</p>
                <FlexRow>
                    <Button onClick={sendYes}>
                        Yes
                        </Button>
                    <Button onClick={sendNo}>
No
                    </Button>
                </FlexRow>
            </DialogBox>
</Modal>


    );
}