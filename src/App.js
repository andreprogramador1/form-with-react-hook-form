import React, { useState } from 'react'
import { Form } from './components/Form'
import { SideBar } from './components/SideBar';
import { List } from './components/List'
import api from './services/api'
import Routes from './routes'
import { BrowserRouter } from 'react-router-dom'

function App() {



  return (
    <div className="App">
       
      {/* <Form data={data} setData={setData}/>
      <List data={data} setData={setData}/> */}

      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
       
    </div>
  );

}

export default App;
