module.exports = function(Sms) {

  Sms.beforeRemote('create',
    function(ctx, sms, next) {
      ctx.req.body['create_dt'] = new Date();
      next();
    }
  )

};
