var steps = require('./steps'),
    fields = require('./fields'),
    i18n = require('i18next');

var app = require('express').Router();

app.use(require('hmpo-template-mixins')(i18n.t, fields));

require('hmpo-form-controller').formatters.numeric = function (value) {
    return parseFloat(value);
}
require('hmpo-form-controller').validators.numeric = function (value) {
    return typeof value === 'number' && !isNaN(value);
}

app.use(require('hmpo-form-wizard')(steps, fields, { translate: i18n.t }));

module.exports = app;