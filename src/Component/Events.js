import React, { Component } from 'react'

 class Events extends Component {
    state = {
        counter : 0,
    }

 onIncreament=()=>{
    this.setState({
        counter : this.state.counter +1,
    })
 
 }

 onDecreament =()=>{
    this.setState({
        counter : this.state.counter -1,
    })

 }


  render() {
    return (
      <div>
        <h2>Events of React</h2>
        <h3>{this.state.counter}</h3>
        <button onClick={this.onIncreament}>Click +</button>
        <button onClick={this.onDecreament}>Click -</button>
      </div>
    )
  }
}

export default Events;
