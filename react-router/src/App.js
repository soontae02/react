import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

    /*
    1. 아래 요구사항을 충족하는 코드를 작성하세요.
    요청주소
    https://raw.githubusercontent.com/yopy0817/data_example/refs/heads/master/data.json
    
    1. 이 페이지가 mount된 이후에 해당 주소로 fetch 요청을 보내 데이터를 받아오세요.
    2. 받아온 데이터는 state에 저장하세요.
    3. 화면에는 컴포넌트 반복을 통해서 받아온 데이터를 출력해주면 됩니다.
    4. 이 데이터가 도착하기 전까지는 "데이터 로딩중..."이라는 문구가 보이도록 처리하세요.
    
    */

    const [data, setData] = useState(null);

    useEffect( () => {
    
        (async () => {
            const response = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/refs/heads/master/data.json');
            setData(response.data);
            console.log(response.data);
        })();
        
    }, []);

    return(
        <>
            <h3>실습문제</h3>
            {
                data === null ? ( <p>데이터 로딩중...</p> ) : (
                    data.map(item => (
                        <div key={item.id}>
                            <p>{item.id} / {item.title} / {item.content}</p>
                            <img src={item.src}/>
                        </div>
                    ))
                )
            }
        </>
    )
}

export default App;