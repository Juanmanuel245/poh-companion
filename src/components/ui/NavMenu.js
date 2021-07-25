import React, { useEffect } from 'react';
import './navbar.css';    
import ReactGA from 'react-ga';
import { useTranslation } from 'react-i18next';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

export const NavMenu = () => {
    const { t } = useTranslation(['navbar']);
    useEffect(() => {ReactGA.initialize('UA-197549218-1');}, []);

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="navbar navbar-expand-lg navbar-light bg-light background-nav navbar-expand-lg">
          <Navbar.Brand href="#home">Poh companion</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">{t('inicio')}</Nav.Link>
              <Nav.Link href="/newsletter">Newsletter</Nav.Link>
              <Nav.Link href="community">{t('comunidad')}</Nav.Link>
              {/* <Nav.Link href="/vote">{t('votaciones')}</Nav.Link>  */}
              <Nav.Link href="/lottery">Loteria UBI</Nav.Link> 
              <NavDropdown   title={t('herramientas')} id="collasible-nav-dropdown">
                <NavDropdown.Item href="/profile-check">{t('verificarperfil')}</NavDropdown.Item>
                <NavDropdown.Item href="/gas-calculator">{t('calculadorcostos')}</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link eventKey={2} className="text-danter" href="/link-address">{t('vincularcuenta')}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
}
