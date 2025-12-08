import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./CountReducer";
import { setName } from "./UserReducer";

function Child() {

    //매개변수 - store에 관리되고 있는 reducer선택, 반환 - 리듀서 관리되는 값
    const countValue = useSelector( reducer => {
        return reducer.count.value;
    })

    //리듀서의 상태를 변경하기 위한 함수 dispatch
    const dispatch = useDispatch();

    //실습
    const [inputValue, setInputValue] = useState('');

    const userValue = useSelector( reducer => {
        return reducer.user.name;
    })

    const handleUserNameChange = () => {
        dispatch(setName(inputValue)); 
        setName('');
    };

    return (
        <>
            <h3>child 컴포넌트</h3>
            <h3>결과값: {countValue}</h3>
            <button type="button" onClick={ () => dispatch( increment() ) }>증가</button>
            <button type="button" onClick={ () => dispatch( decrement() ) }>감소</button>

            <h3>child 컴포넌트2</h3>
            <h3>현재 사용자 이름: {userValue}</h3>
            <input 
                type="text" 
                value={inputValue} 
                onChange={ (e) => setName(e.target.value) } 
            />
            <button type="button" onClick={handleUserNameChange}>이름 변경</button>
        </>
    )
}

export default Child;