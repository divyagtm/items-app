import {React} from 'react';
import { Link } from 'react-router-dom';
import {  Navbar, Nav, Container} from 'react-bootstrap';

const Header = () => {
    return (
      <header>
          <Navbar bg='dark' variant='dark' expand='md' collapseOnSelect>
              <Container>
                  <Navbar.Brand>
                      <Link to='/' className='link'>
                      HOME
                      </Link>
                      </Navbar.Brand>
                  <Navbar.Toggle aria-controls='basix-navbar-nav' />
                  <Navbar.Collapse id='basic-navbar-nav'>
                      <Nav className='ms-auto'>
                              <Nav.Link as='li'>
                                <Link to='/items' className='link'>
                                  Items 
                                </Link>  
                              </Nav.Link> 

                              <Nav.Link as='li'>
                                <Link to='/add' className='link'>
                                  Add Item 
                                </Link>  
                              </Nav.Link>                                
                      </Nav>
                  </Navbar.Collapse>
              </Container>
          </Navbar>
      </header>
  );
};

export default Header;