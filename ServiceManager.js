// Define Services
var services = {
    'db' : 10171,
    'email' : 10172,
    'sms' : 10173,
    'tweet' : 10174,
    'auth' : 10175,
    'encrypt' : 10176
};

// Define Workflows
var workflows = {

    'form-1' : {
            1 : {
            'command_name' : 'db',
            'status' : ['ok']
        },
            2 : {
            'command_name' : 'email',
            'status' : ['ok']
        }
    },

    'form-2' : {
        1 : {
            'command_name' : 'email',
            'status' : ['ok']
        },
        2 : {
            'command_name' : 'tweet',
            'status' : ['ok', 'fail']
        }
    },

    'form-3' : {
        1 : {
            'command_name' : 'db',
            'status' : ['ok']
        },
        2 : {
            'command_name' : 'sms',
            'status' : ['ok', 'fail']
        }
    }
};

var consoleCallback = function doCallBack(args, res) {
    console.log(res);

}

var seneca = require('seneca')();

// Call the Command
function runService(service, requestData, callback) {

    var serviceIp = services[service];
    if (serviceIp) {

        console.log('Valid Service');

        seneca.client(services[service]).act(

            // Data
            requestData,

            // Callback for what to do with the response
            callback
        );
    } else {
        console.log('Invalid Service');
    }
}

function commandRunner(workflow, data) {

    for (key in workflow) {
        runService(workflow[key]['command_name'], data, consoleCallback);
    }
}

commandRunner(workflows['form-3'], 'color:red');


