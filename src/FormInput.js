import React, { useState, useRef } from "react";
import "./FormInput.css"

const FormInput = () => {
    const [form, setForm] = useState({ id: "", pw: "", jumin1: "", jumin2: "", phone1: "", phone2: "", phone3: "" });
    const { id, pw, jumin1, jumin2, phone1, phone2, phone3 } = form;

    const pwRef = useRef(null);
    const jumin1Ref = useRef(null);
    const jumin2Ref = useRef(null);
    const phone1Ref = useRef(null);
    const phone2Ref = useRef(null);
    const phone3Ref = useRef(null);
    const submitRef = useRef(null);

    const onChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const onKeyPress = (e) => {
        const next = {
            id: pwRef,
            pw: jumin1Ref,
            jumin1: jumin2Ref,
            jumin2: phone1Ref,
            phone1: phone2Ref,
            phone2: phone3Ref,
            phone3: submitRef,
        };
        if (e.key === "Enter") {
            next[e.target.name].current.focus();
        }
    }

    const onClick = (e) => {
        const submitData = {
            jumin: `${form.jumin1}-${form.jumin2}`,
            phone: `${form.phone1}-${form.phone2}-${form.phone3}`
        };

        alert(`아이디:${id}\n비밀번호:${pw}\n주민번호:${submitData.jumin}\n전화번호:${submitData.phone}`);
        setForm({
            id: "",
            pw: "",
            jumin1: "",
            jumin2: "",
            phone1: "",
            phone2: "",
            phone3: "",
        });
    }

    return (
        <div>
            <h1>회원가입</h1>
            <table>
                <tbody>
                    <tr>
                        <td>아이디:</td>
                        <td><input type="text" name="id" value={id} onChange={onChange} onKeyPress={onKeyPress} placeholder="아이디" /></td>
                    </tr>
                    <tr>
                        <td>비밀번호:</td>
                        <td><input type="password" name="pw" value={pw} onChange={onChange} onKeyPress={onKeyPress} placeholder="패스워드" ref={pwRef} /></td>
                    </tr>
                    <tr>
                        <td>주민번호:</td>
                        <td><input maxLength="6" name="jumin1" value={jumin1} placeholder="앞자리6자리" onChange={onChange} onKeyPress={onKeyPress} ref={jumin1Ref} />- <input maxLength="7" name="jumin2" value={jumin2} placeholder="뒷자리7자리" onChange={onChange} onKeyPress={onKeyPress} ref={jumin2Ref} /></td>
                    </tr>
                    <tr>
                        <td>전화번호:</td>
                        <td>
                            <input maxLength="3" name="phone1" value={phone1} placeholder="3자리" onChange={onChange} onKeyPress={onKeyPress} ref={phone1Ref} />-
                            <input name="phone2" value={phone2} maxLength="4" onChange={onChange} onKeyPress={onKeyPress} placeholder="4자리" ref={phone2Ref} />-
                            <input value={phone3} name="phone3" maxLength="4" onChange={onChange} onKeyPress={onKeyPress} placeholder="4자리" ref={phone3Ref} />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2} className="button">
                            <button type="button" ref={submitRef} onClick={onClick}>확인</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default FormInput;