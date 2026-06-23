import { useReducer, useRef } from "react";

// 함수기반 컴포넌트 : useReducer(), useRef() 배열 사용예제
const init_form = {
    id: "",
    pw: "",
    jumin1: "",
    jumin2: "",
    tel1: "",
    tel2: "",
    tel3: "",
};

// 리듀서 함수
function reducer_form(state, action) {
    if (action.name == "btn") {
        return init_form;
    } else {
        return {
            ...state,
            [action.name]: action.value,
        };
    }
}

const FormInputReducer = () => {
    const [form, dispatch] = useReducer(reducer_form, init_form);
    const input_ref = useRef([]); // 초기값을 배열 사용

    const { id, pw, jumin1, jumin2, tel1, tel2, tel3 } = form;
    const onChange = (e) => {
        dispatch(e.target);
    };

    const onKeyDown = (e) => {
        if (e.key === "Enter") {
            if (e.target.name == "id") {
                input_ref.current[1].focus();
            } else if (e.target.name == "pw") {
                input_ref.current[2].focus();
            } else if (e.target.name == "jumin1") {
                input_ref.current[3].focus();
            } else if (e.target.name == "jumin2") {
                input_ref.current[4].focus();
            } else if (e.target.name == "tel1") {
                input_ref.current[5].focus();
            } else if (e.target.name == "tel2") {
                input_ref.current[6].focus();
            } else if (e.target.name == "tel3") {
                input_ref.current[7].focus();
            }
        }
    };

    const onClick = (e) => {
        alert(
            "아이디:" +
            id +
            "\n" +
            "비밀번호:" +
            pw +
            "\n" +
            "주민번호:" +
            jumin1 +
            "-" +
            jumin2 +
            "\n" +
            "전화번호:" +
            tel1 +
            "-" +
            tel2 +
            "-" +
            tel3,
        );
        dispatch(e.target);
    };

    return (
        <div>
            <center>
                <h1>회원 가입</h1>
                <table border="1">
                    <tbody>
                        <tr>
                            <td>아이디</td>
                            <td>
                                <input
                                    size="10"
                                    type="text"
                                    name="id"
                                    placeholder="아이디"
                                    value={id}
                                    onChange={onChange}
                                    onKeyDown={onKeyDown}
                                    ref={(el) => (input_ref.current[0] = el)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>비밀번호</td>
                            <td>
                                <input
                                    size="10"
                                    type="text"
                                    name="pw"
                                    placeholder="패스워드"
                                    value={pw}
                                    onChange={onChange}
                                    onKeyDown={onKeyDown}
                                    ref={(el) => (input_ref.current[1] = el)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>주민번호</td>
                            <td>
                                <input
                                    size="6"
                                    type="text"
                                    name="jumin1"
                                    placeholder="앞자리6자리"
                                    value={jumin1}
                                    onChange={onChange}
                                    onKeyDown={onKeyDown}
                                    ref={(el) => (input_ref.current[2] = el)}
                                />
                                -
                                <input
                                    size="7"
                                    type="text"
                                    name="jumin2"
                                    placeholder="뒷자리7자리"
                                    value={jumin2}
                                    onChange={onChange}
                                    onKeyDown={onKeyDown}
                                    ref={(el) => (input_ref.current[3] = el)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>전화번호</td>
                            <td>
                                <input
                                    size="3"
                                    type="text"
                                    name="tel1"
                                    placeholder="3자리"
                                    value={tel1}
                                    onChange={onChange}
                                    onKeyDown={onKeyDown}
                                    ref={(el) => (input_ref.current[4] = el)}
                                />
                                -
                                <input
                                    size="4"
                                    type="text"
                                    name="tel2"
                                    placeholder="4자리"
                                    value={tel2}
                                    onChange={onChange}
                                    onKeyDown={onKeyDown}
                                    ref={(el) => (input_ref.current[5] = el)}
                                />
                                -
                                <input
                                    size="4"
                                    type="text"
                                    name="tel3"
                                    placeholder="4자리"
                                    value={tel3}
                                    onChange={onChange}
                                    onKeyDown={onKeyDown}
                                    ref={(el) => (input_ref.current[6] = el)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <center>
                                    <button
                                        name="btn"
                                        onClick={onClick}
                                        ref={(el) => (input_ref.current[7] = el)}
                                    >
                                        확인
                                    </button>
                                </center>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </center>
        </div>
    );
};

export default FormInputReducer;