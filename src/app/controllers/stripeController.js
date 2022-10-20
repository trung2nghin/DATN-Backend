const stripe = require('stripe')(
  'sk_test_51LmbKgI9OKnTwToJoy32fn8VUmShTGkkDu0IT3FTBQQawxEdpo3Lwncxk7v0PK45NQuhFi2DDi5RoDfX3uSXHAUZ00IhyHLMe4'
);

const stripeController = {
  // STRIPE PAYMENT
  stripePayment: async (req, res) => {
    try {
      const { name } = req.body;
      // Create a PaymentIntent with the order amount and currency
      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(25 * 100),
        currency: 'usd',
        payment_method_types: ['card'],
        metadata: { name },
      });
      const clientSecret = paymentIntent.client_secret;
      res.status(200).json({ message: 'Payment initiated', clientSecret });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }

    // stripe.charges.create(
    //   {
    //     source: req.body.tokenId,
    //     amount: req.body.amount,
    //     currency: 'usd',
    //   },
    //   (stripeErr, stripeRes) => {
    //     if (stripeErr) {
    //       res.statusCode(500).json(stripeErr);
    //     } else {
    //       res.statusCode(200).json(stripeRes);
    //     }
    //   }
    // );
  },
};

module.exports = stripeController;
