var seneca = require('seneca')();

var services = {
  store_form : 10171,
  color2 : 10173,
  mailer : 10172,
  twitter : 10174
};

// Make a client call with parameters
seneca.client(services.color2).act(

    // Data
    'color:blue',

    // Callback for what to do with the response
    function doCallBack(args, res) {
        console.log(res);
    }
);

// Make a client call with parameters
seneca.client(services.twitter).act(
    // Data
    'cmd:tweet,tweet:some amaxing tweet - ' + new Date(),

    // Callback for what to do with the response
    function doCallBack(args, res) {
        console.log(res);
    }
);

// Make a client call with parameters
seneca.client(services.store_form).act(
    // Data
    'cmd:store_form,name:ukvi_form,data:lots_of_form',

    // Callback for what to do with the response
    function doCallBack(args, res) {
        console.log(res);
    }
);

//Sends a default email
seneca.client(services.mailer).act(
    'role:mail, cmd:prepare, ' +
    'args:{to:"hod.hacker@gmail.com", subject:"Commandline Test", name:"Some Test Guy"}',
    function doCallBack(args, res) {
        console.log(res);
    }
);

//Sends the welcome email
seneca.client(services.mailer).act(
    'role:mail, cmd:prepare, ' +
    'args:{to:"hod.hacker@gmail.com", subject:"Commandline Test 2", name:"Some Test Guy", code:"welcome"}',
    function doCallBack(args, res) {
        console.log(res);
    }
);

//sends the update emailS
seneca.client(services.mailer).act(
    'role:mail, cmd:prepare, ' +
    'args:{to:"hod.hacker@gmail.com", subject:"Commandline Test 3", name:"Some Test Guy", code:"update"}',
    function doCallBack(args, res) {
        console.log(res);
    }
);
