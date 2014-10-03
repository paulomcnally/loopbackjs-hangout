module.exports = function(Sms) {

  Sms.beforeRemote('create',
    function(ctx, sms, next) {
      ctx.req.body['create_dt'] = new Date();

      if (ctx.req.body.phone.length != 8) {

        var err = new Error('El número celular debe tener 8 dígitos númericos');
        err.statusCode = 409;
        next(err);
      }
      else {
        next();
      }

    }
  )

};
