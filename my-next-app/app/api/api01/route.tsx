
//이 코드를 클라이언트 코드가 아니고,
//요청을 받아서 데이터를 응답하는 용도의 서버코드가 작성됩니다
//데이터베이스에 직접 접근 o
export function GET(req: Request) { //변수명 : 타입

    console.log("서버에서 받은 req값:" + req);

    return Response.json({message: "서버에서 응답데이터" });
}
