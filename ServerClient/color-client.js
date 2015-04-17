var seneca = require('seneca')()

var services = {
  color1 : 10171,
  color2 : 10173,
  twitter : 10174
};


seneca.client(services.color1).act(
    // Data
    'color:red',

    // Callback for what to do with the response
    function doCallBack(args, res) {
        console.log(res);
    }
);


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