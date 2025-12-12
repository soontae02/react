"use client"

import { useParams } from "next/navigation";

function Example() {

    const params = useParams();
    
    const name = typeof params.name === 'string' ? decodeURI(params.name) : ''; //한글같은 경우
    const age = params.age;

    return (
        <>
            <h3>URL파라미터</h3>
            {name}, {age}
        </>
    )
}

export default Example;


