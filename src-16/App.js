import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json.js";
import "./App.css";

class App extends React.Component {
  state = {
    friends: friends
  };

  handleFriendship = (id) => {
    this.setState({ friends:  this.state.friends.filter(friend => friend.id !== id)});
  };

  render() {

    return (
      <Wrapper>
        <h1 className="title">Friends List</h1>
        <ul>
          {this.state.friends.map(x =>
            <FriendCard friend={x} handleFriendship={this.handleFriendship}/>
          )}          
        </ul>
      </Wrapper>
    );
  }
}

export default App;
