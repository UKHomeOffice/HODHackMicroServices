function color() {
    this.add(
        'color:blue',
        function(args,done){
            done(null, {Result:'Color Service 2'});
        })
}
var seneca = require('seneca')

seneca()
    .use(color)
    .listen(10173)