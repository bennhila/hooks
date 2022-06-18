import React from 'react'
import {Modal,Form ,Button } from 'react-bootstrap';
import { useState } from 'react';
const AddMovies = ({show,handleClose , addMovies }) => {
const [newMovies,setNowMovies]=useState(
    {title:" ",
    date:" ",  
    rate:" ",
    description:" ",
    img:" ",
    
  },

)

    const handelechange = (e)=> {

        setNowMovies({ ...newMovies, [e.target.name]: e.target.value });

console.log(handelechange)
    }
    
 
  return (
    <div>
        {/* <p>{newMovies.title }{newMovies.date}{newMovies.description}{newMovies.img}{newMovies.rate} saifffff</p> */}
             <>
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>add movies</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group>
        <Form.Label>movies title</Form.Label>
        <Form.Control type="text" placeholder="movies title" name="title" onChange={handelechange}/>
       
      </Form.Group>
      <Form.Group>
        <Form.Label>date</Form.Label>
        <Form.Control type="text" placeholder="date" name="date"  onChange={handelechange}/>
       
      </Form.Group>
      <Form.Group>
        <Form.Label>rate</Form.Label>
        <Form.Control type="text" placeholder="rate" name="rate"  onChange={handelechange}/>
       
      </Form.Group> <>
        <Form.Label>description</Form.Label>
        <Form.Control type="text" placeholder="description" name="description"  onChange={handelechange}/>
       
      </> <Form.Group >
        <Form.Label>image</Form.Label>
        <Form.Control type="text" placeholder="image" name="img"  onChange={handelechange}/>
       
      </Form.Group>
      
      
     
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{
            handleClose()
              addMovies(newMovies)
              
            }
          }>
            add movies
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    </div>
  )
}

export default AddMovies