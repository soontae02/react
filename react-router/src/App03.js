import axios from 'axios'; //axios 임포트

function App() {

    /* 
    npm install axios 

    axios의 실행 결과도 Promise 객체이므로 then() 메서드를 사용하여 후속 작업을 처리할 수 있습니다.
    */
    const x = fetch("https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json");
    const y = axios.get("https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json")

    const fetchData = async () => {
        // 순서를 보장하면서 여러개의 데이터를 가져올 때, 콜백지옥 코드가 발생될 수 있음.

        // axios.get("https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json")
        // .then( response => {
        //     console.log(response.data); //데이터 사용
        //     console.log(1);

        //     axios.get("https://raw.githubusercontent.com/yopy0817/data_example/master/hello.json")
        //     .then( response => {
        //         console.log(response.data); //데이터 사용
        //         console.log(2);

        //         axios.get("https://raw.githubusercontent.com/yopy0817/data_example/master/by.json")
        //         .then( response => {
        //             console.log(response.data); //데이터 사용
        //             console.log(3);
        //         })
        //     })     
        // })

        //1. async함수 안에서 await을 쓸 수 있음.
        //2. async를 적용하면 함수는 항상 Promise 객체를 반환함.
        //3. 리턴이 Promise라면 await을 적용후에, then을 생략하고 리턴으로 결과를 받을 수 있음.
        
        //장점. 가독성이 좋아짐
        //장점. 동기적 처리로 동작하게 됨
        const response1 = await axios.get("https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json")
        console.log(response1.data); //데이터 사용
        
        const response2 = await axios.get("https://raw.githubusercontent.com/yopy0817/data_example/master/hello.json")
        console.log(response2.data); //데이터 사용

        const response3 = await axios.get("https://raw.githubusercontent.com/yopy0817/data_example/master/by.json")
        console.log(response3.data); //데이터 사용

        const response4 = await fetch("https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json")
            .then( response => response.json() )
        console.log(response4); //데이터 사용
        
    }

    return(
        <>
            <h3>axios 사용하기</h3>
            <button type="button" onClick={fetchData}>데이터 가져오기</button>   
        </>
    )

}

export default App;