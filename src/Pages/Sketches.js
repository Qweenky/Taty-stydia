import React, { Component } from 'react'
import { Container, Media, Col, Row, Accordion } from 'react-bootstrap'
import Blog_art from './ex 1.jpg'
import Ex2 from './Ex 2.jpg'
import Ex3 from './Ex 3.jpg'


export default class Sketches extends Component {
    render() {
        return (
            
            <Container >
            <Row>
                <Col md="9" >
                    
                        
                        <div class="d-flex align-items-center" >
                        <div class="flex-shrink-0">
                        <img className='mt-4'
                            src={Blog_art}
                          
                            
                            alt="Logo"
                        />
                        </div>
                        <div class="flex-grow-1 ms-3">                            
                         
                        </div>
                      </div>
                      <div class="d-flex align-items-center" >
                        <div class="flex-shrink-0">
                        <img className='mt-4'
                            src={Ex2}
                          
                            
                            alt="Logo"
                        />
                        </div>
                        <div class="flex-grow-1 ms-3">
                        
                        </div>
                      </div>
                      <div class="d-flex align-items-center" >
                        <div class="flex-shrink-0">
                        <img className='mt-4'
                            src={Ex3}
                          
                            
                            alt="Logo"
                        />
                        </div>
                        <div class="flex-grow-1 ms-3">
                        
                        </div>
                      </div>
                     
                      
                      
                      
                      
                      
                        
                        
                       
                </Col>

            </Row>
        </Container>
        )
    }
}