// MVC Model View Controller

const express = require('express');
const bodyParser = require('body-parser');
const { setStatics } = require('./utils/statics');


const app = express();
// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
// end Middleware

// EJS
app.set('view engine', 'ejs');
app.set('views', 'views');
// End EJS

// Static 

setStatics(app);
// Routes
app.get("/", (req, res) => {
    res.render('index', { pageTitle: "کار های روزمره" })
})
// end Routes
app.listen(3000, () => console.log(`Server is running`))