import React from 'react'

const CircleSelector = (props) => {
    return (
        <div className="Circles">
            <div className={props.selCircle === 1 ? 'selected' : 'notSelected'}>1</div>
            <div className={props.selCircle === 2 ? 'selected' : 'notSelected'}>2</div>
            <div className={props.selCircle === 3 ? 'selected' : 'notSelected'}>3</div>
            <div className={props.selCircle === 4 ? 'selected' : 'notSelected'}>4</div>
        </div>
    )
}

export default CircleSelector;