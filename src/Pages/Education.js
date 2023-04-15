import React, { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'

export default class Education extends Component {
    render() {
        return (
            <Container style={{ width: '1000px' }}>
                  <div style={{width:'1500px block-center border-radius:25px'}} className="p-2 mb-2 mt-5 bg-secondary text-white">
                <h1> В нашей студии вы можете пройти курс обучения, 
                    для этого заполните форму, 
                    и мы вам перезвоним 
                    и уточним по поводу обучения</h1>
                    </div>
                <h2 className='text-center'>Запись на обучение</h2>
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
                        <Form.Label>Направление обучения</Form.Label>
                        <Form.Control type="tel" placeholder="Напишите чему хотите обучаться" />
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