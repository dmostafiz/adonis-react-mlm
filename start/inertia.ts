/*
|--------------------------------------------------------------------------
| Inertia Preloaded File
|--------------------------------------------------------------------------
|
| Any code written inside this file will be executed during the application
| boot.
|
*/

import Inertia from '@ioc:EidelLev/Inertia';

Inertia.share({

  errors: (ctx) => {
    console.log(ctx.session.flashMessages.get('errors'))
    return ctx.session.flashMessages.get('errors');
  },

  successMsg: (ctx) => {
    console.log(ctx.session.flashMessages.get('success'))
    return ctx.session.flashMessages.get('success');
  },

  errorMsg: (ctx) => {
    console.log(ctx.session.flashMessages.get('error'))
    return ctx.session.flashMessages.get('error');
  },

  infoMsg: (ctx) => {
    console.log(ctx.session.flashMessages.get('info'))
    return ctx.session.flashMessages.get('info');
  },

}).version(() => Inertia.manifestFile('public/assets/manifest.json'));
