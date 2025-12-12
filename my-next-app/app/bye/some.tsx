"use client" //화면 구성용도로 사용함 (훅, js코드, 이벤트 등등을 사용할 수 있어짐)
import { useEffect, useRef, useState } from "react";

function Some() {

    //
    const [data, setData] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect( () => {
        console.log("처음 렌더링 이후 한번 실행됨");
    }, [])

    const handlerClick = () => {
        if(inputRef.current !== null) {
            inputRef.current.focus();
        }

    }

    return (
        <>
            <h3>리액트에서 사용하는 컴포넌트와 동일함</h3>
            <input type="text" onChange={ (e) => setData( e.target.value )} value={data} ref={inputRef}/>
            <button type="button" onClick={handlerClick}>포커싱 버튼</button>
        </>
    )
}

export default Some;