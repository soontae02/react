import {createSlice} from '@reduxjs/toolkit'; //리덕스를 편리하게 관리하는 모듈

//slice 생성 (이름, 초기상태, 리듀서 정의) 하는 객체
//리듀서와 같은 역할을 함

const counterSlice = createSlice({
    name: 'counter', //이름
    initialState: {value: 0}, //초기 state값
    reducers : {
        //액션
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        }
    } 
})

//컴포넌트에서 값을 변경시킬때(dispatch)할 때 사용됨
export const {increment, decrement} = counterSlice.actions;
//리듀서 store에 등록할 때 사용됨
export default counterSlice.reducer;


