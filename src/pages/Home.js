import React, { useEffect } from 'react';
import { Button, Card, Col, Container, Form, Nav, Navbar, Row } from 'react-bootstrap';
import '../assets/css/Home.css'

function Home() {

    
    return (<>

        <Navbar className='' id="navbar"  style={{ boxShadow:"none", zIndex: 100, paddingTop: 4, position: 'fixed', right: 0, left: 0, }}>
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
                    <h2 style={{ marginBottom: "2%" }}>Stay in full control</h2>
                    <p className="green-color" style={{ paddingBottom: "2rem", fontWeight: 500 }} >Manage everything that comes through your front door!</p>
                    <Row>
                        <Col md={4} lg={4}>
                            <div className="icon-section">
                                <img src={require('../assets/img/visitdesk-reception.resized.png')} alt="Visit Desk - Visitor Check-in's" />
                                <h2>Visitor check-in's</h2>
                                <p>Visitdesk provides a seamless and consistent check-in experience for everyone who walks through your door.</p>
                            </div>
                        </Col>
                        <Col md={4} lg={4}>
                            <div className="icon-section">
                                <img src={require('../assets/img/visitdesk-verify-visitors-2.resized.png')} alt="Visit Desk - Visitor Check-in's" />
                                <h2>Verify visitor's</h2>
                                <p>Visitdesk will verify the visitor's information via OTP (One Time Password) through SMS or eMail.</p>
                            </div>
                        </Col>
                        <Col md={4} lg={4}>
                            <div className="icon-section">
                                <img src={require('../assets/img/visitdesk-track-visitors.resized.png')} alt="Visit Desk - Visitor Check-in's" />
                                <h2>Track visitor's</h2>
                                <p>Every visitor's information are securely stored and archived so that you can access it if and whenever you need it.</p>
                            </div>
                        </Col>

                    </Row>
                </div>
            </Container>
            <Container id="sec3" style={{}}>

                <div className="">

                    <Row>
                        <Col className="bubbleBg" style={{}} md={8} lg={8}>
                            <Row>
                                <Col lg={4} md={4} style={{ display: "flex", alignItems: 'center', padding: "0 3px" }}>
                                    <Card className='greenCard'>
                                        <Card.Img variant="top" style={{ maxWidth: "22%", marginTop: "45px", maxHeight: '50%' }} src={require("../assets/img/face-capture.resized.png")} />
                                        <Card.Body>
                                            <Card.Title> <h4 style={{ marginBottom: '1rem' }}>Face Capture</h4></Card.Title>
                                            <p>

                                                Take your visitor authentication to next leve
                                            </p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={4} md={4} style={{ padding: "0 3px" }}>
                                    <Card className='greenCard'>
                                        <Card.Img variant="top" style={{ maxWidth: "22%", marginTop: "45px", maxHeight: '50%' }} src={require("../assets/img/print-token.resized.png")} />
                                        <Card.Body>
                                            <Card.Title> <h4 style={{ marginBottom: '1rem' }}>Print Tokens</h4></Card.Title>
                                            <p>


                                                Print visitor tokens via Device instantly


                                            </p>
                                        </Card.Body>
                                    </Card>
                                    <Card className='greenCard mb3' style={{}}>
                                        <Card.Img variant="top" style={{ maxWidth: "22%", marginTop: "45px", maxHeight: '50%' }} src={require("../assets/img/otp-verification.resized.png")} />
                                        <Card.Body>
                                            <Card.Title> <h4 style={{ marginBottom: '1rem' }}>   OTP Verification</h4></Card.Title>
                                            <p>


                                                Online verification through OTP via SMS / Emai
                                            </p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={4} md={4} style={{ display: "flex", alignItems: 'center', padding: "0 3px" }}>
                                    <Card className='greenCard'>
                                        <Card.Img variant="top" style={{ maxWidth: "22%", marginTop: "45px", maxHeight: '50%' }} src={require("../assets/img/smart-search.resized.png")} />
                                        <Card.Body>
                                            <Card.Title> <h4 style={{ marginBottom: '1rem' }}> Digital Checkin</h4></Card.Title>
                                            <p>


                                                Replaces the traditional log-book entries with digital platform.
                                            </p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={4} lg={4} style={{ display: "flex", alignItems: 'center' }}>
                            <div class="section4-column-2">
                                <p class="green-color">Cool features!</p>
                                <h3>Make your reception area smart!</h3>
                                <p>Sleek tab sign-in brings the delightful experience to your reception and smart features enhance your security and manage your visitor logs in a swift.</p>

                            </div>
                        </Col>


                    </Row>
                </div>
            </Container>
            <Container id="sec4" style={{ paddingTop: 0, textAlign: "center", maxWidth: " 1140px" }}>
                <div className=" ">
                    <h2 style={{ marginBottom: "2%" }}>More Features</h2>
                    <img src={require('../assets/img/icon.png')} alt='Logo' style={{ maxWidth: "1140px" }} />
                </div>
            </Container>
            <Container id="sec5" style={{ marginTop: "100px" }}>

                <div className="content">

                    <Row>

                        <Col md={5} lg={5} style={{}}>
                            <div class="section4-column-2">
                                <p class="green-color">Why Visitdesk?</p>
                                <h3>Why customers love <br />Visitdesk?</h3>
                                <p>We will recoup a huge chunk of the time your business is wasting with paper forms or by maintaining visitor books.</p>

                            </div>
                        </Col>
                        <Col className="bubbleBg" style={{}} md={7} lg={7}>
                            <Row>
                                <Col> <Card className='whiteCard' >

                                    <Row>
                                        <p> No paperworks</p>

                                    </Row>

                                </Card></Col>
                                <Col> <Card className='whiteCard'>


                                    No paperworks

                                </Card></Col>
                            </Row>
                            <Row>
                                <Col> <Card className='whiteCard'>


                                    Ensure safety

                                </Card></Col>
                                <Col> <Card className='whiteCard'>


                                    Affordable plans

                                </Card></Col>
                            </Row>
                        </Col>

                    </Row>
                </div>
            </Container>
            <Container id="sec6" style={{ marginTop: "100px" }}>

                <div className="content">

                    <Row>
                        <Col className="bubbleBg" style={{}} md={8} lg={8}>
                            <iframe title='f' width="100%" height="315" src="https://www.youtube.com/embed/gD3iXdf9aEE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""  ></iframe>
                        </Col>

                        <Col md={4} lg={4} style={{}}>
                            <div class="section4-column-2">
                                <p class="green-color">Smart sign-in</p>
                                <h3>'WOW!' your visitors with Visitdesk.</h3>
                                <p>World class visitor management system now available for your business with features like Face Capture, Compliance Sign, OTP Verification, Print Token.</p>

                            </div>
                        </Col>

                    </Row>
                </div>
            </Container>
            <Container id="sec7" style={{ marginTop: "100px" }}>

                <div className="content">

                    <Row>

                        <Col className='bubbleBg' md={8} lg={8} style={{
                            height: "70vh",
                            display: "flex",
                            alignItems: "center"
                        }}>
                            <div class="section4-column-2">
                                <p class="green-color">ideal solution</p>
                                <h3>Visitdesk provides an end-to-end solution for your front desk.</h3>
                                <p>Visitdesk provides an end-to-end solution for your front desk, lobby and gatekeeping. Let it be a Government Office, Corporate office, Personal office, Hospital, Clinic, School, College, Hotel, Residential House, Gated Community and where ever you could possibly imagine of inflow if visitors "Visitdesk is an Ideal Solution" for you.</p>

                            </div>
                        </Col>


                        <Col className='sec7Right' md={4} lg={4} style={{}}>
                            <div className='round'></div>
                            <div className="dotCircle" style={{ transform: 'rotate(360deg)', transition: 'all 2s ease 0s' }}><span className="itemDot itemDot0" data-tab={0} style={{ left: '411px', top: '211px', transform: 'rotate(0deg)', transition: 'all 1s ease 0s' }}>
                                <img alt="icon" src={require("../assets/img/school-normal.png")} className="circle-img schools-img" />
                                <img alt="icon" src={require("../assets/img/school-hover.png")} className="circle-img circle-img-hover schools-img-hover" />
                                <span className="forActive" />
                            </span><span className="itemDot itemDot1 active" data-tab={1} style={{ left: '311px', top: '384px', transform: 'rotate(0deg)', transition: 'all 1s ease 0s' }}>
                                    <img alt="icon" src={require("../assets/img/residence-normal.png")} className="circle-img residence-img" />
                                    <img alt="icon" src={require("../assets/img/residence-hover.png")} className="circle-img circle-img-hover residence-img-hover" />
                                    <span className="forActive" />
                                </span><span className="itemDot itemDot2" data-tab={2} style={{ left: '111px', top: '384px', transform: 'rotate(0deg)', transition: 'all 1s ease 0s' }}>
                                    <img alt="icon" src={require("../assets/img/govt-normal.png")} className="circle-img govt-img" />
                                    <img alt="icon" src={require("../assets/img/govt-hover.png")} className="circle-img circle-img-hover govt-img-hover" />
                                    <span className="forActive" />
                                </span><span className="itemDot itemDot3" data-tab={3} style={{ left: '11px', top: '211px', transform: 'rotate(0deg)', transition: 'all 1s ease 0s' }}>
                                    <img alt="icon" src={require("../assets/img/banking-normal.png")} className="circle-img banking-img" />
                                    <img alt="icon" src={require("../assets/img/banking-hover.png")} className="circle-img circle-img-hover banking-img-hover" />
                                    <span className="forActive" />
                                </span><span className="itemDot itemDot4" data-tab={4} style={{ left: '111px', top: '38px', transform: 'rotate(0deg)', transition: 'all 1s ease 0s' }}>
                                    <img alt="icon" src={require("../assets/img/corporate-normal.png")} className="circle-img corporate-img" />
                                    <img alt="icon" src={require("../assets/img/corporate-hover.png")} className="circle-img circle-img-hover corporate-img-hover" />
                                    <span className="forActive" />
                                </span><span className="itemDot itemDot5" data-tab={5} style={{ left: '311px', top: '38px', transform: 'rotate(0deg)', transition: 'all 1s ease 0s' }}>
                                    <img alt="icon" src={require("../assets/img/industry-normal.png")} className="circle-img industry-img" />
                                    <img alt="icon" src={require("../assets/img/industry-hover.png")} className="circle-img circle-img-hover industry-img-hover" />
                                    <span className="forActive" />
                                </span>
                            </div>

                        </Col>

                    </Row>
                </div>
            </Container>
            <Container id="sec8" style={{ paddingTop: 0, textAlign: "center", maxWidth: " 1140px" }}>
                <div className=" ">
                    <h2 style={{ marginBottom: "2%" }}>Our Pricing</h2>

                </div>
                <Row>
                    <Col lg={12} >
                        <div className="col-sm-12 m-5" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span class="switch-label js-switch-label-monthly">Billed monthly</span>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                <span class="slider"></span>

                            </div>
                            <span class="switch-label js-switch-label-yearly active">Billed annually
                                <span class="save-money">Save upto 20%</span>
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container id="sec9" style={{ paddingTop: 0, textAlign: "center", maxWidth: " 1140px" }}>

                <Row>
                    <Col lg={3} >
                        <Card className=''>

                            <Card.Body>
                                <Card.Title>


                                    <div className="pricing-deco">
                                        <svg className="pricing-deco-img" enableBackground="new 0 0 300 100" height="100px" id="Layer_1" preserveAspectRatio="none" version="1.1" viewBox="0 0 300 100" width="300px" x="0px" xmlSpace="preserve" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" y="0px">
                                            <path className="deco-layer deco-layer--1" d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729 c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z" fill="#FFFFFF" opacity="0.6" />
                                            <path className="deco-layer deco-layer--2" d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729 c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z" fill="#FFFFFF" opacity="0.6" />
                                            <path className="deco-layer deco-layer--3" d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716 H42.401L43.415,98.342z" fill="#FFFFFF" opacity="0.7" />
                                            <path className="deco-layer deco-layer--4" d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428 c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z" fill="#FFFFFF" />
                                        </svg>
                                        <h3 className="pricing-title">BASIC</h3>
                                        <div className="pricing-price">
                                            <span className="pricing-currency" /> Free
                                            {/* <span class='pricing-period'>forever</span> */}
                                        </div>
                                    </div>
                                </Card.Title>

                                <p className='longCard'>


                                    100 Visits/ month<br /><br />
                                    1 Branch<br /><br />
                                    1 Desk<br /><br />
                                    1 Device*<br /><br />
                                    5 User<br /><br />
                                    1 Month Data Storage<br /><br />

                                    <p className="green-color" > See All Features</p>
                                    <div className='loginBtn' style={{ width: '154px' }}>
                                        <span style={{}}>Signup Now</span>
                                    </div>
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3} >
                        <Card className=''>

                            <Card.Body>
                                <Card.Title>


                                    <div className="pricing-deco">
                                        <svg className="pricing-deco-img" enableBackground="new 0 0 300 100" height="100px" id="Layer_1" preserveAspectRatio="none" version="1.1" viewBox="0 0 300 100" width="300px" x="0px" xmlSpace="preserve" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" y="0px">
                                            <path className="deco-layer deco-layer--1" d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729 c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z" fill="#FFFFFF" opacity="0.6" />
                                            <path className="deco-layer deco-layer--2" d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729 c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z" fill="#FFFFFF" opacity="0.6" />
                                            <path className="deco-layer deco-layer--3" d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716 H42.401L43.415,98.342z" fill="#FFFFFF" opacity="0.7" />
                                            <path className="deco-layer deco-layer--4" d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428 c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z" fill="#FFFFFF" />
                                        </svg>
                                        <h3 className="pricing-title">STARTUP</h3>
                                        <div className="pricing-price">
                                            <span className="pricing-currency" /> ₹1200 /month
                                            {/* <span class='pricing-period'>forever</span> */}
                                        </div>
                                    </div>
                                </Card.Title>

                                <p className='longCard'>


                                    100 Visits/ month<br /><br />
                                    1 Branch<br /><br />
                                    1 Desk<br /><br />
                                    1 Device*<br /><br />
                                    5 User<br /><br />
                                    1 Month Data Storage<br /><br />

                                    <p className="green-color" > See All Features</p>
                                    <div className='loginBtn' style={{ width: '154px' }}>
                                        <span style={{}}>Signup Now</span>
                                    </div>
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3} >
                        <Card className=''>

                            <Card.Body>
                                <Card.Title>


                                    <div className="pricing-deco">
                                        <svg className="pricing-deco-img" enableBackground="new 0 0 300 100" height="100px" id="Layer_1" preserveAspectRatio="none" version="1.1" viewBox="0 0 300 100" width="300px" x="0px" xmlSpace="preserve" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" y="0px">
                                            <path className="deco-layer deco-layer--1" d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729 c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z" fill="#FFFFFF" opacity="0.6" />
                                            <path className="deco-layer deco-layer--2" d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729 c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z" fill="#FFFFFF" opacity="0.6" />
                                            <path className="deco-layer deco-layer--3" d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716 H42.401L43.415,98.342z" fill="#FFFFFF" opacity="0.7" />
                                            <path className="deco-layer deco-layer--4" d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428 c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z" fill="#FFFFFF" />
                                        </svg>
                                        <h3 className="pricing-title">PROFESSIONAL</h3>
                                        <div className="pricing-price">
                                            <span className="pricing-currency" /> ₹2000 /month
                                            {/* <span class='pricing-period'>forever</span> */}
                                        </div>
                                    </div>
                                </Card.Title>

                                <p className='longCard'>


                                    100 Visits/ month<br /><br />
                                    1 Branch<br /><br />
                                    1 Desk<br /><br />
                                    1 Device*<br /><br />
                                    5 User<br /><br />
                                    1 Month Data Storage<br /><br />

                                    <p className="green-color" > See All Features</p>
                                    <div className='loginBtn' style={{ width: '154px' }}>
                                        <span style={{}}>Signup Now</span>
                                    </div>
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3} >
                        <Card className=''>

                            <Card.Body>
                                <Card.Title>


                                    <div className="pricing-deco">
                                        <svg className="pricing-deco-img" enableBackground="new 0 0 300 100" height="100px" id="Layer_1" preserveAspectRatio="none" version="1.1" viewBox="0 0 300 100" width="300px" x="0px" xmlSpace="preserve" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" y="0px">
                                            <path className="deco-layer deco-layer--1" d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729 c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z" fill="#FFFFFF" opacity="0.6" />
                                            <path className="deco-layer deco-layer--2" d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729 c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z" fill="#FFFFFF" opacity="0.6" />
                                            <path className="deco-layer deco-layer--3" d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716 H42.401L43.415,98.342z" fill="#FFFFFF" opacity="0.7" />
                                            <path className="deco-layer deco-layer--4" d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428 c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z" fill="#FFFFFF" />
                                        </svg>
                                        <h3 className="pricing-title">ENTERPRISE</h3>
                                        <div className="pricing-price">
                                            <span className="pricing-currency" /> Get Price
                                            {/* <span class='pricing-period'>forever</span> */}
                                        </div>
                                    </div>
                                </Card.Title>

                                <p className='longCard'>


                                    100 Visits/ month<br /><br />
                                    1 Branch<br /><br />
                                    1 Desk<br /><br />
                                    1 Device*<br /><br />
                                    5 User<br /><br />
                                    1 Month Data Storage<br /><br />

                                    <p className="green-color" > See All Features</p>
                                    <div className='loginBtn' style={{ width: '154px' }}>
                                        <span style={{}}>Signup Now</span>
                                    </div>
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <h5 style={{ marginBottom: "5%", marginTop: '5%' }}>Visitdesk supports all non-profits with 20% off on all the plans!</h5>
                </Row>
            </Container>
            <Container id="sec10" style={{ paddingTop: 35, textAlign: "center", maxWidth: " 1140px" }}>

                <div className="content">

                    <Row>
                        <Col className=' ' md={7} lg={7} style={{}}>

                            <div className="slide-images-main">
                                <img className="slide-images-ipad" src={require('../assets/img/ipad.resized.png')} alt='Macbook screen' />
                                <div className='screens'>
                                    <img src={require('../assets/img/1.resized.png')} alt='Macbook screen' />
                                </div>
                            </div>
                        </Col>
                        <Col className='bubbleBg' md={5} lg={5} style={{
                            height: "70vh",
                            display: "flex",
                            alignItems: "center"
                        }}>
                            <div class="section4-column-2">

                                <h3>Visitdesk Pad <br /><br />
                                    Smart, Comfortable and<br />
                                    <br />
                                    Easy to use tablet app.<br /></h3>
                                <Row>
                                    <Col lg={6}>
                                        <div className="app-btn">
                                            <div className="app-icon">
                                                <div className="app-icon-spacing">
                                                    <i className="fa fa-android" aria-hidden="true" />
                                                </div>
                                            </div>
                                            <div className="app-btn-main">
                                                <div className="app-icon-spacing">
                                                    <div className="app-main-text1">
                                                        Free Download
                                                    </div>
                                                    <div className="app-main-text2">
                                                        Google Play
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className="app-btn">
                                            <div className="app-icon">
                                                <div className="app-icon-spacing">
                                                    <i className="fa fa-android" aria-hidden="true" />
                                                </div>
                                            </div>
                                            <div className="app-btn-main">
                                                <div className="app-icon-spacing">
                                                    <div className="app-main-text1">
                                                        Free Download
                                                    </div>
                                                    <div className="app-main-text2">
                                                        Apple App
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>

                            </div>
                        </Col>
                    </Row></div>


            </Container>
            <footer id='footer'>
                <Container fluid={true} id="sec10" style={{ paddingTop: 35, paddingBottom: 85, textAlign: "center", maxWidth: " 1140px" }}>

                    <div className="content">


                        <Row>
                            <Col lg={3} md={3}></Col>
                            <Col lg={6} md={6} style={{ textAlign: "center", fontSize: "1.7rem", display: "block", lineHeight: "1", color: "white", fontWeight: 400 }}>
                                <span >
                                    Start hosting your guests at ease &
                                    love, together with Visitdesk!
                                </span>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={3} md={3}></Col>
                            <Col lg={6} md={6} style={{ textAlign: "center", marginTop: 20, marginBlock: 20, fontSize: "1rem", display: "block", lineHeight: "1", color: "white", fontWeight: 400 }}>
                                <span >
                                    Do not wait any longer, signup for free now.
                                </span>
                            </Col>
                        </Row>

                        <Row style={{ marginBottom: 30 }}>
                            <Col lg={3} md={1}></Col>
                            <Col lg={3} md={10} style={{ marginTop: 10, textAlign: "center", fontSize: "1rem", display: "block", lineHeight: "1", color: "#fff", fontWeight: 500 }}>
                                <Button className='btn-signup signupBtn'>  Signup  now</Button>
                            </Col>
                            <Col lg={3} md={10} style={{ marginTop: 10, textAlign: "center", fontSize: "1rem", display: "block", lineHeight: "1", color: "#fff", fontWeight: 500 }}>
                                <Button className='btn-signup signupBtn'>  Contact Us</Button>
                            </Col>
                        </Row>
                    </div>


                </Container>
            </footer>
        </Container>

    </>);
}

export default Home;