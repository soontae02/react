import EventComponent from "./component/EventComponent";
import EventComponent2 from "./component/EventComponent2";
import EventComponetQ from "./component/EventComponetQ";
import EventComponentQ2 from "./component/EventComponentQ2";

function App() {

    return (
        <>
            <h3>리액트 이벤트</h3>
            <EventComponent />
            <h3>인풋태그 객체로 관리하기</h3>
            <EventComponent2 />
            <h3>셀렉트 태그 핸들링(실습)</h3>
            <EventComponetQ />
            <h3>인풋데이터 핸들링(실습)</h3>
            <EventComponentQ2 />
        </>
    )
}

export default App;