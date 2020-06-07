import React, { Component } from 'react'

export default class SelectionInput extends Component {
    handleChange = e => {
        var options = e.target.options;
        var value = [];
        for ( let i = 0, l = options.length; i < l; i++ ) {
            if ( options[ i ].selected )
                value.push( options[ i ].value );
        }
        this.props.onSelectInput( value );
    }
    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label>Please choose the position.</label>
                        <select
                            multiple
                            onChange={this.handleChange}
                            className="form-control"
                            id="exampleFormControlSelect2">
                            <option value={"top"}>top</option>
                            <option value={"bottom"}>bottom</option>
                            <option value={"left"}>left</option>
                            <option value={"right"}>right</option>
                        </select>
                    </div>
                </form>
            </div>
        )
    }
}
