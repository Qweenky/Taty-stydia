import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

export default class Price extends Component {
    render() {
        return (
            <Container>
            <div className="p-2 mb-2 mt-5 pd-right bg-secondary text-white">  Маленькая Тату:2500
            
            
            
            </div>
            <div className="p-2 mb-2 mt-5 bg-secondary text-white">  Большое тату:10000
            
            
            
            </div>
            <div className="p-2 mb-2 mt-5 bg-secondary text-white">  Коррекция:3500
            
            
            
            </div>

            </Container>
        )
    }
}