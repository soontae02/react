import { Link } from "react-router-dom"

function Home() {

    return (
        <>
            <h3>홈 화면</h3>
            <Link to="/user?id=abc123&age=20">유저페이지</Link><br/>
            <Link to="/info/20/홍길동">인포페이지</Link><br/>
        </>
    )

}

export default Home;