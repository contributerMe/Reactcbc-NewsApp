import React, { Component } from 'react'
import loading from '../loadinggif.gif'

export default class Loading extends Component {
  render() {
    return (
      <div className='text-center'>
        <img className='img-fluid' src={loading} alt="Loading" />
      </div>
    )
  }
}
