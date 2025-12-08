import { createSlice } from "@reduxjs/toolkit"; //리덕스를 편리하게 관리하는 모듈

const userSlice = createSlice({
    name: 'user',
    initialState: {name: ''},
    reducers: {
        setName: (state, action) => { //(스테이트값, dispatch로 전달하는 매개값)
            //action의 payload속성에 전달받은 매개값이 들어옴
            state.name = action.payload;

        }
    }
});

export const {setName} = userSlice.actions;
export default userSlice.reducer;