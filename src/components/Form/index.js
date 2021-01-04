import React from 'react'
import { Container } from './style'
import { useForm, Controller  } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message';

export const Form = () => {

  const { register, handleSubmit, watch, errors } = useForm({
    criteriaMode: "all"
  });

  const onSubmit = data => console.log(data);
  console.log(watch("example"));
  console.log(errors)
  
  return (
    <>
    <Container>

      <form onSubmit={handleSubmit(onSubmit)}>

      <label>Example</label>
      <input name="example" defaultValue="test" ref={register} />
      <label>ExampleRequired</label>
      <input
        name="exampleRequired"
        ref={register({
          required: "This is required.",
          pattern: {
            value: /d+/,
            message: "This input is number only."
          },
          maxLength: {
            value: 10,
            message: "This input exceed maxLength."
          }
        })}
      />
      <ErrorMessage errors={errors} name="exampleRequired">
        {({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <p key={type}>{message}</p>
          ))
        }
      </ErrorMessage>
      

      <input type="submit" />
    </form>
    </Container>
    </>
  );
}