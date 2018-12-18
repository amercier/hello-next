const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    server.get('/p/:id', (request, response) => {
      const actualPage = '/post';
      const queryParams = { id: request.params.id };
      app.render(request, response, actualPage, queryParams);
    });

    server.get('*', (request, response) => {
      return handle(request, response)
    });

    const port = process.env.PORT || 8000;
    server.listen(port, error => {
      if (error) {
        throw error;
      }
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch(error => {
    console.error(error.stack);
    process.exit(1);
  });
