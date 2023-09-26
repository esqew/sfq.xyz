const { app } = require('@azure/functions');

app.http('ipEcho', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    route: '*',
    handler: async (request, context) => {
        return { body: request.headers['X-Forwarded-For'] }
    }
});
