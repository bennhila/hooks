import React from 'react'
import {Card,ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactStars from "react-rating-stars-component";


import './card.css';
const MoviesCard =({movis}) => {
    
    
      
  return (
    <div className='card' >
        <Card style={{ width: '18rem'}} border='dark' className='heightCard'>
      <Card.Img variant="top" src={movis.img}  width='288px' height='400px'
          
       />
      <Card.Body>
        <Card.Title>{movis.title}</Card.Title>
        <Card.Text>{movis.date}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-fnpmlush">
      <ListGroup.Item>{movis.description}</ListGroup.Item>
        {/* <ListGroup.Item>{movis.rate}</ListGroup.Item> */}
        <ReactStars
    count={5}
    

    size={24}
    
   
    value={movis.rate }
  />,
      </ListGroup>
    </Card>
  

    </div>
  )
}

export default MoviesCard