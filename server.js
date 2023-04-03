// MVC Model View Controller
const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.listen(3000, () => console.log(`Server is running`))