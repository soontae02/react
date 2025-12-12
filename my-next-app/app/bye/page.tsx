"use client"
import { useSearchParams } from "next/navigation";
import Some from "./some";

function Bye() { 

    //쿼리스트링 값 받기
    const param = useSearchParams();
    const name = param.get("name");
    const age = param.get("age");

    return (
        <>
            bye화면 입니다.<br/>
            
            파라미터값: {name}, {age}

            <hr/>
            <Some/>
        </>
    )
}

export default Bye;