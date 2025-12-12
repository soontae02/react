import React from 'react';
import ReactDOM from 'react-dom/client';
import './Main.css'

function Main() {
    return (
        <div>
            <h3 className="app">이것이 멀티 페이지 렌더링 방식의 리액트다. (Main Page)</h3>
        </div>
    )
}
// 페이지의 root DOM 요소에 컴포넌트 렌더링
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Main />
);