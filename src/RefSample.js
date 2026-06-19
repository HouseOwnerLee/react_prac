import React, { Component } from "react";

class RefSample extends Component {
    input_ref = React.createRef();
    handleFocus = () => {
        this.input_ref.current.focus();
    };
    render() {
        return (
            <div>
                <input ref={this.input_ref} />
            </div>

        )
    }
}

export default RefSample;