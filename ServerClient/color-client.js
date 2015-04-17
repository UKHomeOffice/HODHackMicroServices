var seneca = require('seneca')()

var services = {
  'color-1' : 10171,
  'color-2' : 10173
};


seneca.client(10171).act(

    // Data
    'color:red',

    // Callback for what to do with the response
    function doCallBack(args, res) {
        console.log(res);
    }
);


// Make a client call with parameters
seneca.client(10173).act(

    // Data
    'color:blue',

    // Callback for what to do with the response
    function doCallBack(args, res) {
        console.log(res);
    }
);