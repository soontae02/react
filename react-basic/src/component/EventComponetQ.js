import { useState } from "react";

function EventComponetQ() {

    let [selectFood, setSelectFood] = useState('');

    const handleChange = (e) => {
        if(e.target.value === '메뉴선택') {
            setSelectFood('메뉴를 선택하세요');
            return;
        }
        setSelectFood(e.target.value);
        console.log(e.target.value);
    }

    return (
        <>
            셀렉트 태그가 체인지 될 때 선택한 결과를 아래에 출력<br/><br/>
            <select onChange={handleChange} value={selectFood}>
                <option>메뉴선택</option>
                <option>피자</option>
                <option>햄버거</option>
                <option>치킨</option>
            </select> <br/>

            <h3>선택한 결과</h3> {selectFood}
        </>
    )

}

export default EventComponetQ;
