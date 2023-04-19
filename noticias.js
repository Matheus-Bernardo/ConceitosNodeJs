var http = require('http'); // importa possibilidade de trabalhar com a lib http


//cria servidor
var server = http.createServer( function(req, res){

    var categoria = req.url// recupera a url que vem a frente de localhost:3000

    if(categoria == '/tecnologia'){
        res.end("<html><body> Noticias de tecnologia</body></html>");

    }else if(categoria == '/moda'){
        res.end("<html><body> Noticias de Moda</body></html>");

    }else if(categoria == '/beleza'){
        res.end("<html><body> Noticias de tecnologia</body></html>");

    }else{
       res.end("<html><body> Portal de notícias</body></html>");
    }


});

server.listen(3000);//habilita o servidor atravez do localhost:3000


