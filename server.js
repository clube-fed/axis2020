const express = require('express');
const app = express();
const port = 3030;
const hbs = require('express-handlebars');

const navigation = [
    {
        navText: 'Public Home',
        id:2,
        url: '/',
        submenu: [
            {
                navText: 'Public Content 1',
                id:3,
                url: '/pb-content-1'
            },
            {
                navText: 'Public Content 2',
                id:4,
                url: '/pb-content-2'
            }
        ]
    },
    {
        navText: 'My Club',
        id:5,
        url: '/my-club',
        submenu: [
            {
                navText: 'Private Content - Staff',
                id:3,
                url: '/pv-content'
            }
        ]
    },
    {
        navText: 'Login',
        id:6,
        url: '/login'
    }
]

app.use(express.static("./public"));

app.set('view engine','hbs');

app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'master',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/components',
    helpers: {
        siteNameTitle: 'Axis FED Local Environment',
        styleSheetName: 'style.css',
        webFontSrc: 'https://fonts.googleapis.com/css?family=Lato:400,700,900|Lora&display=swap',
        themeColor: '#60bf70',
    }
}))

app.get('/', (req,res) =>{
    res.render('index', {navigation:navigation});
})

app.get('/pb-content-1', (req,res) =>{
    res.render('pb-content-1', {navigation:navigation});
})

app.get('/pb-content-2', (req,res) =>{
    res.render('pb-content-2', {navigation:navigation});
})

app.get('/my-club', (req,res) =>{
    res.render('my-club', {navigation:navigation});
})

app.get('/pv-content', (req,res) =>{
    res.render('pv-content', {navigation:navigation});
})

app.get('/login', (req,res) =>{
    res.render('login', {navigation:navigation, layout:'blank'});
})

app.listen(port, function(){
    console.log(`Welcome to the PSF on port: ${port}`)
});