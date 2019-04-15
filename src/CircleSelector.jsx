import React, { Component } from 'react'

class CircleSelector extends Component {
    state = {
        selCircle: this.props.selCircle,
    }

    click1 = () => {
        this.props.handleClick(1)
        this.setState({selCircle: 1})
    }
    click2 = () => {
        this.props.handleClick(2)
        this.setState({selCircle: 2})
    }
    click3 = () => {
        this.props.handleClick(3)
        this.setState({selCircle: 3})
    }
    click4 = () => {
        this.props.handleClick(4)
        this.setState({selCircle: 4})
    }

    render() {
        return (
            <div className="CircleSelector">
                <button onClick={this.click1} className={this.state.selCircle === 1 ? 'selected' : 'notSelected'} >Circle 1 Selected</button>
                <button onClick={this.click2} className={this.state.selCircle === 2 ? 'selected' : 'notSelected'} >Circle 1 Selected</button>
                <button onClick={this.click3} className={this.state.selCircle === 3 ? 'selected' : 'notSelected'} >Circle 1 Selected</button>
                <button onClick={this.click4} className={this.state.selCircle === 4 ? 'selected' : 'notSelected'} >Circle 1 Selected</button>
            </div>
        )
    }
}

export default CircleSelector;