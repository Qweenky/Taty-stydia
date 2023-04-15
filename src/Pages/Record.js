import React, { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'

export default class Record extends Component {
    render() {
        return (
            <Container style={{ width: '500px' }}>
                <h1 className='text-center'>Запись на приём</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail" >
                        <Form.Label>Имя</Form.Label>
                        <Form.Control type="tel" placeholder="Имя" />
                        <Form.Text>
                        

                        </Form.Text>


                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Телефон</Form.Label>
                        <Form.Control type="tel" placeholder="Телефон" />

                    </Form.Group>
                    <Form.Group controlId="formBasicEmail" >
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="tel" placeholder="Email" />
                        <Form.Text>
                        

                        </Form.Text>


                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Проверить меня" />

                        

                    </Form.Group>
                    <Button variant="primary" type="submit" >Отправить</Button>


                </Form>
            </Container>
            
        )
    }
}