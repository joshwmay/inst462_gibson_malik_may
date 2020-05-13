const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/*
 * The 'express.static' middleware provides some services Express can use to
 * serve files from a directory - in this case, the 'public' subdirectory of
 * this project.
 *
 * The 'app.use' function attaches middleware to our Express application, so
 * that when the application is running, it can serve static files. In this
 * case, we mount it over the entire app: any web request that GETs a path that
 * exists in the 'public' directory will be handled by the middleware. The
 * middleware also serves the 'index.html' file in a directory (if it exists)
 * whenever a client requests the directory itself.
 *
 * The 'public' directory for this project, in turn, contains all the HTML,
 * Javascript, and CSS files needed to run a simple chat client connected to
 * this server. Accessing this server's root URL will serve 'public/index.html',
 * which contains our chat client. This gives users an easy way to connect to
 * the server and interact with other users.
 *
 * See also:
 *  - Express: Serving static files in Express
 *    https://expressjs.com/en/starter/static-files.html
 *  - Express: express.static()
 *    https://expressjs.com/en/4x/api.html#express.static
 *  - Express: Using middleware
 *    https://expressjs.com/en/guide/using-middleware.html
 *  - Express: app.use()
 *    https://expressjs.com/en/4x/api.html#app.use
 */
app.use(express.static('public'));

// this is a single route, in the simplest possible format
// the simplest format is not necessarily the best one.
// this is, right now, an introduction to Callback Hell
// but it is okay for a first-level example



app.get('/height', (req, res) => {
  const baseURL = 'http://localhost:' + port + '/json/height.json';
  fetch(baseURL)
    .then(res => res.json())
    .then(data => {      
      res.send({ data: data });
        })
      .catch((err) => {      
      res.redirect('/error');
        })
});

app.get('/ast_ht', (req, res) => {
  const baseURL = 'http://localhost:' + port + '/json/ast_hts.json';
  fetch(baseURL)
    .then(res => res.json())
    .then(data => {      
      res.send({ data: data });
        })
      .catch((err) => {      
      res.redirect('/error');
        })
});
app.get('/trb_ht', (req, res) => {
  const baseURL = 'http://localhost:' + port + '/json/trb_hts.json';
  fetch(baseURL)
    .then(res => res.json())
    .then(data => {      
      res.send({ data: data });
        })
      .catch((err) => {      
      res.redirect('/error');
        })
});


app.get('/ws', (req, res) => {
    const baseURL = 'http://localhost:' + port + '/json/ws.json';
    fetch(baseURL)
      .then(res => res.json())
      .then(data => {        
        res.send({ data: data });
          })
        .catch((err) => {        
        res.redirect('/error');
          })
  });

  app.get('/ppg', (req, res) => {
    const baseURL = 'http://localhost:' + port + '/json/ppg.json';
    fetch(baseURL)
      .then(res => res.json())
      .then(data => {        
        res.send({ data: data });
          })
        .catch((err) => {        
        res.redirect('/error');
          })
  });

  app.get('/gp', (req, res) => {
    const baseURL = 'http://localhost:' + port + '/json/gp.json';
    fetch(baseURL)
      .then(res => res.json())
      .then(data => {        
        res.send({ data: data });
          })
        .catch((err) => {        
        res.redirect('/error');
          })
  });

  app.get('/ppgi', (req, res) => {
    const baseURL = 'http://localhost:' + port + '/json/ppg_ind.json';
    fetch(baseURL)
      .then(res => res.json())
      .then(data => {        
        res.send({ data: data });
          })
        .catch((err) => {        
        res.redirect('/error');
          })
  });

  app.get('/rbs', (req, res) => {
    const baseURL = 'http://localhost:' + port + '/json/rbs.json';
    fetch(baseURL)
      .then(res => res.json())
      .then(data => {        
        res.send({ data: data });
          })
        .catch((err) => {        
        res.redirect('/error');
          })
  });

  app.get('/ast', (req, res) => {
    const baseURL = 'http://localhost:' + port + '/json/ast.json';
    fetch(baseURL)
      .then(res => res.json())
      .then(data => {        
        res.send({ data: data });
          })
        .catch((err) => {        
        res.redirect('/error');
          })
  });
  app.get('/ast50', (req, res) => {
    const baseURL = 'http://localhost:' + port + '/json/ast_t50.json';
    fetch(baseURL)
      .then(res => res.json())
      .then(data => {        
        res.send({ data: data });
          })
        .catch((err) => {        
        res.redirect('/error');
          })
  });
app.listen(port, () => console.log(`Example app listening on port ${port}!`))