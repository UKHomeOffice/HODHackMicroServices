module.exports = {
    '/': {
        controller: require('../controllers/start'),
        template: 'index',
        next: '/name'
    },
    '/name': {
        fields: ['name'],
        next: '/submit'
    },
    '/submit': {
        controller: require('../controllers/submit'),
        next: '/done'
    },
    '/done': {

    }
}