import React from 'react'
import { Container } from './style'
import { useForm, Controller  } from 'react-hook-form'

export const Form = () => {

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
      <label>Example</label>
      <input name="example" defaultValue="test" ref={register} />
      <label>ExampleRequired</label>
      <input
        name="exampleRequired"
        ref={register({ required: true, maxLength: 10 })}
      />
      {errors.exampleRequired && <p>This field is required</p>}
      <input type="submit" />
    </form>
    </Container>
  );
}