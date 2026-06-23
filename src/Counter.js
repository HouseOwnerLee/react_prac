import React, { useReducer } from "react";

function reducer(state, action) { // 리듀서 함수: 액션에 따라서 상태 변수의 값을 변경
    // action.type에 따라 다른 작업 수행
    switch (action.type) {
        case "INCREMENT":
            return { value: state.value + 1 };
        case "DECREMENT":
            return { value: state.value - 1 };
        default:
            // 아무것도 해당되지 않을 때 기존 상태 변환
            return state;
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, { value: 0 });
    return (
        <div>
            <p>
                현재 카운터 값은 <b>{state.value}</b>입니다.
            </p>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
        </div>
    );
};


// import React, { useState } from "react";

// const Counter = () => {
//     const [value, setValue] = useState(0);
//     return (
//         <div>
//             <p>
//                 현재 카운터 값은 <b>{value}</b>입니다.
//             </p>
//             <button onClick={() => setValue(value + 1)}>+1</button>
//             <button onClick={() => setValue(value - 1)}>-1</button>
//         </div>
//     );
// };

// import React, { Component } from 'react';

// class Counter extends Component {
//     state = {
//         number: 0,
//         fixedNumber: 0,
//     }
//     // constructor(props) {
//     //     super(props);
//     //     this.state = {
//     //         number: 0,
//     //         fixedNumber: 0,
//     //     };
//     // }
//     render() {
//         const { number, fixedNumber } = this.state;
//         return (
//             <div>
//                 <h1>{number}</h1>
//                 <h2>바뀌지 않는 값: {fixedNumber}</h2>
//                 <button
//                     // onClick을 통해 버튼이클릭되었을때호출할함수를지정합니다.
//                     onClick={() => {
//                         this.setState(
//                             {
//                                 number: number + 1
//                             },
//                             () => { // 콜백함수
//                                 console.log('방금setState가 호출되었습니다.');
//                                 console.log(this.state);
//                             }
//                         );
//                     }}
//                 >
//                     +1
//                 </button>
//             </div>
//         );
//     }
// }

export default Counter;