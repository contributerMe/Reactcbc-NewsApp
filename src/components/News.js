import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Loading from "./Loading";
import PropTypes  from "prop-types";

export class News extends Component {
  static defaultProp = {
    country:'us',
    pageSize:12,
    category:'general'
  }
  static propTypes ={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
  }
  constructor() {
    // console.log("from constr");
    super();
    this.state = {
      articles: [],
      page: 1,
    };
  }

  async componentDidMount() {
    // console.log("from comDidMo");
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=89912395102b4fb3b4937ec533a674ca`;
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }
  //Handles prev and next click
  handlePrevClick = async () => {
    // console.log("Prev");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=89912395102b4fb3b4937ec533a674ca&page=${
      this.state.page - 1
    }&pageSize=12`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({ articles: parsedData.articles, page: this.state.page - 1,  loading:false });
  };
  handleNextClick = async () => {
    // console.log("Next");
    // console.log(this.state.page);
    if (this.state.page  > (Math.ceil(this.state.totalResults)/12)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=89912395102b4fb3b4937ec533a674ca&page=${
        this.state.page + 1
      }&pageSize=12`;
      
    this.setState({loading:true})
      let data = await fetch(url);
      let parsedData = await data.json();
      // console.log(parsedData);
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
        loading: false
      });
    }
  };

  render() {
    // console.log("from rennder")
    return (
      <div>
        <h2 className="my-3">Headlines</h2>
        {this.state.loading && <Loading/>}
        <div className="container my-3">
          <h2>Headlines</h2>
          <div className="row">
            {!this.state.loading && this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItems
                    title={element.title ? element.title.slice(0, 40) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 80)
                        : ""
                    }
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
          <div className=" container d-flex justify-content-between">
            <button
              onClick={this.handlePrevClick}
              disabled={this.state.page <= 1}
              className="btn btn-dark"
              type="button"
            >
              &larr; Previous
            </button>
            <button
              onClick={this.handleNextClick}
              disabled={
                this.state.page  > (Math.ceil(this.state.totalResults)/12)
              }
              className="btn btn-dark"
              type="button"
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
