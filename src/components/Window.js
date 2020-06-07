import React, { Component } from 'react';

import './Window.css';

// import Button from './Button';

class Window extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            positions: this.props.positionPassed
        }
    }
    componentDidMount() {
        const selectForm = document.getElementById( 'exampleFormControlSelect2' );
        selectForm.addEventListener( 'click', this.handleClick );
    }
    handleClick = event => {
        this.setState( { positions: this.props } );
        console.log( this.state.positions.positionPassed );
    }
    render() {
        return (
            <div
                className="container"
                style={{ display: "flex" }}>
                {
                    this.state.positions.positionPassed === undefined ?
                        <div></div> :
                        this.state.positions.positionPassed[ 0 ] === "left" ?
                            <button type="button"
                                className="btn btn-primary btn-lg"
                                id="tooltip"
                                style={style.left}>&emsp;Press&emsp; <span className="tooltip-text">Don't Press</span></button> :
                            this.state.positions.positionPassed[ 0 ] === "right" ?
                                <button type="button"
                                    className="btn btn-primary btn-lg"
                                    id="tooltip"
                                    style={style.right}>&emsp;Press&emsp; <span className="tooltip-text">Don't Press</span></button> :
                                this.state.positions.positionPassed[ 0 ] === "top" ?
                                    <button type="button"
                                        className="btn btn-primary btn-lg"
                                        id="tooltip"
                                        style={style.top}>&emsp;Press&emsp; <span className="tooltip-text">Don't Press</span></button> :
                                    this.state.positions.positionPassed[ 0 ] === "bottom" ?
                                        <button type="button"
                                            className="btn btn-primary btn-lg" id="tooltip"
                                            style={style.bottom}>&emsp;Press&emsp; <span className="tooltip-text">Don't Press</span></button> :
                                        <div></div>
                }
            </div>
        )
    }
}

const style = {
    top: {
        margin: "auto"
    },
    bottom: {
        position: 'absolute',
        bottom: "55px",
        right: "45vw"
    },
    left: {
        position: 'absolute',
        bottom: "40vh"
    },
    right: {
        position: 'absolute',
        bottom: "40vh",
        right: "10vw"
    }
};

export default Window;