const cors = require("cors");
const express = require("express");
const paypal = require("paypal-rest-sdk");
require("dotenv").config();

paypal.configure({
  'mode': process.env.PAYPAL_MODE, //sandbox or live
  'client_id': process.env.PAYPAL_CLIENT_ID,
  'client_secret': process.env.PAYPAL_CLIENT_SECRET
});

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const PORT = process.env.PORT || 5000;

const app = express();
const SERVER = process.env.SERVER_URL
// Middlewares here
app.use(express.json());
app.use(
  cors({
    origin: `*:*`,
  })
);

// Routes here
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/success", (req, res) => {
  res.send("Payment successful");
});
app.get("/cancel", (req, res) => {
  res.send("Cancelled by client");
});
app.post("/stripe/pay", async (req, res) => {
  const { price, currency } = req.body;
  if (!price || !currency) {
    console.log("Missing params");
    res.status(400).json({error:'Missing price, please specify a price'});
  }
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency,
            product_data: {
              name: "Make donation",
            },
            unit_amount: price * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${SERVER}/success`,
      cancel_url: `${SERVER}/cancel`,
    });
    res.json({ id: session.id, url: session.url });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({error:error.message})
  }
});



app.post("/pay", (req, res) => {
  console.warn(process.env.SERVER_URL)
  const { price, currency } = req.body;
  if (!price || !currency) {
    console.log("Missing params");
    res.status(400).json({error:'Missing price, please specify a price'});
  }
  const create_payment_json = {
    intent: "sale",
    payer: {
      payment_method: "paypal",
    },
    redirect_urls: {
      return_url: `${SERVER}/paypal/success`,
      cancel_url: `${SERVER}/paypal/cancel`,
    },
    transactions: [
      {
        item_list: {
          items: [
            {
              name: "Donation",
              sku: "001",
              price,
              currency,
              quantity: 1,
            },
          ],
        },
        amount: {
          currency,
          total: price,
        },
        description: "Make a donation",
      },
    ],
  };

  app.get("/paypal/success", (req, res) => {
    const payerId = req.query.PayerID;
    const paymentId = req.query.paymentId;

    const execute_payment_json = {
      payer_id: payerId,
      transactions: [
        {
          amount: {
            currency: currency,
            total: price,
          },
        },
      ],
    };

    paypal.payment.execute(
      paymentId,
      execute_payment_json,
      function (error, payment) {
        if (error) {
          console.log(error.message);
          res.status(500).json({error:error.message})
        } else {
          console.log(JSON.stringify(payment));
          res.send("Success");
        }
      }
    );
  });

  paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
      res.status(500).json({error:error.message})
      // throw error;
    } else {
      for (let i = 0; i < payment.links.length; i++) {
        if (payment.links[i].rel === "approval_url") {
          res.json({url:payment.links[i].href})
        }
      }
    }
  });
});

app.get("/paypal/cancel", (req, res) => res.send("Cancelled"));

app.listen(process.env.PORT, () =>
  console.log(`Listening to port ${process.env.PORT}`)
);
