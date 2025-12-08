import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/CountReducer";
import Child from './redux/Child';

function App() {

    //store에 등록된 리듀서를 가져올때는 useSelector훅
    //count키는 reducer안에 정의된 key이 됩니다.
    
    //매개변수 - store에 관리되고 있는 reducer선택, 반환 - 리듀서 관리되는 값
    const countValue = useSelector( reducer => {
        return reducer.count.value;
    })

    //리듀서의 상태를 변경하기 위한 함수 dispatch
    const dispatch = useDispatch();

    return (
        <>
            <h3>리덕스 예시</h3>

            <h3>결과값: {countValue}</h3>
            <button type="button" onClick={ () => dispatch( increment() ) }>증가</button>
            <button type="button" onClick={ () => dispatch( decrement() ) }>감소</button>

            <Child/>
        </>
    )
}

export default App;