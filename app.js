const express = require('express')
const app = express()
const cors = require("cors");
const { default: axios } = require('axios');
const bodyParser = require("body-parser")
const port = process.env.PORT || 5000;
const keys = require("./env.js")

app.use(cors({
    origin: "http://localhost:3000"
}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

axios.defaults.headers.common["Authorization"] = keys.API_KEY

app.get("/", (req, res) => {
    res.send("potato")
})

app.post("/api/v1/", async (req, res) => {

    const { location } = req.body
    const resp = await axios.get("https://api.yelp.com/v3/businesses/search", { params: { location: location, limit: "50", categories: "parking" } })
    res.json(resp.data)
});

app.listen(port, () => {
    console.log(`Server successfully created on Port: ${port}`);
});