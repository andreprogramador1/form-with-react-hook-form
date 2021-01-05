import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './style'

export const SideBar = () => {
  return(
     <Container>
        <Link to="/form">Form</Link>
        <Link to="/users">List</Link>
     </Container> 
  );
}