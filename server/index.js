import express from 'express';
import stripe from './stripe.js'; 

const app = express();
app.use(express.json()); 

app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'mxn',
          product_data: {
            name: 'Suscripción Retro-Arcade',
          },
          unit_amount: 4900,
        },
        quantity: 1,
      }],
      mode: 'subscription',
      success_url: 'https://www.hsagames.com/success',
      cancel_url: 'https://www.hsagames.com/cancel',
    });
    res.json({ id: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default app;


