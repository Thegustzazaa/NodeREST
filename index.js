<<<<<<< HEAD





const express = require('express')
const Sequelize = require('sequelize')
const app = express()


app.use(express.json())

=======
const express = require('express');
const Sequelize = require('sequelize');
const app = express();


app.use(express.json());


const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'locahost',
    dialect: 'sqlite',
    storage: './Database/SQBooks.sqlite'
});
>>>>>>> 67579fedcf217f6b73e7205160b98d8ac993d6de

const sequelize = new Sequelize('database','usename','password',{
    host:"localhost",
    dialect:"sqlite",
    storage:"./Database/SQBooks.sqlite"
})


const Book = sequelize.define("book",{
    id :{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey: true
    },
    title :{
        type: Sequelize.STRING,
        allowNull: false // have to
    },
    author :{
        type: Sequelize.STRING,
        allowNull: false // have to        
    },  
})

sequelize.sync()

<<<<<<< HEAD
app.get('/books',(req,res)=>{
    Book.findAll().then(books =>{
        res.json(books)
    }).catch(err=>{
        res.status(500).send(err)
    })
})


app.get('/books/:id',(req,res)=>{
    Book.findByPk(req.params.id).then(book =>{
        if(!book) {
            res.status(404).send('Book not found')
        }else{
            res.json(book)
        }
    }).catch(err=>{
        res.status(500).send(err)
    })
})



app.post('/books',(req,res)=>{
    Book.create(req.body).then(book =>{
        res.send(book)
        
    }).catch(err=>{
        res.status(500).send(err)
    })
})


app.put('/books/:id',(req,res)=>{
    Book.findByPk(req.params.id).then(book =>{
        if(!book){
            res.status.send('Bookn not found')
        }else{
            book.update(req.body).then(()=>{
                res.send(book)
            }).catch(err=>{
                res.status(500).send(err)
            })
        }
    }).catch(err=>{
        res.status(500).send(err)
    })
})


app.delete('/books/:id',(req,res)=>{
    Book.findByPk(req.params.id).then(book =>{
        if(!book){
            res.status.send('Bookn not found')
        }else{
            book.destroy().then(()=>{
                res.send({})
            }).catch(err=>{
                res.status(500).send(err)
            })
        }
    }).catch(err=>{
        res.status(500).send(err)
    })
})


const port = process.env.PORT || 3000
app.listen(port,()=> console.log(`Listening on port ${port}`))
=======
const Book = sequelize.define('book', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false
    }
});


sequelize.sync();


app.get('/books', (req, res) => {
    Book.findAll().then(books => {
        res.json(books);
    }).catch(err => {
        res.status(500).send(err);
    });
});


app.get('/books/:id', (req, res) => {
    Book.findByPk(req.params.id).then(book => {
        if (!book) {
            res.status(404).send('Book not found');
        } else {
            res.json(book);
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});


app.post('/books', (req, res) => {
    Book.create(req.body).then(books => {
        res.send(books);
    }).catch(err => {
        res.status(500).send(err);
    });
});


app.put('/books/:id', (req, res) => {
    Book.findByPk(req.params.id).then(book => {
        if (!book) {
            res.status(404).send('Book not found');
        } else {
            res.update(req.body).then(() => {
                res.send(book);
            }).catch(err => {
                res.status(500).send(err);
            });
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});


app.delete('/books/:id', (req, res) => {
    Book.findByPk(req.params.id).then(book => {
        if (!book) {
            res.status(404).send('Book not found');
        } else {
            res.destroy().then(() => {
                res.send({});
            }).catch(err => {
                res.status(500).send(err);
            });
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
>>>>>>> 67579fedcf217f6b73e7205160b98d8ac993d6de
