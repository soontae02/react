//리듀서 함수
export const myReducer = (state, action) => {
    console.log(state);
    console.log(action);
    //action에 따라서 state를 변경 처리하는 코드
    if( action.type === '증가') {
        state = {count : state.count + 1}
    } else if( action.type === '감소') {
        state = {count : state.count - 1}
    } else if ( action.type === '초기화') {
        state = {count : 0}
    }
    return state; //결과state를 반환
}

//실습
export const yourReducer = (state, action) => {
    console.log(state);
    console.log(action);

    if ( action.type === 'change' ) {
        state = { value: action.payload };
    } else if ( action.type === 'clear' ) {
        state = { ...state, value: '' };
    }

    return state;    
}