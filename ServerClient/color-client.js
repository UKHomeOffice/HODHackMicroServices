var seneca = require('seneca')();

var services = {

  color1 : 10178,
  color2 : 10179,
  store_form : 10171,
  color1 : 10171,
  color2 : 10173,
  mailer : 10172,
  twitter : 10174
};

function executeServices(data, callback) {

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
        }

    );

}


module.exports = {executeServices:executeServices}

executeServices({name:'abc', age:12});
