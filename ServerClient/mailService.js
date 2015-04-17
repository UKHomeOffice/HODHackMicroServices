/**
 * Sends a mail based on params passed through
 * @param args
 */
function prepareMail(args)
{
    var util = require('util');

    this.add(
        {
            role:'mail',
            cmd:'prepare'
        },
        function(args, callback) {
            var arguments = util.inspect(args.args);

            seneca.act(
                {
                    role    : 'mail',
                    cmd     : 'send',
                    code    : arguments.code    || 'default',
                    to      : arguments.to      || 'hod.hacker@gmail.com',
                    subject : arguments.subject || null,
                    content : {
                        name: arguments.name    || 'Customer One'
                    }
                },
                callback
            );
        }
    );
}

var seneca = require('seneca')().use(
    'mail',
    {
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
    }
);

seneca
    .use(prepareMail)
    .listen(10172);
