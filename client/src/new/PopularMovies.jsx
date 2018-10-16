import React from "react";
import axios from "axios";
import TitleList from "./TitleList"


export default class PopularMovies extends React.Component {
  constructor() {
    super();
    this.state = {
      listMovies: [],
    };
  }

  componentDidMount = () => {
    this.retrieveAllMovies(this.state.num);
  };

  retrieveAllMovies = (num) => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=3d561f8d0b8aac21ad2ca16cb83e0825&language=es"
      )
      .then(res => {
        this.setState({
          listMovies: res.data.results
        });
      });
  };

  render() {
    return <TitleList title="Trending now" url='discover/movie?sort_by=popularity.desc&page=1'/>

  }
}
