var http=require("http")
function samp(req,res)
{
    if(req.url=="/bookdetails")
        {
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<html><body><center><h1>Book Details</h1></center></body></html>");
        res.write("<html><table><tr><th>S.No</th><th>Book Name</th><th>Avil Stock</th></tr><tr><td>1</td><td>Introduction to Node.js</td><td>   20</td></tr><tr><td>2</td><td>Introduction to BS 5</td><td>     10</td></tr></table></html>");
        res.end("<html><body><h1>URL was:"+req.url+"</h1></body></html");
        console.log("request accepted");
        }
    else if(req.url=="/authordetails")
    {
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<h1>Author Details</h1>");
        res.write("<html><table><tr><th>S.No</th><th>Book Name</th><th>Author Name</th></tr><tr><td>1</td><td>Introduction to Node.js</td><td>   james</td></tr><tr><td>2</td><td>Introduction to BS 5</td><td>     Alex</td></tr></table></html>");
        res.end("<html><body><h1>URL was:"+req.url+"</h1></body></html");
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
    else if(req.url=="/products")
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
    else if(req.url=="/courses")
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
        res.writeHead(404,{"Content-Type":"text/html"});
        res.end("404 ERROR FOUND");
    }
}
var server=http.createServer(samp);
server.listen(3000);
console.log("server running");




