import dotenv from 'dotenv';
dotenv.config();
console.log('MONGO_URI:', process.env.MONGO_URI); 
import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import paypal from 'paypal-rest-sdk';
import User from '../models/User.js';
import cors from 'cors';
import helmet from 'helmet';

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());


paypal.configure({
  mode: 'sandbox',
  client_id: process.env.PAYPAL_CLIENT_ID,
  client_secret: process.env.PAYPAL_CLIENT_SECRET
});


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Conectado a MongoDB'))
  .catch((err) => console.error('Error conectando a MongoDB:', err));

app.get('/api/test', (req, res) => {
  console.log('Se ha recibido una solicitud en /api/test');
  res.json({ message: 'API funcionando' });
});

app.post('/api/register', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Por favor, proporciona un correo electrónico y una contraseña.' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'Usuario creado con éxito' });
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    res.status(500).json({ message: 'Error al registrar el usuario' });
  }
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Por favor, proporciona un correo electrónico y una contraseña.' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Credenciales inválidas' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Credenciales inválidas' });
    }

    res.status(200).json({ message: 'Inicio de sesión exitoso' });
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
});

app.post('/api/create-payment', (req, res) => {
  const { amount } = req.body;

  if (!amount) {
    return res.status(400).json({ message: 'El monto es requerido.' });
  }

  const paymentJson = {
    intent: 'sale',
    payer: { payment_method: 'paypal' },
    transactions: [{ 
      amount: { total: amount, currency: 'MXN' }, 
      description: 'Suscripción Retro-Arcade' 
    }],
    redirect_urls: {
      return_url: 'http://localhost:3001/success',
      cancel_url: 'http://localhost:3001/cancel'
    }
  };

  paypal.payment.create(paymentJson, (error, payment) => {
    if (error) {
      console.error('Error creando el pago:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ id: payment.id });
    }
  });
});

app.get('/api/execute-payment', (req, res) => {
  const { paymentId, PayerID } = req.query;

  if (!paymentId || !PayerID) {
    return res.status(400).json({ message: 'Payment ID y Payer ID son requeridos.' });
  }

  const executePaymentJson = {
    payer_id: PayerID
  };

  paypal.payment.execute(paymentId, executePaymentJson, (error, payment) => {
    if (error) {
      console.error('Error ejecutando el pago:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ success: true });
    }
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

export default app;
