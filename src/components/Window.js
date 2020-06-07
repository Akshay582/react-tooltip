import React, { Component } from 'react';

import './Window.css';

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
        const { positionPassed } = this.state.positions;
        let button;
        if ( positionPassed === undefined ) {
            button = <div></div>;
        } else if ( positionPassed[ 0 ] === "left" ) {
            button = <button type="button"
                className="btn btn-primary btn-lg"
                id="tooltip"
                style={style.left}>&emsp;Press&emsp; <span className="tooltip-text">Don't Press</span></button>;
        } else if ( positionPassed[ 0 ] === "right" ) {
            button = <button type="button"
                className="btn btn-primary btn-lg"
                id="tooltip"
                style={style.right}>&emsp;Press&emsp; <span className="tooltip-text">Don't Press</span></button>;
        } else if ( positionPassed[ 0 ] === "top" ) {
            button = <button type="button"
                className="btn btn-primary btn-lg"
                id="tooltip"
                style={style.top}>&emsp;Press&emsp; <span className="tooltip-text">Don't Press</span></button>;
        } else if ( positionPassed[ 0 ] === "bottom" ) {
            button = <button type="button"
                className="btn btn-primary btn-lg"
                id="tooltip"
                style={style.bottom}>&emsp;Press&emsp; <span className="tooltip-text">Don't Press</span></button>;
        }

        return (
            <div
                className="container"
                style={style.container}>
                {button}
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
    },
    container: {
        display: 'flex'
    }
};

export default Window;