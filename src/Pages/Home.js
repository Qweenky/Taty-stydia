import React, { Component } from 'react'
import CarouselBox from '../Components/CarouselBox'
import {Container, Row, Card, Button, CardGroup, CardDeck} from "react-bootstrap"

export default class Home extends Component {
    render() {
        return (
        <>
            <CarouselBox />
            <Container>
                <h2 className="text-center m-4 " > Наша команда</h2>
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src="https://i.pinimg.com/564x/3f/83/f8/3f83f8cdb60be8259357174e851d3c71.jpg" />
                        <Card.Body>
                            <Card.Title>Тату мастер</Card.Title>
                            <Card.Text>Артём</Card.Text>
                            <Button variant="dark" >О команде</Button>

                        </Card.Body>

                    </Card>

                  

                    
                </CardGroup>
            </Container>
        </>

            
        )
    }
}