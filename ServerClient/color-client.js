var seneca = require('seneca')();

var services = {
  color1 : 10171,
  color2 : 10173,
  mailer : 10172,
  twitter : 10174
};

function executeServices(data) {

    console.log(data);

    // Make a client call with parameters
    seneca.client(services.twitter).act(
        // Data
        'cmd:tweet,tweet:Name : ' + data.name + ', Age: ' + data.age + ':' + new Date(),

        // Callback for what to do with the response
        function doCallBack(args, res) {
            console.log(res);
        }
    );

    seneca.client(services.mailer).act(
        'role:mail, cmd:prepare, ' +
        'args:{to:"hod.hacker@gmail.com", subject:"Form Received", name:"' + data.name + '", age: "'+ data.age + '", code: "welcome"}',
        function doCallBack(args, res) {
            console.log(res);
        }
    );

}


module.exports = {executeServices:executeServices}
