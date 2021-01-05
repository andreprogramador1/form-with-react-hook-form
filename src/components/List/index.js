import React, { useState } from 'react'
import api from '../../services/api'
import { LiContainer, Button } from './style'
import { SideBar } from '../SideBar'


export const List = () => {

  const [data, setData] = useState([]);


  async function getContent() {
    const response = await api.get('/users')
    console.log(response.data)
    setData(response.data)
  }

  const filterData = (id) => {
    setData(data.filter((item) => (item._id !== id)))
  }

  const handleDelete = async (id) => {
    console.log(id)
    const removed = await api.delete(`/users/${id}`)
    if(removed.status === 200) {
      filterData(id)
    }
  }

  return(
    <>
    {data.map((user, i) => (
      <LiContainer  key={i}>
      <ul>
          <li>{user.name}</li>
          <li>{user.lastName}</li>
          <li>{user.email}</li>
          <li>{user.occupation}</li>
          <li>{user.phone}</li>
          <li><button onClick={ () => { handleDelete(user._id) } } >delete</button></li>  
      </ul>
      </LiContainer>
    ))}

      <Button onClick={getContent}>List</Button>
      <SideBar/>
    </>
  );
}