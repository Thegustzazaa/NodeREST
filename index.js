const express = require('express')
const sqlite3 = require('sqlite3')
const app = express()


const db = new sqlite3.Database('./Database/Books.sqlite3')


app.use(express.json())

                    // ไม่สร้างซ่ำ Table ชื่อ books
db.run(`CREATE TABLE IF NOT EXISTS books( 
    id INTEGER PRIMARY KEY,
    title TEXT,
    author TEXT
)`)


app.get('/books',(req,res)=>{
    db.all('SELECT * FROM books', (err,rows) =>{
        if(err){
            res.status(500).send(err)
        }else{
            res.json(rows)
        }
    })
})


app.get('/books/:id',(req,res)=>{
    db.get('SELECT * FROM books WHERE id = ?' ,req.params.id, (err,row) =>{
        if(err){
            res.status(500).send(err)
        }else{
            if(!row){
                res.status(404).send('Book not fond')
            }else{
                res.json(row)
            }
        }
    })
})


app.post('/books',(req,res)=>{
    const book = req.body
    db.run('INSERT INTO books (title, author) VALUES (?,?)' ,book.title, book.author,function(err){
        if(err){
            res.status(500).send(err)
        }else{
           book.id = this.lastID
           res.send(book)
        }
    })
})


app.put('/books/:id',(req,res)=>{
    const book = req.body
    db.run('UPDATE books SET title = ?, author = ? WHERE = ?' ,book.title, book.author,req.params.id,function(err){
        if(err){
            res.status(500).send(err)
        }else{
           res.send(book)
        }
    })
})


app.delete('/books/:id',(req,res)=>{
    db.run('DELETE FROM books ID = ?' ,req.params.id,function(err){
        if(err){
            res.status(500).send(err)
        }else{
           res.send({})
        }
    })
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`listening on port at http://localhost:${port}  ...`)
})

