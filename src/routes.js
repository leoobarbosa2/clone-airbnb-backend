const { Router } = require('express');

const routes = new Router();

routes.get('/home', (req, res) => {
  return res.json({ ok: true });
});

module.exports = routes;
