const authRouter = require('./auth');
const userRouter = require('./user');
const productRouter = require('./product');
const cartRouter = require('./cart');
const orderRouter = require('./order');
const paymentRouter = require('./stripe');

function route(app) {
  app.use('/v1/auth', authRouter);
  app.use('/v1/user', userRouter);
  app.use('/v1/product', productRouter);
  app.use('/v1/cart', cartRouter);
  app.use('/v1/order', orderRouter);
  app.use('/v1/payment', paymentRouter);
}

module.exports = route;
