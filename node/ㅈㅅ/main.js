// 자바 스크립트 관련
//문법 정리 및 서버 node.js 를 사용한 서버 계통
var http = requrie('http')
var fs = requrie('fs')
var app = http.creategServer(function(request , response){
    //if(request.url == "/"){
    //    url = '/index.html'
    //}
    response.writeHead(200, {'Content-Type' :'text/html; charset=utf-8'});
    response.end("hello")
})

app.listen(3000)