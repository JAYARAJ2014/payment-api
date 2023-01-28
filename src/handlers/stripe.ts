import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Stripe from 'stripe';

/***
 * Object model send in the req.body
 * 
 * {
  purchase: [
    { id: '1', name: 't-shirt', price: 1999 },
    { id: '2', name: 'shoes', price: 4999 }
  ],
  total_amount: 10998,
  shipping_fee: 1099
}

 */

class StripeHandler {
  public async createPaymentIntent(req: Request, res: Response) {
    console.log(req.body)
    const stripe=new Stripe(process.env.STRIPE_SECRET_KEY||'', {
      apiVersion: '2022-11-15',
    })

    const {purchase, total_amount, shipping_fee}= req.body; 
    const calculateOrderAmount= ()=> {
      return total_amount + shipping_fee
    }
    const paymentIntent = await stripe.paymentIntents.create({amount:calculateOrderAmount(),currency:'usd' })
    console.log(paymentIntent)
    return res.status(StatusCodes.OK).json({clientSecret: paymentIntent.client_secret });
  }
}

export const stripeHandler = new StripeHandler();
