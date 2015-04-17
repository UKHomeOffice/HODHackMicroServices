/**
 * Created by jonathanwebster on 17/04/15.
 */
var seneca = require('seneca');

seneca.use('mongo-store',{
    name:'form_data_store',
    host:'127.0.0.1',
    port:27017
})

function store_form() {
    this.add(
        'cmd:store_form',
        function(args,done){
            console.log("Incoming Form to Save")
            console.log(args.name)
            console.log("#### Form Body Start ####")
            console.log(args.data)
            console.log("#### Form Body END   ####")

            seneca.ready(function(err){
                console.log("line1")
                var form = seneca.make$(args.name)
                console.log("line2")
                form.data  = args.data
                console.log("line3")
                form.time  = new Date()

                form.save$(function(err,form){
                    if( err ) return console.log(err);
                    console.log( " saved"  )
                    done(null,{Result:'Saved to db'})
                })
            })


        })
}

seneca()
    .use(store_form)
    .listen(10171);
