let http=require('http');
let fs=require('fs');
let path=require('path');

const server = http.createServer((req, res) => {
  if(req.url==='/'){
    fs.readFile('index.html',function(err,data){
      if (err) throw err;
      res.writeHead(200,{'Content-Type':'text/html'});
      res.write(data);
      return res.end();
    });
  }
  else if(req.url==='/about'){
    fs.readFile('about.html',function(err,data){
      if (err) throw err;
      res.writeHead(200,{'Content-Type':'text/html'});
      res.write(data);
      return res.end();
    });
  }
  else if(req.url==='/contact-me'){
    fs.readFile('contact-me.html',function(err,data){
      if (err) throw err;
      res.writeHead(200,{'Content-Type':'text/html'});
      res.write(data);
      return res.end();
    });
  }
  else if(req.url==='/css/style.css'){
    fs.readFile('css/style.css',function(err,data){
      if (err) throw err;
      res.writeHead(200,{'Content-Type':'text/css'});
      res.write(data);
      return res.end();
    });
  }
  else{
    fs.readFile('404.html',function(err,data){
      if (err) throw err;
      res.writeHead(200,{'Content-Type':'text/html'});
      res.write(data);
      return res.end();
    });
  }
});

server.listen(3000, () => {
  console.log("Connected");
});
