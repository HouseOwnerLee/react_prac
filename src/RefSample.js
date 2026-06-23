import React, { Component, useRef } from "react";

const RefSample = () => {
    const id = useRef(1);
    const setId = (n) => {
        id.current = n;
    };
    const printId = () => {
        console.log(id.current);
    };

    setId(10);
    printId();

    return <div>refsample</div>;
};


// class RefSample extends Component {
//     input_ref = React.createRef();
//     handleFocus = () => {
//         this.input_ref.current.focus();
//     };
//     render() {
//         return (
//             <div>
//                 <input ref={this.input_ref} />
//             </div>

//         )
//     }
// }

export default RefSample;