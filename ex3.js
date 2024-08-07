var http=require("http")
function samp(req,res)
{
    if(req.url=="/products")
        {
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<h1>List of Products</h1>");
        res.write("<h2>Mobile</h2>");
        res.write("<h2>Computer</h2>");
        res.write("<h2>Mouse</h2>");
        res.end("<html><body><h1>URL was:"+req.url+"</h1></body></html");
        console.log("request accepted");
        }
    else if(req.url=="/contact")
    {
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<h1>contact</h1>");
        res.write("<h2>Phone : 9876543210</h2>");
        res.write("<h2>mail : mail@gmail.com</h2>");
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