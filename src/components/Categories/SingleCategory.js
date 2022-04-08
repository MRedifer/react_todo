import React, { Component } from 'react'

export default class SingleCategory extends Component {
  render() {
    return (
      <tr>
          <td>{this.props.category.CategoryName}</td>
          <td>{this.props.category.CategoryDescription}</td>
      </tr>
    )
  }
}
