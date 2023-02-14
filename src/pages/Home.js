import React from 'react';
import { Button, Card, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import '../assets/css/Home.css'
function Home() {
    return (<>

        <Navbar bg="none" style={{ paddingTop: 4, position: 'fixed', right: 0, left: 0, }}>
            <Container >
                <Navbar.Brand href="#home" style={{ marginLeft: "4.5rem", width: "37.3%" }}>

                    <img src={require('../assets/img/visitdesk_color.dark.png')} alt='Logo' style={{ height: 33 }} />

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
            <Container style={{ paddingTop: '100px' }}>

                <Row>
                    <Col lg={3} md={3}></Col>
                    <Col lg={6} md={6} style={{ textAlign: "center", fontSize: "2rem", display: "block", lineHeight: "1", color: "white", fontWeight: 400 }}>
                        <span >
                            Change the way you<br /> manage visitors.
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3} md={3}></Col>
                    <Col lg={6} md={6} style={{ marginTop: 25, textAlign: "center", fontSize: "1rem", display: "block", lineHeight: "1.5", color: "#fff", fontWeight: 500 }}>
                        <span >
                            Tired of maintaining visitor check-ins on books & paper? <br />Track and manage your daily visitors with ease on <br />Visitdesk .
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3} md={1}></Col>
                    <Col lg={6} md={10} style={{ marginTop: 10, textAlign: "center", fontSize: "1rem", display: "block", lineHeight: "1.5", color: "#fff", fontWeight: 500 }}>
                        <Button className='btn-signup signupBtn'>Signup For Free!</Button>
                    </Col>
                </Row>
                <Row>
                    <Col lg={1} md={1}></Col>
                    <Col lg={10} md={10} style={{ marginTop: 40, textAlign: "center", fontSize: "1rem", display: "block", lineHeight: "1.5", color: "#fff", fontWeight: 500 }}>
                        <div className='macbookhero'>
                            <img src={require('../assets/img/macbook.resized.png')} className="under" alt='Macbook screen' style={{ maxWidth: "88%" }} />
                            <div className='macbookscreen'>
                                <img src={require('../assets/img/visitdesk_dashboard.resized.png')} className="over" alt='Macbook screen' style={{ maxWidth: "88%" }} />

                            </div>
                            <div className='phone'>
                                <div className='phonescreen'>
                                    <img src={require('../assets/img/iphonex.resized.png')} className="over" alt='Macbook screen' />
                                </div>
                            </div>


                            <Card style={{}} className='greenCard'>
                                <Card.Img variant="top" style={{ maxWidth: "22%", marginTop: "45px", maxHeight: '50%' }} src={require("../assets/img/reception.resized.png")} />
                                <Card.Body>
                                    <Card.Title> <h4 style={{ marginBottom: '1rem' }}>Upgrade your office to 5G!</h4></Card.Title>
                                    <p>
                                        One-stop smart visitor
                                        management system to
                                        ensure safe workspace
                                    </p>
                                    <Button >Explore</Button>
                                </Card.Body>
                            </Card>
                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col lg={1} md={1}></Col>
                    <Col lg={10} md={10} style={{ marginTop: 40, textAlign: "center", fontSize: "1rem", display: "block", lineHeight: "1.5", color: "#fff", fontWeight: 500 }}>

                    </Col>
                </Row>
            </Container>


            <Container id="sec2" style={{ paddingTop: '100px' }}>
                <div className="content">
                    <h2 style={{marginBottom: "2%"}}>Stay in full control</h2>
                    <p className="green-color" style={{paddingBottom: "2rem",fontWeight:500}} >Manage everything that comes through your front door!</p>
                    <Row>
                        <Col md={4} lg={4}>
                            <div className="icon-section">
                                <img src={require('../assets/img/visitdesk-reception.resized.png')}  alt="Visit Desk - Visitor Check-in's" />
                                <h2>Visitor check-in's</h2>
                                <p>Visitdesk provides a seamless and consistent check-in experience for everyone who walks through your door.</p>
                            </div>
                        </Col>
                        <Col md={4} lg={4}>
                            <div className="icon-section">
                                <img src={require('../assets/img/visitdesk-reception.resized.png')}  alt="Visit Desk - Visitor Check-in's" />
                                <h2>Visitor check-in's</h2>
                                <p>Visitdesk provides a seamless and consistent check-in experience for everyone who walks through your door.</p>
                            </div>
                        </Col>
                        <Col md={4} lg={4}>
                            <div className="icon-section">
                                <img src={require('../assets/img/visitdesk-reception.resized.png')}  alt="Visit Desk - Visitor Check-in's" />
                                <h2>Visitor check-in's</h2>
                                <p>Visitdesk provides a seamless and consistent check-in experience for everyone who walks through your door.</p>
                            </div>
                        </Col>

                    </Row>
                </div>
            </Container>
        </Container>

    </>);
}

export default Home;