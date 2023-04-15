import React, { Component } from 'react'
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap'

export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Мастера</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Частые вопросы</Nav.Link>
                                </Nav.Item>                                                             
                                                              
                            </Nav>
                                                    
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3" >
                                <Tab.Pane eventKey="first">
                                    <img  src="https://tattooz.ru/upload/sprint.editor/c82/img_1539270054_188_img_2962.jpg" />
                                <p>В нашей тату студии, работают мастера с большим опытом, постоянно проводятся курсы повышения специализации, чтобы вы получили лучший результат</p>


                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                <p>Нету вопросов</p>


                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>

                </Tab.Container>
            </Container>
            
        )
    }
}