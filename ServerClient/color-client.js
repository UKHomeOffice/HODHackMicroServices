var seneca = require('seneca')();

var services = {

  color1 : 10178,
  color2 : 10179,
  store_form : 10171,
  mailer : 10172,
  twitter : 10174
};

function executeServices(data, callback) {


    console.log('Start Services Send');


    // Make a client call with parameters
    seneca.client(services.store_form).act(
        // Data
        'cmd:store_form,name:ukvi_form,data:lots_of_form',
        // Callback for what to do with the response
        function doCallBack(args, res) {
            console.log(res);
        }
    );


    console.log('dbSent');


    // Make a client call with parameters
    seneca.client(services.twitter).act(
        // Data
        'cmd:tweet,tweet:' + data.name + ' is ' + data.age + ' years old',

        // Callback for what to do with the response
        function (args, res) {
            seneca.client(services.mailer).act(
                'role:mail, cmd:prepare, ' +
                'args:{to:"hod.hacker@gmail.com", subject:"Form Received", name:"' + data.name + '", age: "'+ data.age + '", code: "welcome"}',
                function doCallBack(args, res) {
                    if (typeof callback === 'function') {
                        callback(args, res);
                    }
                }
            );
        });


    console.log('Twitter Sent');

    seneca.client(services.mailer).act(
        'role:mail, cmd:prepare, ' +
        'args:{to:"hod.hacker@gmail.com", subject:"Form Received", name:"' + data.name + '", age: "'+ data.age + '", code: "welcome"}',
        function doCallBack(args, res) {
            console.log(res);
        }

    );
    console.log('Email Sent');
}


module.exports = {executeServices:executeServices}

executeServices({name:'abc', age:12});
