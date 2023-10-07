const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 4000;
const stripe = require("stripe")("sk_test_51NdzylSAEVuXTV4aLB60H68g4nq54XmZz5qyZ6mismBNezUTp4sgUHX9mjKOIsgArddAm7a6UEG5QDuvl2xI49Ox00Bii44Mhs");
const app = express();

app.use(cors());
app.use(express.static("public")); 
app.use(express.json());


app.get("/", (req, res) => { 
  res.send("Hello World"); 
}); 


app.post("/", async (req,res) => {
    /*
    what we get from react : req.body.items
    [
        {
            id:1,
            quantity:3
        }
    ]
    what stripe wants : line_items
    [
        {
            price:5,
            quantity:3 
        }
    ]
    */

    console.log(req.body);
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item) => {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    });


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