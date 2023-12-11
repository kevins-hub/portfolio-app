const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');

const app = express();

// View engine setup
//app.engine('handlebars', exphbs());
app.engine( "handlebars", exphbs({ extname: "handlebars", defaultLayout: false, layoutsDir: "views/" }) );
app.set('view engine', 'handlebars');

// Static folder

//app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/public', express.static(__dirname + "/public"));
//app.use(express.static(path.join(__dirname, '/assets')));
//console.log(__dirname);
//console.log(path.join(__dirname, 'assets'));

// Body Parser Middleware

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.render('home');
});

app.get('/home', (req,res) => {
    res.render('home');
});

app.get('/coming-soon', (req,res) => {
    res.render('coming-soon')
});

app.get('/keepskating', (req,res) => {
    res.render('keepskating')
});

app.get('/f35', (req,res) => {
    res.render('f35')
});

app.get('/jira', (req,res) => {
    res.render('jira')
});

app.get('/manu', (req,res) => {
    res.render('manu')
});

app.get('/budget', (req,res) => {
    res.render('budget')
});

app.get('/portfolio', (req,res) => {
    res.render('portfolio')
});

app.get('/photos', (req, res) => {
    res.render('photos')
});

app.get('/finstagram', (req, res) => {
    res.render('finstagram')
});

app.get('/thegoodlive', (req, res) => {
    res.render('thegoodlive')
});

app.get('/onsip', (req, res) => {
  res.render('onsip')
});
/*
app.get('/lessons', (req,res) => {
    res.render('lessons');
});

app.get('/contact', (req,res) => {
    res.render('contact');
});

app.get('/about', (req,res) => {
    res.render('about');
});

app.get('/media', (req,res) => {
    res.render('media');
});
*/
app.post('/send', (req,res) => {
    const output = `
    <p>New message from portfolio!</p>
    <h3>Contact Details</h3>
    <ul>
        <li>Name: ${req.body.name}<li>
        <li>Email: ${req.body.email} </li>
        <li>Message: ${req.body.comments}</li>
    </ul>
    `
    res.render("home")
    async function main(){
                // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                user: "kevinkliu92@gmail.com", // generated ethereal user
                pass: "K3v1nl1uflip42892" // generated ethereal password
                }
            });

            // send mail with defined transport object
            let info = await transporter.sendMail({
                from: '"My Website" <kevinkliu92@gmail.com>', // sender address
                to: "kevinliu428@gmail.com", // list of receivers
                subject: "Somebody is reaching out!", // Subject line
                text: "Hello world?", // plain text body
                html: output // html body
            });

            //console.log("Message sent: %s", info.messageId);
            //console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
            //console.log("here");
            //console.log("right here");
            //res.render('home', {msg:'Email has been sent'});
            //res.render("home");
    }
    //res.render("home-2");
    //res.render("home");
    main().catch(console.error);
    //res.render("home");

});

app.listen(process.env.PORT || 3000, () => console.log('Server started...'));

