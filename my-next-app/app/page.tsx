"use client"
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  const handleClick = async () => {
    const result = await fetch("/api/api01?id=abc123")
      .then( response => response.json() );
    console.log(result);
    
  }

  return (
    <div>
      홈화면 입니다
      <a href="/bye?name=홍길동&age=20">파라미터 넘기기</a>
      <Link href={"/bye?name=홍길동&age=20"}>파라미터 넘기기</Link>
      <a href="/hello/이순신/30">파라미터넘기기</a>

      {/* 서버로 요청 */}
      <button type="button" onClick={handleClick}>서버로 요청</button>

    </div>
  );
}
