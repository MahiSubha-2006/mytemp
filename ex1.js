var http=require("http");
function samp(req,res)
{
    if(req.url=="/")
    {
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("<h1>Web application for social media</h1>");
    res.write("<h1>Home page</h1>");
    res.end("<html><body><h1>Home, URL was:"+req.url+"</h1></body></html");
    console.log("request accepted");
    }
   else if(req.url=="/instagram")
    {
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("<h1>Instagram</h1>");
    res.write("<h1>welcome to Instagram</h1>");
    res.end("<html><body><h1>Home, URL was:"+req.url+"</h1></body></html");
    console.log("request accepted");
    }
    else if(req.url=="/x")
        {
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<h1>x</h1>");
        res.write("<h1>welcome to x</h1>");
        res.end("<html><body><h1>Home, URL was:"+req.url+"</h1></body></html");
        console.log("request accepted");
        }
    else{
        res.end("invalid request");
    }
}
var server=http.createServer(samp);
server.listen(5000);
console.log("server running");