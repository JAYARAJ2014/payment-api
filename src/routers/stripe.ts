import { Router } from "express";
import { handleAsync } from "../middlewares/async-handler";
import { stripeHandler } from "../handlers/stripe";

export const stripeRouter: Router = Router();

stripeRouter.post('/',handleAsync(stripeHandler.createPaymentIntent));