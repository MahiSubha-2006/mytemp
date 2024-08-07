var http=require("http")
function samp(req,res)
{
    if(req.url=="/courses")
        {
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<h1>List of courses</h1>");
        res.write("<h2>Java</h2>");
        res.write("<h2>WT</h2>");
        res.write("<h2>PCD</h2>");
        res.end("<html><body><h1>URL was:"+req.url+"</h1></body></html");
        console.log("request accepted");
        }
    else if(req.url=="/departments")
    {
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<h1>List of Departments</h1>");
        res.write("<h2>MSc</h2>");
        res.write("<h2>BSc</h2>");
        res.write("<h2>BE</h2>");
        res.end("<html><body><h1>URL was:"+req.url+"</h1></body></html");
        console.log("request accepted");
    }
    else{
        res.end("invalid request");
    }
}
var server=http.createServer(samp);
server.listen(3000);
console.log("server running");