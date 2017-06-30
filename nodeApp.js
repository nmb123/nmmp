
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
	//直接修改后台的代码,允许前端可以跨域访问
	 res.writeHead(200,{
	  "Content-Type":'text/plain',
	  'charset':'utf-8',
	  'Access-Control-Allow-Origin':'*',
	  'Access-Control-Allow-Methods':'PUT,POST,GET,DELETE,OPTIONS'
	  });

	fs.readFile('shop.json',
	{'encoding':'utf-8'},
	function(error,data){
//		console.log(error);
		console.log(data);
		// 把后台的数据返回到前端发送请求的位置
		res.write(data);
		res.end();
	})
});

// 127.0.0.1:9966
// localhost:9966
// 192.168.65.224:9966
server.listen('9966');











