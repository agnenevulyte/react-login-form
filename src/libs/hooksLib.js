import { useState } from "react";

/*
Creating a custom React Hook starts with the word use in its name. So ours is called useFormFields.

Our Hook takes the initial state of our form fields as an object and saves it as a state variable called fields.

It returns an array with fields and a function that sets the new state based on the event object. The only difference here is that we are using event.target.id (which contains the id of our form field) to store the value (event.target.value).
*/

export function useFormFields(initialState) {
  const [fields, setValues] = useState(initialState);

  return [
    fields,
    function(event) {
      setValues({
        ...fields,
        [event.target.id]: event.target.value
      });
    }
  ];
}