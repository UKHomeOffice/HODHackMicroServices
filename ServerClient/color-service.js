function color() {
    this.add(
        'color:red',
        function(args,done){

            setTimeout(function(){
                console.log("CS1");
                done(null, {Result:'Color Service 1'});
            }, 5000);
    })
}

var seneca = require('seneca')

seneca()
    .use(color)
    .listen(10178)