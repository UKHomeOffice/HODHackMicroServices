function color() {
    this.add(
        'color:red',
        function(args,done){

            setTimeout(function(){
                console.log("CS2");
                done(null, {Result:'Color Service 2'});
            }, 2000);
        })
}


var seneca = require('seneca')

seneca()
    .use(color)
    .listen(10173)