import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import User from "./component/User"; 
import Info from "./component/Info"; 
import Board from "./component/Board";
import BoardContent from "./component/BoardContent";
import Header from "./layout/Header";


function App() {
  return (
    <Routes>
      {/* 최상 index.js를 BrouserRouter컴포넌트로 감싸줍니다 */}
      <Route element={<Header/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/user" element={<User/>} />
        {/* 쿼리파라미터를 넘길 때 라우터 설정 */}
        <Route path="/info/:age/:name" element={<Info/>} />

        {/* 각각 다른 화면을 보여주게 하려면 */}
        {/*
        <Route path="/board" element={<Board/>} />
        <Route path="/board:num" element={<BoardContent/>} /> 
        */}
        {/* 중첩라우팅 설정 */}
        <Route path="/board" element={<Board/>} >
          <Route path=":num" element={<BoardContent/>}/>
        </Route>
      </Route>

    </Routes>
  );
}

export default App;
