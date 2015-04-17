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
})

seneca.add(
    {role:'mail', cmd:'prepare'},
    function(args, callback) {
        $template   = args.code || 'default';
        $name       = args.name || 'Customer One';
        $recipient  = args.to || 'hod.hacker@gmail.com';
        $subject = $template.toUpperCase()
        $content = {
            name: $name
        };

        callback(
            null,
            seneca.act({
                role:'mail',
                cmd:'send',
                code: $template,
                to: $recipient,
                subject: $subject,
                content: $content
            })
        );
    }
);

seneca.ready(function(err){
    if( err ) return console.log(err);

    seneca.act({role:'mail', cmd:'prepare'});
    seneca.act({role:'mail', cmd:'prepare', code:'welcome'});
    seneca.act({role:'mail', cmd:'prepare', code:'update'});

})
