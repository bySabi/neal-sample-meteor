Package.describe({
  name: "jquery",
  summary: "Manipulate the DOM using CSS selectors",
  git: "https://github.com/orgztion/meteor-jquery--module",
  // This package replace meteor jQuery 1.11.2 with any version from node_modules
  version: '1.11.6-rc.3'
});

Package.onUse(function (api) {
  api.use('modules');

  api.mainModule('main.js', 'client');

  api.export('$', 'client');
  api.export('jQuery', 'client');
});
