import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import WaitingRoom from "./components/WaitingRoom";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { useState } from "react";
import ChatRoom from "./components/ChatRoom";

function App() {
  const [connection, setConnection] = useState();
  const [messages, setMessages] = useState([]);

  const joinChatRoom = async (username, chatroom) => {
    try {
      // Initiate connection
      const newConnection = new HubConnectionBuilder()
        .withUrl("http://localhost:5075/chat")
        .configureLogging(LogLevel.Information)
        .build();

      // Set up handler for JoinSpecificChatRoom response
      newConnection.on("JoinSpecificChatRoom", (username, msg) => {
        console.log("JoinSpecificChatRoom msg: ", msg);
      });

      // Set up handler for JoinSpecificChatRoom response
      newConnection.on("ReceieveSpecificMessage", (username, msg) => {
        console.log("ReceieveSpecificMessage msg: ", msg);
        setMessages((messages) => [...messages, { username, message }]);
      });

      // Add handler for receivemessage event
      newConnection.on("receivemessage", (user, message) => {
        console.log(`${user}: ${message}`);
        setMessages((messages) => [...messages, { user, message }]);
      });

      await newConnection.start();
      await newConnection.invoke("JoinSpecificChatRoom", {
        username,
        chatroom,
      });

      setConnection(newConnection);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <main>
        <Container>
          <Row className="px-5 my-5">
            <Col sm="12">
              <h1 className="font-weight-light">Welcome to the chat app</h1>
            </Col>
          </Row>
          {!connection ? (
            <WaitingRoom joinChatRoom={joinChatRoom} />
          ) : (
            <ChatRoom messages={messages}></ChatRoom>
          )}
        </Container>
      </main>
    </>
  );
}

export default App;
