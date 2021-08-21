import React, { useEffect } from 'react';
import './navbar.css';    
import ReactGA from 'react-ga';
import { useTranslation } from 'react-i18next';
import { Image, Nav, Navbar } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from './logo.png';

export const NavMenu = () => {
    const { t } = useTranslation(['navbar']);
    useEffect(() => {ReactGA.initialize('UA-197549218-1');}, []);

    return (
        <Navbar collapseOnSelect={true} expand="xl" bg="dark" variant="dark" className="navbar navbar-expand-x1  background-nav" sticky="top">
          <Navbar.Brand href="#home"><Image src={logo} /> </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto nav-options">
              <Nav.Link eventKey="1" href="/"><i className="fas fa-home"></i> {t('inicio')}</Nav.Link>
              <Nav.Link eventKey="4" href="/lottery"><i className="fas fa-dice"></i> Loteria UBI</Nav.Link> 
              <Nav.Link href="/profile-check"><i className="fas fa-address-card"></i> {t('verificarperfil')}</Nav.Link>
            </Nav>
            <Nav className="nav-options">
              <Nav.Link eventKey="5" className="text-danter" href="/link-address"><i className="fas fa-link"></i> {t('vincularcuenta')}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
}
