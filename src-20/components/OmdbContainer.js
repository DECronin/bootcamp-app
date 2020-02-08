import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import MovieDetail from "./MovieDetail";
import API from "../utils/API";

class OmdbContainer extends Component {
  state = {
    result: {},
    search: ""
  };

  searchMovies = query => {
    API.search(query)
      .then(res => {
        if (this.MovieDetail(res.data)) { 
          this.setState({ result: res.data }) 
        } else {
          alert("Please Provide a Valid Search Request for Our Database.");
          this.defaultState();
        }
      })
      .catch(err => console.log(err));
  };

  defaultState() {
    this.setState({
      result: {},
      search: ""
    })
  };

  componentDidMount() {
    this.searchMovies("The Matrix");
  };

  handleInputChange = event => {
    let { name, value } = event.target;
    this.setState({
      [name] : value
    })
  };

  MovieDetail = data => {
    if (data.Response === "False"){
      return false
    } else {
      return true
    }
  };

  handleFormSubmit = event => {
    event.preventDefault();
    let { search } = this.state;
    this.searchMovies(search);
    this.defaultState();
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card
              heading={this.state.result.Title || "Search for a Movie to Begin"}
            >
              <MovieDetail
                title={this.state.result.Title}
                src={this.state.result.Poster}
                director={this.state.result.Director}
                genre={this.state.result.Genre}
                released={this.state.result.Released}
              />
            </Card>
          </Col>
          <Col size="md-4">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default OmdbContainer;
