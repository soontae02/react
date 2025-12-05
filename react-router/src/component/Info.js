import { useParams } from "react-router-dom";

function Info() {

    // URL 파라미터 받기
    const params = useParams();
    console.log(params); // {age: '20', name: '홍길동'}

    return (
        <>
            <h3>인포 화면</h3>
        </>
    )

}

export default Info;