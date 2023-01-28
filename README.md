# Payment API with Stripe

- Create a stripe account 
- Obtain the Public Key and Secret from the API Key Section 
- To understand the logic, go to profile and Developer Docs and choose `Custom Payment Flow` https://stripe.com/docs/payments/quickstart?lang=node
- Choose your language as `Node`
- Install `stripe` package [Note that this package comes with TypeDefs for TypeScript]

## Flow of Payment

    - From the browser's Java Script , send a request to our own backend passing a public key, items purchased and total amount ,shipping amount etc  
    - Validate the totals within our backend
    - From our backend call stripe SDK's paymentIntents.create method and pass in the order amount and currency. 
    - Stripe SDK returns us a bunch of information in the payment paymentIntent object (If succesful)
    - From our backend send the client secret for payment intent back to the caller (frontend in this case)
    - Frontend communicates with Stripe directly using a POST to the API : https://api.stripe.com/v1/payment_intents/pi_3MV5dwCieD1g0KW90gatZZPz/confirm
    (Note the payment intent token will vary each time)
    from this point forward. Our backend will not handle or store any credit card info

