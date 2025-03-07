import { useState } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";

const SendMessageForm = ({ sendMessage }) => {
  const [msg, setMessage] = useState("");

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        sendMessage(msg);
        setMessage("");
      }}
    >
      <InputGroup className="mb-3">
        <Form.Control
          onChange={(e) => setMessage(e.target.value)}
          value={msg}
          placeholder="Type message"
        ></Form.Control>
        <Button variant="primary" type="submit" disabled={!msg}>
          Send
        </Button>
      </InputGroup>
    </Form>
  );
};


export default SendMessageForm;
