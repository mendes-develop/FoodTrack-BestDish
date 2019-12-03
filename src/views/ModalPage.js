import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Button, Modal, Form } from 'react-bootstrap';

export default function ModalPage({show, handleClose}) {

  const dispatch = useDispatch()
  const modal = useSelector(state => state.modal)
  const selectedDish = useSelector(state => state.selectedDish)
    
  
    return (
      <>
        <Modal show={modal} onHide={() => dispatch({type: "SWITCH_MODAL"})}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Label>Leave a Comment:</Form.Label>
              <Form.Control as="textarea" rows="3" placeholder="What do you think about this dish?"/>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => dispatch({type: "SWITCH_MODAL"})}>
              Close
            </Button>
            <Button variant="primary" onClick={ () => dispatch({type: "SWITCH_MODAL"})}>
              Submit Vote
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  