import React, { useState, useEffect } from 'react'
import { Container } from './style'
import { useForm, Controller  } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message';
import api from '../../services/api'
import { SideBar } from '../SideBar'
import { useParams, useRouteMatch  } from 'react-router-dom'

export const Form = () => {

  const { register, handleSubmit, watch, errors, setValue } = useForm({
    criteriaMode: "all"
  });

  const { idparams } = useParams();

  
  useEffect(() => {
    async function getProduct() {
      const response = await api.get('users/'+idparams)
      console.log(response)
      setValue('name', response.data.name)
      setValue('lastName', response.data.lastName)
      setValue('email', response.data.email)
      setValue('password', response.data.password)
      setValue('phone', response.data.phone)
    }
    getProduct()
  },[idparams])

  // function onSubmit(data) {

  //   try {
  //     console.log(data)
  //     const url = `/users`
  //     api.post(url, data)
  //     .then((response) => {
  //     console.log(response)
  //   })

  //   } catch (error) {
  //     console.log(error)
  //   }
   
  // }


  function onSubmit(data) {
    
    const method = idparams ? 'patch' : 'post'
    const url = idparams
     ? `http://localhost:3333/users/${idparams}`
     : `http://localhost:3333/users/`
    api[method](url, data)
    .then((response) => {
      // console.log(response)
    })
   
  }

  // const onSubmit = data => console.log(data);

  return (
    <>
    <Container>

      <form onSubmit={handleSubmit(onSubmit)}>

      <label>Name</label>
      <input name="name"

        ref={register({
          required: "This is required.",
          maxLength: {
            value: 10,
            message: "This input exceed maxLength."
          },
          minLength: {
            value: 3,
            message: "at least 3 characteres"
          }
        })}
      />

      <ErrorMessage errors={errors} name="name">
        {({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <p key={type}>{message}</p>
          ))
        }
      </ErrorMessage>

      <label>Last Name</label>
      <input
        name="lastName"
        ref={register({
          required: "This is required.",
          maxLength: {
            value: 10,
            message: "This input exceed maxLength."
          },
          minLength: {
            value: 3,
            message: "at least 3 characteres"
          }
        })}
      />
      <ErrorMessage errors={errors} name="lastName">
        {({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <p key={type}>{message}</p>
          ))
        }
      </ErrorMessage>


      <label>Email</label>
      <input
        name="email"
        ref={register({
          required: "This is required.",
        })}
      />
      <ErrorMessage errors={errors} name="email">
        {({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <p key={type}>{message}</p>
          ))
        }
      </ErrorMessage>


      <label>Password</label>
      <input
        name="password"
        ref={register({
          required: "This is required.",
          pattern: {
            value: /^\d+$/,
            message: "This input is number only."
          },
          maxLength: {
            value: 12,
            message: "This input exceed maxLength."
          },
          minLength: {
            value: 5,
            message: "at least 5 characteres"
          }
        })}
      />
      <ErrorMessage errors={errors} name="password">
        {({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <p key={type}>{message}</p>
          ))
        }
      </ErrorMessage>


      <label>Phone</label>
      <input
        name="phone"
        ref={register({
          required: "This is required.",
          pattern: {
            value: /^\d+$/,
            message: "This input is number only."
          },
          maxLength: {
            value: 12,
            message: "This input exceed maxLength."
          },
          minLength: {
            value: 5,
            message: "at least 5 characteres"
          }
        })}
      />
      <ErrorMessage errors={errors} name="phone">
        {({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <p key={type}>{message}</p>
          ))
        }
      </ErrorMessage>
      

      <input type="submit"/>
    </form>

        
    </Container>
    <SideBar/>
    </>
  );
}