import React, { Component } from "react";
import { Navbar, Nav, Container, FormControl, Form, Button } from "react-bootstrap";
import logo from './Logic.png'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contacts from '../Pages/Contacts'
import Blog from '../Pages/Blog'
import Sketches from '../Pages/Sketches'
import Record from '../Pages/Record'
import Price from '../Pages/Price'
import Education from '../Pages/Education'
import Gallery from '../Pages/Gallery'
import { AiFillShopping} from "react-icons/fa"





export default class Header extends Component {
    render() {
        return (
            <>
                
                <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                alt="Logo"
                            /> Toxin
                            
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" /> 'Button' is defined but never used
                        <Navbar.Collapse id="responsive-navbar-nav" >
                            <Nav className="me-auto">
                                <Nav.Link href="/" > Главная </Nav.Link>
                                <Nav.Link href="/about" >  О нас </Nav.Link>
                                <Nav.Link href="/contacts" > Контакты </Nav.Link>
                                <Nav.Link href="/blog" > Блог </Nav.Link>
                                <Nav.Link href="/Sketches" > Эскизы </Nav.Link>
                                <Nav.Link href="/record" > Запись </Nav.Link>
                                <Nav.Link href="/price" > Цены </Nav.Link>
                                <Nav.Link href="/education" > Обучение </Nav.Link>
                                
                                
                                
                                
                            </Nav>
                            <Form className='d-flex' >
                                <FormControl
                                    type="text"
                                    placeholder="Search"
                                    className="me-sm-2"
                                />
                                <Button variant="success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                    
              <Router>
                    <Routes>
                        <Route  path="/" element={<Home/>} />
                        <Route  path="/about" element={<About/>} />
                        <Route  path="/contacts" element={<Contacts/>} />
                        <Route  path="/blog" element={<Blog/>} />
                        <Route  path="/sketches" element={<Sketches/>} />
                        <Route  path="/record" element={<Record/>} />
                        <Route  path="/price" element={<Price/>} />
                        <Route  path="/education" element={<Education/>} />
                       
                        
                        
                        
                    </Routes>                   
                </Router>

            </>

        )
    }
}