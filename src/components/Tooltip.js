import React, { Component } from 'react'

export default class Tooltip extends Component {
    constructor(props){
        super(props);
        this.state = {
            positions: this.props.positionPassed
        }
    }
    componentDidMount() {
        const selectForm = document.getElementById('exampleFormControlSelect2');
        selectForm.addEventListener('click', this.handleClick);
    }    
    handleClick = event => {
        this.setState({positions: this.props});
        console.log(this.state.positions.positionPassed);
    }
    render() {
        return (
            <div 
            className="container"
            style={ {display: "flex"} }>
                {
                    this.state.positions.positionPassed === undefined?
                        <div></div>:
                        this.state.positions.positionPassed[0] === "left"?
                        <button type="button" 
                        className="btn btn-primary btn-lg"
                        style={ style.left }>Large button</button>:
                        this.state.positions.positionPassed[0] === "right"?
                        <button type="button" 
                        className="btn btn-primary btn-lg"
                        style={ style.right }>Large button</button>:
                        this.state.positions.positionPassed[0] === "top"?
                        <button type="button" 
                        className="btn btn-primary btn-lg"
                        style={ style.top }>Large button</button>:
                        this.state.positions.positionPassed[0] === "bottom"?
                        <button type="button" 
                        className="btn btn-primary btn-lg"
                        style={ style.bottom }>Large button</button>:
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
        bottom:0,
        right: "45vw"
    },
    left: {
        position: 'absolute',
        bottom: "30vh"
    },
    right: {
        position: 'absolute',
        bottom: "30vh",
        right:0
    }
};
