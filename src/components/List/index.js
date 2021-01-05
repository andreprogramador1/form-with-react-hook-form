import React, { useState } from 'react'
import api from '../../services/api'

export const List = ({ data, setData }) => {

  async function getContent() {
    const response = await api.get('/users')
    console.log(response.data)
    setData(response.data)
  }

  return(
    <>
    {data.map((user, i) => (
      <ul>
        <li>{user.name}</li>
        <li>{user.lastName}</li>
        <li>{user.email}</li>
        <li>{user.occupation}</li>
        <li>{user.phone}</li>
      </ul>
    ))}
    
    <button onClick={getContent}>List</button>
    </>
  );
}