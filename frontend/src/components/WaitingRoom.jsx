
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

// const WaitingRoom = ({ joinChatRoom }) => {
//   const [username, setUsername] = useState();
//   const [chatroom, setChatroom] = useState();

//   return (
//     <>
//       <Form
//         onSubmit={e => {
//           e.preventDefault();
//           joinChatRoom(username, chatroom);
//         }}
//       >
//         <Row className="px-5 py-5">
//           <Col sm={12}>
//           <Form.Label htmlFor="inputUsername">Username</Form.Label>
//             <Form.Control
//               placeholder="Username"
//               onChange={(e) => setUsername(e.target.value)}
//             />
//             <Form.Control
//               placeholder="ChatRoom"
//               onChange={(e) => setChatroom(e.target.value)}
//             />
//           </Col>
//           <Col dm={12}>
//             <hr />
//             <Button variant="success" type="submit">
//               Join
//             </Button>
//           </Col>
//         </Row>
//       </Form>
//     </>
//   );
// };
// export default WaitingRoom;



import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const WaitingRoom = ({ joinChatRoom }) => {
  const [username, setUsername] = useState();
  const [chatroom, setChatroom] = useState();

  return (
    <>
    <Form
        onSubmit={e => {
          e.preventDefault();
          joinChatRoom(username, chatroom);
        }}
      >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="username" placeholder="Enter username"  onChange={(e) => setUsername(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>ChatRoom</Form.Label>
        <Form.Control type="chatroom" placeholder="ChatRoom"  onChange={(e) => setChatroom(e.target.value)} />
      </Form.Group>
      <Button variant="success" type="submit">
        Join
      </Button>
    </Form>
    </>
  );
}

export default WaitingRoom;