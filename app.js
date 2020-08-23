const express = require('express');
const { createBundleRenderer } = require('vue-server-renderer');
const template = require('fs').readFileSync('./index.template.html', 'utf-8');
const serverBundle = require('./public/vue-ssr-server-bundle.json');
const clientManifest = require('./public/vue-ssr-client-manifest.json');

const app = express();
const port = process.env.PORT || 3000;

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false, // recommended
  template, // (optional) page template
  clientManifest, // (optional) client build manifest
});

app.use(express.static('public'));
app.get('*', (req, res) => {
  const context = {
    url: req.url,
    // Other properties injected to `index.template.html` for template interpolation
    // use whatever prop name as long as it matches the one in the template file
    title: 'Vue App', // default title, use double mustache {{ title }} for HTML-escaped interpolation
    metas: `<!-- inject more metas here -->`, // use triple mustache {{{ metas }}} for non-HTML-escaped interpolation
  };
  // No need to pass an app here because it is auto-created by
  // executing the bundle. Now our server is decoupled from our Vue app!
  renderer.renderToString(context, (err, html) => {
    if (err) {
      if (err.code === 404) {
        res.status(404).end('Page not found');
      } else {
        res.status(500).end('Internal Server Error');
        console.error(err);
      }
    } else {
      res.end(html);
    }
  });
});

app.listen(port, () => console.log(`http://localhost:${port}`));
