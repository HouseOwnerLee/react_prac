import React, { Component, useState, useEffect, useReducer } from 'react';
import useInputs from './useInputs';

const Info = () => {
    const [state, onChange] = useInputs({
        name: "",
        nickname: "",
    });

    const { name, nickname } = state;

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} />
                <input name="nickname" value={nickname} onChange={onChange} />
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네임:</b> {nickname}
                </div>
            </div>
        </div>
    );
}

// function reducer(state, action) {
//     return {
//         ...state,
//         [action.name]: action.value,
//     };
// }

// const Info = () => {
//     const [state, dispatch] = useReducer(reducer, {
//         name: "",
//         nickname: "",
//     });

//     const { name, nickname } = state;
//     const onChange = (e) => {
//         dispatch(e.target);
//     }

//     return (
//         <div>
//             <div>
//                 <input name="name" value={name} onChange={onChange} />
//                 <input name="nickname" value={nickname} onChange={onChange} />
//             </div>
//             <div>
//                 <div>
//                     <b>이름:</b> {name}
//                 </div>
//                 <div>
//                     <b>닉네임:</b> {nickname}
//                 </div>
//             </div>
//         </div>
//     );
// }

// class Info extends Component {
//     state = {
//         name: "",
//         nickname: "",
//     }

//     onChangeName = (e) => {
//         this.setState({
//             name: e.target.value,
//         });
//     };
//     onChangeNickname = (e) => {
//         this.setState({
//             nickname: e.target.value,
//         });
//     };

//     render() {
//         const { name, nickname } = this.state;
//         return (
//             <div>
//                 <div>
//                     <input value={name} onChange={this.onChangeName} />
//                     <input value={nickname} onChange={this.onChangeNickname} />
//                 </div>
//                 <div>
//                     <div>
//                         <b>이름:</b> {name}
//                     </div>
//                     <div>
//                         <b>닉네임:</b> {nickname}
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// const Info = () => {
//     const [name, setName] = useState("");
//     const [nickname, setNickname] = useState("");

// useEffect(() => {
//     console.log("렌더링이 완료되었습니다!");
//     console.log({
//         name,
//         nickname,
//     });
// }, [name]); // 빈 배열 넣으면 마운트 될때 한번만 실행됨, name을 넣으면 name이 바뀔때마다 실행됨(다른 변수는 실행X)

// useEffect(() => {
//     console.log("effect");
//     console.log(name);
//     return () => {
//         console.log("cleanup");
//         console.log(name);
//     };
// }, []); // 빈 배열 넣으면 마운트 될때 한번, 언마운트 될때 한번만 실행됨

// const onChangeName = (e) => {
//     setName(e.target.value);
// };

// const onChangeNickname = (e) => {
//     setNickname(e.target.value);
// };

// const [form, setForm] = useState({ name: "", nickname: "" });
// const { name, nickname } = form;

// const onChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
// };

//     return (
//         <div>
//             <div>
//                 <input value={name} onChange={onChangeName} />
//                 <input value={nickname} onChange={onChangeNickname} />
//                 {/* <input name="name" value={name} onChange={onChange} />
//                 <input name="nickname" value={nickname} onChange={onChange} /> */}
//             </div>
//             <div>
//                 <div>
//                     <b>이름:</b> {name}
//                 </div>
//                 <div>
//                     <b>닉네임:</b> {nickname}
//                 </div>
//             </div>
//         </div>
//     );
// }

export default Info;