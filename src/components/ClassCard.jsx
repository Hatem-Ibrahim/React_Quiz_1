import React, { Component } from 'react'

export default class ClassCard extends Component {
    render() {
        return (
            <div className='card'>
                <img src={this.props.logo} alt="this is logo react js" />
                <h3>{this.props.title}</h3>
                <p>{this.props.description} </p>
            </div>
        )
    }
}
