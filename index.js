const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

//These are middleware...
app.use(cors())
app.use(express.json())
//These are middleware...

app.get('/', (req, res) => {
    res.send('I want to be an web developer')
});


const users = [
    {
        id: 1,
        name: 'Sabana Mam',
        email: 'sabana@gmail.com',
        phone: '0178888888'
    },
    {
        id: 2,
        name: 'Provashish',
        email: 'prova@gmail.com',
        phone: '01788888007'
    },
    {
        id: 3,
        name: 'Nisha das',
        email: 'nishadas@gmail.com',
        phone: '0178444444'
    },
    {
        id: 4,
        name: 'tonmoyyyrani roy',
        email: 'sumitra@gmail.com',
        phone: '01634853344'
    },
    {
        id: 5,
        name: 'Surja kanta roy',
        email: 'surja@gmail.com',
        phone: '019234342342'
    },
    {
        id: 6,
        name: 'tonmoy3',
        email: 'suvashish@gmail.com',
        phone: '0163254481o'
    },
];


app.get('/users', (req, res) => {
    //filter by search query parameter..
    if (req.query.name) {
        const search = req.query.name.toLocaleLowerCase();
        const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(matched)
    } else {
        res.send(users)
    }

});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user)
})

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})