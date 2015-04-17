var seneca = require('seneca')()

seneca.use('mail',{
    folder: './email-templates',
    mail: {
        from: 'help@example.com'
    },
    config:{
        service: "Gmail",
        auth: {
            user: "hod.hacker@gmail.com",
            pass: "hodhacker1"
        }
    }
});

seneca.add(
    {role:'mail', cmd:'prepare'},
    function(args, callback) {

        var arguments = args.args;

        $content    = arguments.content || {
            name: arguments.name     || 'Customer One'
        };

        callback(
            null,
            seneca.act({
                role: 'mail',
                cmd:  'send',
                code: arguments.code || 'default',
                to:   arguments.to || 'hod.hacker@gmail.com',
                subject: arguments.subject  || '',
                content: $content
            })
        );
    }
);

seneca.ready(function(err){
    if( err ) return console.log(err);

    $arguments = process.argv[2].toString() || {};

    try {
        $arguments = JSON.parse($arguments.toString());
    }catch (e) {
        console.log(e.toString());
    }

    seneca.act({role:'mail', cmd:'prepare', args: $arguments});

});

