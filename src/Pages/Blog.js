import React, { Component } from 'react'
import { Container, Media, Col, Row, Accordion } from 'react-bootstrap'
import Blog_art from './Blog_art.jpg'

export default class Blog extends Component {
    render() {
        return (
            <Container>
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
                              <h2 >Блог</h2>                           
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed augue ut.
                            </div>
                          </div>
                          <div class="d-flex align-items-center" >
                            <div class="flex-shrink-0">
                            <img className='mt-4'
                                src={Blog_art}
                              
                                
                                alt="Logo"
                            />
                            </div>
                            <div class="flex-grow-1 ms-3">
                            <h2 className='mt-2'>Блог</h2>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed augue ut.
                            </div>
                          </div>
                          <div class="d-flex align-items-center" >
                            <div class="flex-shrink-0">
                            <img className='mt-4'
                                src={Blog_art}
                              
                                
                                alt="Logo"
                            />
                            </div>
                            <div class="flex-grow-1 ms-3">
                            <h2 className='mt-2'>Блог</h2>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed augue ut.
                            </div>
                          </div>
                          
                            
                            
                           
                    </Col>

                </Row>
            </Container>
        )
    }
}