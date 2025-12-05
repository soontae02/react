import { useEffect, useRef, useState } from "react";

const HookQ = () => {
    /*
    실습
    1. 이페이지가 mount된 즉시 useEffect를 사용하여 id태그에 포커스를 추가해주세요

    2. state를 활용해서 {id, pw}를 관리하고, 
    로그인 클릭시 공백이라면 공백인 태그에 포커스를 추가하세요.
    로그인 클릭시 공백이 아니라면 경고창으로 입력된 id, pw를 출력해주세요.
    

    */

    const idRef = useRef(null);
    const pwRef = useRef(null);

    useEffect(() => {
        if (idRef.current) {
            idRef.current.focus();
        }
    }, []);

    const [login, setLogin] = useState({id: '', pw: ''});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setLogin({
            ...login,
            [name]: value
        });
    }

    const handleClick = () => {
        const {id, pw} = login;

        if (idRef.current.value === '') {
            alert("아이디를 입력해주세요.");
            idRef.current.focus();
        } else if (pwRef.current.value === '') {
            alert("비밀번호를 입력해주세요");
            pwRef.current.focus();
        } else {
            alert(`로그인 성공\nID: ${id}\nPW:${pw}`)
        }
    }


    return (
        <div>
            <input 
                type="text" 
                name="id" 
                placeholder="아이디" 
                ref={idRef}
                value={login.id}
                onChange={handleChange}
            /><br/>
            <input 
                type="password" 
                name="pw" 
                placeholder="비밀번호" 
                ref={pwRef}
                value={login.pw}
                onChange={handleChange}
            /><br/>
            <button type="button" onClick={handleClick}>로그인</button>
        </div>
    )
}

export default HookQ;