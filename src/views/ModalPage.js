import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Button, Modal, Form, Image, Row, Col, Container } from 'react-bootstrap';
import foodImage from '../food-image.svg'
import {submitVote} from '../fetch/Fetch'
import { useAlert } from "react-alert";


export default function ModalPage({show, handleClose}) {

  const [checkedRadio, setCheckedRadio] = useState(null)  
  const [comment, setComment] = useState("")
  const dispatch = useDispatch()
  const modal = useSelector(state => state.modal)
  const selectedDish = useSelector(state => state.selectedDish)

  const alert = useAlert()

  const handleData = (data) => {
    if (data.errors){
      
      console.log(data.errors)
      alert.show("Something happened with the data that was sent. Please, try it again")
    } else {
      
      alert.success('thank you for submitting your vote')
      dispatch({type: "SWITCH_MODAL"})
    }
  }

  const handleClick = async () => {
    if (checkedRadio){
      let data = await submitVote(checkedRadio, comment, selectedDish.id)
      handleData(data)
    } else {
      alert('Rate this dish in order to submit your vote')
    }
  }

  
    
    
  
    return (
      <>
        <Modal show={modal} onHide={() => dispatch({type: "SWITCH_MODAL"})}>
            <Row className="show-grid" float="center">
              <Col md={{ span: 9, offset: 3 }} sm={{ span: 9, offset: 3 }} >
                <Image src={foodImage} height='171' width='180' thumbnail />
              </Col>
            </Row>
          <Modal.Body>
            <Form>
            <Modal.Title>Rate This Dish</Modal.Title>
              <div key={`inline-checkbox`} className="mb-3">
              {[1,2,3,4,5].map(value => (
                <Form.Check 
                inline label={`${value}`} 
                type='checkbox' 
                value={value} 
                key={value} checked={checkedRadio === `${value}`} 
                onChange={(e) => setCheckedRadio(e.target.value)}/>
                ))}
              </div>
              <Form.Label>Leave a Comment:</Form.Label>
              <Form.Control 
              value={comment} 
              onChange={(e)=> setComment(e.target.value)} 
              as="textarea" 
              rows="3" 
              placeholder="What do you think about this dish?"/>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => dispatch({type: "SWITCH_MODAL"})}>
              Close
            </Button>
            <Button variant="primary" onClick={ () => handleClick()}>
              Submit Vote
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  