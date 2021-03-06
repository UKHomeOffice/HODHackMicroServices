var express = require('express'),
    app = express(),
    path = require('path'),
    i18n = require('i18next'),
    microServiceClient = require('../ServerClient/color-client');

// add routing for static assets if running as a standalone server
app.use('/public', express.static(path.resolve(__dirname, './assets')));
app.use(function (req, res, next) {
    res.locals.assetPath = '/public';
    next();
});

require('hmpo-govuk-template').setup(app);
app.set('view engine', 'html');
app.engine('html', require('hogan-express-strict'));
app.set('views', path.resolve(__dirname, './views'));
app.use(require('express-partial-templates')(app));

require('i18next').init({
    setJqueryExt: false,
    lng: 'en-GB',
    fallbackLng: 'en-GB',
    cookieName: 'lang',
    detectLngQS: 'lang'
});

app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('body-parser').json());

app.use(function (req, res, next) {
    res.locals.baseUrl = req.baseUrl;
    next();
});

app.use(require('./routes'));


app.post('/api', function (req, res) {

    console.log('scooby');
    microServiceClient.executeServices(req.body);

    res.json(req.body);
});

app.use(function (err, req, res, next) {
    res.status(500).render('pages/error');
})

app.listen(require('./config').PORT);
console.log('App listening on port', require('./config').PORT)