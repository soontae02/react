import { useState } from "react"

function IterationComponentQ() {
    
    //더미데이터
    const arr = [
        {id: 1, src : '/img/img1.png', title : '아이폰10', price: 1000},
        {id: 2, src : '/img/img2.png', title : '아이폰11', price: 2000},
        {id: 3, src : '/img/img3.png', title : '아이폰12', price: 3000},
        {id: 4, src : '/img/img4.png', title : '아이폰13', price: 4000},
    ]

    //더미데이터 state로 관리
    const [list] = useState(arr);

    //대표이미지 state로 첫 번째 이미지로 설정
    const [img, setImg] = useState(arr[0].src);

    //클릭시 대표이미지 변경
    const handleChange = (src) => { setImg(src) }

    const newList = list.map ( item => 
        <li key={item.id}>
            <img src={item.src} alt={item.title} onClick={ () => handleChange(item.src) } /> 
            <p>{item.title}</p>
            <p>{item.price}원</p>
        </li>
    );

    return (
        <>
            <img src={img} />
            <ul>
                { newList }
            </ul>
        </>
    )
}

export default IterationComponentQ