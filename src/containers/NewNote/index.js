import React, { useRef, useState } from "react";
import { FormGroup, FormControl, Form } from "react-bootstrap";
import LoaderButton from "../LoaderButton";
import config from "../../config";
import "./NewNote.css";
import { API } from "aws-amplify";
import { s3Upload } from "../../libs/awsLibs";

/*
Everything is fairly standard here, except for the file input. Our form elements so far have been controlled components, as in their value is directly controlled by the state of the component. However, in the case of the file input we want the browser to handle this state. So instead of useState we’ll use the useRef hook. The main difference between the two is that useRef does not cause the component to re-render. It simply tells React to store a value for us so that we can use it later. We can set/get the current value of a ref by using its current property. Just as we do when the user selects a file.

We make our create call in createNote by making a POST request to /notes and passing in our note object. Notice that the first two arguments to the API.post() method are notes and /notes. This is because back in the Configure AWS Amplify chapter we called these set of APIs by the name notes.

For now the note object is simply the content of the note. We are creating these notes without an attachment for now.

Finally, after the note is created we redirect to our homepage.
*/
export default function NewNote(props) {
  const file = useRef(null);
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function validateForm() {
    return content.length > 0;
  }

  function handleFileChange(event) {
    file.current = event.target.files[0];
  }

  /*
We upload the file using the s3Upload method.
Use the returned key and add that to the note object when we create the note. 
*/

  async function handleSubmit(event) {
    event.preventDefault();

    if (file.current && file.current.size > config.MAX_ATTACHMENT_SIZE) {
      alert(
        `Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE /
          1000000} MB.`
      );
      return;
    }

    setIsLoading(true);

    try {
      const attachment = file.current ? await s3Upload(file.current) : null;

      await createNote({ content, attachment });
      props.history.push("/");
    } catch (e) {
      alert(e);
      setIsLoading(false);
    }
  }

  async function createNote(note) {
    return API.post("notes", "/notes", {
      body: note
    });
  }

  return (
    <div className="NewNote content">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="content">
          <FormControl
            value={content}
            componentClass="textarea"
            onChange={e => setContent(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="file">
          <Form.Label>Attachment</Form.Label>
          <FormControl onChange={handleFileChange} type="file" />
        </FormGroup>
        <LoaderButton
          block
          type="submit"
          bsSize="large"
          bsStyle="primary"
          isLoading={isLoading}
          disabled={!validateForm()}
        >
          Create
        </LoaderButton>
      </form>
    </div>
  );
}
