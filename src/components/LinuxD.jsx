import './LinuxD.scss'
import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import fedora from '../img/linuxD/fedora.png'
import RedHat from '../img/linuxD/RedHat.png'
import kali from '../img/linuxD/kali.png'
import ubuntu from '../img/linuxD/ubuntu.png'
import Mint from '../img/linuxD/Mint.png'
import Archlinux from '../img/linuxD/Archlinux.png'
import Manjaro from '../img/linuxD/Manjaro.png'


function LinuxD() {
    return (
        <div className='linux-d'>


            <h2> Linux Distros </h2>

            <Container className='logos-con'>
                <Row className='row'>
                    <Col className='col'>
                        <a href="https://archlinux.org/" target="_blank" rel="noopener noreferrer">
                            <img src={Archlinux} alt="archlinux" />
                        </a>

                    </Col>
                    <Col className='col'>
                        <a href="https://manjaro.org/" target="_blank" rel="noopener noreferrer">
                            <img src={Manjaro} alt="manjaro" />
                        </a>

                    </Col>



                    <Col className='col'>
                        <a href="https://getfedora.org/" target="_blank" rel="noopener noreferrer">
                            <img src={fedora} alt="fedora" />
                        </a>

                    </Col>
                    <Col className='col'>
                        <a href="https://www.redhat.com" target="_blank" rel="noopener noreferrer">
                            <img src={RedHat} alt="RedHat" />
                        </a>

                    </Col>


                    <Col className='col'>
                        <a href="https://www.kali.org/" target="_blank" rel="noopener noreferrer">
                            <img src={kali} alt="kalilinux" />
                        </a>

                    </Col>
                    <Col className='col'>
                        <a href="https://ubuntu.com/" target="_blank" rel="noopener noreferrer">
                            <img src={ubuntu} alt="ubuntu" />
                        </a>

                    </Col>
                    <Col className='col'>
                        <a href="https://linuxmint.com/" target="_blank" rel="noopener noreferrer">
                            <img src={Mint} alt="linuxmint" />
                        </a>

                    </Col>



                </Row>

            </Container>

            <Container className='videos-con' >

                <iframe src="https://www.youtube.com/embed/Azh3-ZfUq5Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



                <a href="https://www.youtube.com/watch?v=Azh3-ZfUq5Q&t=367s" target="_blank" rel="noopener noreferrer" target="_blank" rel="noopener noreferrer">




                    <Button variant="danger" className='btn'>Open On YouTube</Button>




                </a>






            </Container>




        </div>
    )
}

export default LinuxD