import React, { Component } from 'react';

class Button extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            style: this.props.style
        }
        console.log( this.state );
    }
    render() {
        const { style } = this.state;
        return (
            <div>
                <button type="button"
                    className="btn btn-primary btn-lg"
                    id="tooltip"
                    style={style}>&emsp;Press&emsp; <span className="tooltip-text">Don't Press</span></button>
            </div>
        )
    }
}

export default Button;
