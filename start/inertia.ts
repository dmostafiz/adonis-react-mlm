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

  authUser:  (ctx)  => {
    // console.log('Share Auth', ctx.auth)
    return ctx.auth?.user;
  },

  ref_inv: (ctx) => {
    // console.log("ctx.session.get('ref_id'): ", ctx.session.get('ref_id'))
    return ctx.session.get('ref_id');
  },

  src_inv: (ctx) => {
    // console.log("ctx.session.get('ref_id'): ", ctx.session.get('ref_id'))
    return ctx.session.get('source');
  },

  errors: (ctx) => {
    // console.log(ctx.session.flashMessages.get('errors'))
    return ctx.session.flashMessages.get('errors');
  },

  successMsg: (ctx) => {
    // console.log(ctx.session.flashMessages.get('success'))
    return ctx.session.flashMessages.get('success');
  },

  errorMsg: (ctx) => {
    // console.log(ctx.session.flashMessages.get('error'))
    return ctx.session.flashMessages.get('error');
  },

  infoMsg: (ctx) => {
    // console.log(ctx.session.flashMessages.get('info'))
    return ctx.session.flashMessages.get('info');
  },

}).version(() => Inertia.manifestFile('public/assets/manifest.json'));
