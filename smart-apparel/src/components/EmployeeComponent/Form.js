import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';



function GeneralArrivalFormAdd() {
  return (
    <div className="modal show"
    style={{ display: 'block', position: 'initial' }}>

        <Modal.Dialog>

          {/* <Modal.Header closeButton>
            <Modal.Title>Add New Employee</Modal.Title>
          </Modal.Header> */}

          <Modal.Body>
            <Form >
                <Form.Group className="mb-3" controlId="formGeneralOutId">
                  <Form.Label>Outgoing_Id</Form.Label>
                  <Form.Control type="text" placeholder="Enter Outgoing Id" />
                  <Form.Text className="text-muted">
                  Enter the code you provided as the ID in the previous departure form.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formADate">
                  <Form.Label>Date</Form.Label>
                  <Form.Control type="text" placeholder="Enter Date" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formAtime">
                  <Form.Label>Arrival Time</Form.Label>
                  <Form.Control type="text" placeholder="Enter Arrival Time" />
                </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Clear</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>

        </Modal.Dialog>
      </div>      
  )
}

export default GeneralArrivalFormAdd;