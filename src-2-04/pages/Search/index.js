import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Container from "../../components/Container";
import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";
import Alert from "../../components/Alert";

const Search =() => {
  const [currentData, setNewData] = useState({
      search: "Wikipedia",
      title: "",
      description: "",
      url: "",
      error: ""
  });

  // When the component mounts, update the title to be Wikipedia Searcher
  useEffect(() => {
    document.title = "Wikipedia Searcher";

    API.searchTerms(currentData.search)
      .then(res => {
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        setNewData({... currentData,
          title: res.data[1],
          description: res.data[2][0],
          url: res.data[3][0],
          error: ""
        });
      })
      .catch(err => setNewData({...currentData, error: err.message }));
  }, [currentData.search]);

  const handleInputChange = e => {
    setNewData({...currentData, search: e.target.value });
  };
    return (
      <div>
        <Container style={{ minHeight: "100vh" }}>
          <h1 className="text-center">Search For Anything on Wikipedia</h1>
          <Alert type="danger" style={{ opacity: currentData.error ? 1 : 0, marginBottom: 10 }}>
            {currentData.error}
          </Alert>
          <SearchForm
            handleInputChange={handleInputChange}
            results={currentData.search}
          />
          <SearchResults
            title={currentData.title}
            description={currentData.description}
            url={currentData.url}
          />
        </Container>
      </div>
    );

}

export default Search;
