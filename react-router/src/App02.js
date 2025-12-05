import { useEffect, useState } from "react";

function App()  {

    //const [data, setData] = useState({userId: '', userPw: '', userName: '' });
    const [data, setData] = useState(null);
    const [raw, setRaw] = useState(null);

    //1. 이벤트로 데이터 가져오기
    const fetchData = () => {
        fetch("https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json")
        .then( response => response.json() )
        .then( data => {
            setData(data);
        });
    }

    //2. 화면 로딩시에 데이터 가져오기, 두 번째 매개변수에 [] 선언해서 로딩완료후에 한 번만 실행되도록 설정
    useEffect( () => {
        fetch("https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json")
        .then( response => response.json() )
        .then( data => {
            setRaw(data);
        });
    }, [] )


    return (
        <>
            <h3>fetch로 데이터 가져오기</h3>
            <button type="button" onClick={fetchData}>데이터가져오기</button>

            {
                data !== null ? <div>
                    결과값: {data.userId} / {data.userPw} / {data.userName} 
                </div>
                :
                null
            }

            <h3>화면 로딩시에 데이터 가져오기</h3>
            {
                raw && <div>
                    결과값: {raw.userId} / {raw.userPw} / {raw.userName}
                </div>
            }

        </>
    )
}

export default App;