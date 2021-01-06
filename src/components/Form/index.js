import React, { useEffect } from 'react'
import { Container } from './style'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message';
import api from '../../services/api'
import { SideBar } from '../SideBar'
import { useParams  } from 'react-router-dom'

export const Form = () => {

  const { register, handleSubmit, watch, errors, setValue } = useForm({
    criteriaMode: "all"
  });

  const { idparams } = useParams();

  function clear(response) {
    setValue('name', response ? response.data.name : '')
    setValue('lastName', response ? response.data.lastName : '')
    setValue('email', response ? response.data.email : '')
    setValue('password', response ? response.data.password : '')
    setValue('phone', response ? response.data.phone : '')
  }

  
  useEffect(() => {
    async function getProduct() {
      const response = await api.get('users/'+idparams)
      console.log(response)
      clear(response)
    }
    getProduct()
  },[idparams])


  function onSubmit(data) {
    
    const method = idparams ? 'patch' : 'post'
    const url = idparams
     ? `/users/${idparams}`
     : `/users/`
    api[method](url, data)
    .then((response) => {
      clear()
      // console.log(response)
    })
   
  }


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