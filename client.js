var seneca = require('seneca')()

seneca.client();

seneca.act( {cmd:'config', prop:'rate'}, function(err,result){
    console.log( result )
})