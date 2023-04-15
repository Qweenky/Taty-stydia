import React, { Component, iframe } from 'react'
import карта from '../Pages/карта.jpg'
import { Container, Media, Col, Row, Accordion, } from 'react-bootstrap'
import { YMaps, Map } from '@pbe/react-yandex-maps';

export default class Contacts extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9" >
                        
                            
                            <div class="d-flex align-items-center" >
                            <div class="flex-shrink-0">
                            <h3>Адрес:</h3>
                            </div>
                            <div class="flex-grow-1 ms-3">                            
                              <p className='mt-3' >г.Барнаул Малахова 89</p>                           
                            
                            </div>
                          </div>
                          <div class="d-flex align-items-center" >
                            <div class="flex-shrink-0">
                            <h3>Телефон:</h3>
                            </div>
                            <div class="flex-grow-1 ms-3">                            
                              <p className='mt-3' >9999999999</p>                           
                            
                            </div>
                          </div>
                          <div class="d-flex align-items-center" >
                            <div class="flex-shrink-0">
                            <h3>Email:</h3>
                            </div>
                            <div class="flex-grow-1 ms-3">                            
                              <p className='mt-3' >tattojs@mail.ru</p>                           
                            
                            </div>
                          </div>
                          


  <YMaps className="ymaps-map ymaps-i-ua_js_yes" style="z-index: 0; width: 1690px; height: 1080px;">
    <div>
       Мы в Барнауле
      <Map defaultState={{ center: [53.345101, 83.782385], zoom: 16 }} />
    </div>
  </YMaps>

                         
                            
                            
                           
                    </Col>

                </Row>
            </Container>
            
        )
    }
}