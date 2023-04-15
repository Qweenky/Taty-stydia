import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import one from '../assets/one.jpg'
import two from '../assets/two.jpg'
import three from '../assets/three.jpg'
import four from '../assets/four.jpg'
import five from '../assets/five.jpg'

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                
                <Carousel.Item>
                    <img width={800} height={800} 
                        className="d-block w-100"
                        src= { two }
                       
                        alt="one"                       
                    />
                    <Carousel.Caption>
                        <h3>Toxin</h3>
                        <p>Lorem ipsum</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img  width={800} height={800} src='https://i.pinimg.com/564x/86/7d/60/867d60c3d8068aefc15f5ed5c76e6fea.jpg'
                        className="d-block w-100"
                        
                        alt="one"                       
                    />
                    <Carousel.Caption>
                        <h3>Toxin</h3>
                        <p>Lorem ipsum</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={800} height={800} src='https://i.pinimg.com/564x/6e/75/33/6e7533348313aaff0cc3170e45ac7ee4.jpg'
                        className="d-block w-100"
                        
                        alt="one"                       
                    />
                    <Carousel.Caption>
                        <h3>Toxin</h3>
                        <p>Lorem ipsum</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={800} height={800} src='https://i.pinimg.com/564x/2e/56/8c/2e568ceeb98c658766841aeba70a6559.jpg'
                        className="d-block w-100"
                        
                        alt="one"                       
                    />
                    <Carousel.Caption>
                        <h3>Toxin</h3>
                        <p>Lorem ipsum</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        )
    }
}