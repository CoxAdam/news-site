import sections from '../data/sections.json';
import { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AppNav() {
  const [navItems, setNavItems] = useState(sections)
  
  function refresh() {
    window.location.reload(false)
  }
  return (
    <Navbar bg="dark" variant='dark'>  
      <Container>
        <Nav>
          {
            navItems.map((navItem, index) => {
              return (
                <Nav.Link as={ Link } key={index} to={`/${navItem.value}`}>
                  {navItem.label}
                </Nav.Link>
              )
            })
          }
        </Nav>
      </Container>
    </Navbar>
  )
}

export default AppNav