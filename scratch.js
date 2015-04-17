
var seneca = require('seneca')()

seneca.add({cmd: 'transform'}, function(args, callback) {
    var dataToTransform = args.formData;
    dataToTransform.age = 28;
    dataToTransform.colour = 'red';
    callback( null, dataToTransform);
});

seneca.add({cmd: 'logging'}, function(args, callback) {
    console.log('Logging data');
    console.log(args.formData);
    callback( null, null);
});

// Some sample data
var formData = {name: 'Mark', age: 44, colour: 'blue'};

seneca.act({cmd: 'transform', formData: formData}, function(err,result) {
    if(err) return console.error( err )

    seneca.act({cmd: 'logging', formData: formData}, function(err,result) {
        if(err) return console.error;
    })
})

