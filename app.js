const express = require('express')
const app = express()
const cors = require("cors");
const { default: axios } = require('axios');
const bodyParser = require("body-parser")
const port = process.env.PORT || 5000;
app.use(cors({
    origin: "http://localhost:3000"
}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/"(req, res) => {
    res.send("potato")
})

app.post("/api/v1/", async (req, res) => {

});
app.listen(port, () => {
    console.log(`Server successfully created on Port: ${port}`);
});