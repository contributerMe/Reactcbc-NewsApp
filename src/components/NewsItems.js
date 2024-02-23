import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
    let { title, description , imgUrl, newsUrl} = this.props
    return (
      <>
        <div className="card my-3" style={{ maxHeight: "500px", overflow: "hidden" }}>
          <img className="card-img-top" src={!imgUrl?"https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg":imgUrl} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target ="_blank" className="btn btn-primary">Read More</a> 
          </div>
        </div>
      </>
    )
  }
}

export default NewsItems