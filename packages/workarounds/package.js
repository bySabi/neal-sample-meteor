Package.describe({
  summary: 'Meteor only workarounds',
  version: '1.0.0'
});

Package.onUse(function(api) {
  api.use('modules');
  
  api.mainModule('client.js', 'client');
});
