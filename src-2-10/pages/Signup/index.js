import React, { useState } from "react";
import Container from "../../components/Container";
import Col from "../../components/Col";
import Row from "../../components/Row";

function Signup() {
  // const [username, setUsername] = useState();
  // const [password, setPassword] = useState();
  const [userDetails, setUserDetails] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log("username is " + userDetails.username);
    console.log("password is " + userDetails.password);
  };

  return (
    <div>
      <div className="mt-4">
        <h2>Welcome to Wikipedia Searcher!</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <Container className="mt-3 px-5">
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="text"
                placeholder="Username"
                name="username"
                onChange={e => setUserDetails({...userDetails, username: e.target.value})}
                // onChange={e => setUsername(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                onChange={e => setUserDetails({...userDetails, password: e.target.value})}
                // onChange={e => setPassword(e.target.value)}
              />
            </Col>
          </Row>
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </Container>
        <Container className="mt-4">
          <h3>Hello {userDetails.username}!</h3>
          <p>I probably shouldn't tell you this, but your password is {userDetails.password}!</p>
        </Container>
      </form>
    </div>
  );
}

export default Signup;
