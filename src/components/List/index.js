import React, { useState } from 'react'
import api from '../../services/api'
import { LiContainer } from './style'
import { SideBar } from '../SideBar'

export const List = () => {

  const [data, setData] = useState([]);

  async function getContent() {
    const response = await api.get('/users')
    console.log(response.data)
    setData(response.data)
  }

  return(
    <>
    {data.map((user, i) => (
      <LiContainer>
      <ul>
          <li>{user.name}</li>
          <li>{user.lastName}</li>
          <li>{user.email}</li>
          <li>{user.occupation}</li>
          <li>{user.phone}</li>  
      </ul>
      </LiContainer>
    ))}

      <button onClick={getContent}>List</button>
      <SideBar/>
    </>
  );
}