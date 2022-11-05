import Modal from 'react-bootstrap/Modal';


const AddModal = (props) => {
    const { display, hide } = props;

    console.log(display)

    return <Modal
            className='modal-container'
              show={display}
              onHide={hide}
              backdrop="static">
                  <Modal.Header>
                     <Modal.Title>
                        <h1>Titlu</h1>
                     </Modal.Title>
                 </Modal.Header>
                  <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>

    </Modal>
}

export default AddModal;