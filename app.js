const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 4000;
const Razorpay = require("razorpay");
// const stripe = require("stripe")("sk_test_51NdzylSAEVuXTV4aLB60H68g4nq54XmZz5qyZ6mismBNezUTp4sgUHX9mjKOIsgArddAm7a6UEG5QDuvl2xI49Ox00Bii44Mhs");
const app = express();

app.use(cors());
app.use(express.static("public")); 
app.use(express.json());


app.get("/", (req, res) => { 
  res.send("Hello World"); 
}); 

//chagning route from / to /route
app.post("/route", async (req,res) => {
    
    const razorpay = new Razorpay({
        key_id: rzp_test_VwGkEYXuRy5mqX,
        key_secret : yrm9sGBUP48DzE4oK0lOq6Y7
    });

    const options = {
        amount: req.body.amount,
        currency: req.body.currency,
        receipt: "any unique id for every order",
        payment_capture: 1
    };


    try {
        const response = razorpay.orders.create(options);
        res.json({
            order_id: response.id,
            currency: response.currency,
            amount: response.amount,
        });
    } catch(error) {
        res.status(400).send("Order failed, Try again!");
    }

    console.log(req.body);
    const items = req.body.items;
    // let lineItems = [];
    // items.forEach((item) => {
    //     lineItems.push(
    //         {
    //             price: item.id,
    //             quantity: item.quantity
    //         }
    //     )
    // });


    const session = await stripe.checkout.sessions.create({
        line_items : lineItems,
        mode : 'payment',
        payment_method_types : ['card'],
        currency : "inr",
        success_url : "https://shopkartbykshitij.netlify.app/success",
        cancel_url : "https://shopkartbykshitij.netlify.app/cancel",
        customer_email : "kshitijs.1010@gmail.com",
        submit_type : 'pay',
        allow_promotion_codes: true,
    });

    res.send(JSON.stringify({
        url : session.url
    }));
})


const start = async () => {
    try {
        app.listen(PORT, () => console.log(`${PORT} is listening!`))
    } catch(error) {
        console.log(error);
    }
}
start();