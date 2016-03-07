Package.describe({
  summary: 'Per project globals',
  version: '1.0.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.mainModule('index.js', 'client');
});
