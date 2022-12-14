const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000

app.set('views', './views');
app.set('view engine', 'ejs'); 

app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here


app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.get("/form", (req, res) => {
    res.render("form.ejs")
})

app.post('/math', (req, res) => {
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);


    //req.body.name==="value" format
    if (req.body.addition === "add") {    
        let result = num1 + num2;
        // console.log(result);

        if (result > 1000000) {
            res.status(400).send({ status: "error", message: "Overflow", sum: result })
        }
        else if (isNaN(result) || (num1 === "" && num2 === "")) {
            res.status(400).send({ status: "error", message: "Invalid data types", sum: result })
        }
        else if (typeof result === "number") {
            res.send({ status: "success", message: "The sum of given two numbers", sum: result })
        }
    }

    else if (req.body.subtraction === "sub") {
        let result = num1 - num2;
        // console.log(result);

        if (result < -1000000) {
            res.status(400).send({ status: "error", message: "Underflow", difference: result })
        }
        else if (isNaN(result) || (num1 === "" && num2 === "")) {
            res.status(400).send({ status: "error", message: "Invalid data types", difference: result })
        }
        else if (typeof result === "number") {
            res.send({ status: "success", message: "the difference of given two numbers", difference: result })
        }
    }

    else if (req.body.multiplication === "mul") {
        let result = num1 * num2;
        // console.log(result);

        if (result < -1000000) {
            res.status(400).send({ status: "error", message: "Underflow", Multiply: result })
        }
        else if (result > 1000000) {
            res.status(400).send({ status: "error", message: "Overflow", Multiply: result })
        }
        else if (isNaN(result) || (num1 === "" && num2 === "")) {
            res.status(400).send({ status: "error", message: "Invalid data types", Multiply: result })
        }
        else if (typeof result === "number") {
            res.send({ status: "success", message: "the Multiply of given two numbers", Multiply: result })
        }
    }

    else {
        let result = num1 / num2;
        // console.log(result);

        if (result === Infinity) {
            res.status(400).send({ status: "error", message: "Cannot divide by zero", divide: result })
        }
        else if (result < -1000000) {
            res.status(400).send({ status: "error", message: "Underflow", divide: result })
        }
        else if (result > 1000000) {
            res.status(400).send({ status: "error", message: "Overflow", divide: result })
        }
        else if (isNaN(result) || (num1 === "" && num2 === "")) {
            res.status(400).send({ status: "error", message: "Invalid data types", divide: result })
        }
        else if (typeof result === "number") {
            res.send({ status: "success", message: "the division of given two numbers", divide: result })
        }
    }
})


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;