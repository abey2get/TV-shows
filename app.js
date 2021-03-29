if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express = require('express');
const app = express();

app.use(express.static('public'))


app.get('/', (req, res) => {
    res.send("<h1>hellow world</h1>")
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Serving on port ${port}`)
})