const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51Pgp9A2Li69QpWuxY9GAOfuEQO8UkrI0o3anhMwVOpBp3Do5bKTXHtfTrL2pkdARDI94KEK5GQt9Yq0EQs9MKHGZ00j71z6LzT"
);

// Initialize Express App
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// Routes
app.get("/", (req, res) => res.status(200).send("Hello, world!"));

// Payment Creation Route
app.post("/payments/create", async (req, res) => {
    const total = parseInt(req.query.total); // Ensure `total` is parsed as a number
    if (!total || isNaN(total)) {
        return res.status(400).send({ error: "Invalid total amount" });
    }

    try {
        console.log("Payment request received for total:", total);

        const paymentIntent = await stripe.paymentIntents.create({
            amount: total,
            currency: "usd", // Change to req.query.currency for dynamic currency
        });

        // Send back client secret
        res.status(201).send({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        console.error("Error creating payment intent:", error);
        res.status(500).send({ error: "Payment processing failed" });
    }
});

// Export API
exports.api = functions.https.onRequest(app);
