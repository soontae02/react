import { Navigate, useLocation, useSearchParams } from "react-router-dom";

function User() {
    //쿼리스트링을 받는방법
    //1. useLocation훅을 사용
    //2. useSearchParams훅을 사용

    // const location = useLocation();
    // console.log(location);

    const [obj, func] = useSearchParams(); //[0] - 객체반환, [1] - setter함수반환
    let id = obj.get("id"); //쿼리스트링의 id값을 가져옴
    let age = obj.get("age"); //쿼리스트링의 age값을 가져옴

    //권한이 없으면 접근하지 못함
    const auth = false; //권한이 없는 상태 라고 가정
    if(!auth) {
        //강제이동 컴포넌트 - replace속성 true면 현재페이지를 기록에 남기지 않겠음
        return <Navigate to="/" replace={true} />;
    }


    return (
        <>
            <h3>유저 화면</h3>
            쿼리스트링값 {id}, {age}
        </>
    )
}

export default User;