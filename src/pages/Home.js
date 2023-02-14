import React from 'react';
import { Button, Col, Container, Image, Nav, Navbar, NavDropdown, Row, TabContainer, ToastContainer } from 'react-bootstrap';
import '../assets/css/Home.css'
function Home() {
    return (<>

        <Navbar bg="none" style={{ paddingTop: 4 ,position:'fixed',right:0,left:0, }}>
            <Container >
                <Navbar.Brand href="#home" style={{ marginLeft: "4.5rem", width: "37.3%" }}>

                    <img src={require('../assets/img/visitdesk_color.dark.png')} style={{ height: 33 }} />

                </Navbar.Brand>
                <Navbar.Collapse>
                    <Nav className="ml-auto">
                        <Nav.Link href="#features" className='Navv' style={{}}>COVID'19</Nav.Link>
                        <Nav.Link href="#pricing" className='Navv' style={{}}>Features</Nav.Link>
                        <Nav.Link href="#deets" className='Navv' style={{}}>Pricing</Nav.Link>
                        <Nav.Link href="#deets" className='Navv' style={{}}>HowTo</Nav.Link>
                        <Nav.Link href="#deets" className='Navv' style={{}}>Blogs</Nav.Link>
                        <Nav.Link href="#deets" className='Navv' style={{}}>Testimonial</Nav.Link>
                        <Nav.Link href="#deets" className='Navv' style={{}}>Faq</Nav.Link>
                        <Nav.Link href="#deets" className='loginBtn' style={{}}><span style={{ paddingRight: "0.5rem", paddingLeft: "0.5rem" }}>Login</span></Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
        <Container fluid={true} className="Home" >
            <Container style={{paddingTop: '100px'}}>

            <Row>
                <Col lg={3} md={3}></Col>
                <Col lg={6} md={6} style={{textAlign:"center",fontSize:"2rem",display:"block",lineHeight:"1",color:"white",fontWeight:400}}>
                    <span >
                    Change the way you<br/> manage visitors.
                    </span>
                </Col>
            </Row>
            <Row>
                <Col lg={3} md={3}></Col>
                <Col lg={6} md={6} style={{marginTop:25,textAlign:"center",fontSize:"1rem",display:"block",lineHeight:"1.5",color:"#fff",fontWeight:500}}>
                    <span >
                    Tired of maintaining visitor check-ins on books & paper? <br/>Track and manage your daily visitors with ease on <br/>Visitdesk .
                    </span>
                </Col>
            </Row>
            <Row>
                <Col lg={3} md={1}></Col>
                <Col lg={6} md={10} style={{marginTop:10,textAlign:"center",fontSize:"1rem",display:"block",lineHeight:"1.5",color:"#fff",fontWeight:500}}>
                  <Button className='btn-signup signupBtn'>Signup For Free!</Button>
                </Col>
            </Row>
            <Row>
                <Col lg={1} md={1}></Col>
                <Col lg={10} md={10} style={{marginTop:40,textAlign:"center",fontSize:"1rem",display:"block",lineHeight:"1.5",color:"#fff",fontWeight:500}}>
                <img src={require('../assets/img/macbook.resized.png')} style={{  maxWidth:"88%"}} />
                </Col>
            </Row>
            </Container>
        </Container>

    </>);
}

export default Home;