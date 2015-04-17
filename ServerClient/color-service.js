function color() {
    this.add(
        'color:red',
        function(args,done){
            done(null, {Result:'Color Service 1'});
    })
}

var seneca = require('seneca')

seneca()
    .use(color)
    .listen(10171)