import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <Navbar variant='dark' bg='dark' expand='md' className='p-3'>
        <Navbar.Brand href='/'>ToDo</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
            <Nav className='mr-auto'>
                <Link to='/login' className='nav-link'>Login</Link>
                <Link to='/todos' className='nav-link'>Todos</Link>
                <Link to='/categories' className='nav-link'>Categories</Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}