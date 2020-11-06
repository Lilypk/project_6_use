const express = require('express')
const app = express()
const Countries = require('./db/models/Countries')
const parser = require('body-parser')
const cors = require('cors')
app.use(cors())
app.use(parser.json())

app.get('/', (req,res)=>{
    res.redirect('http://localhost:9002/countries')
})
app.get('/countries', (req,res)=>{
    Countries.find({}).then(countries=>{
        res.json(countries)
    })
})
app.get('/countries/name/:name', (req,res)=>{

    Countries.find({name:req.params.name}).then(countries=>{
      
        res.json(countries)
    })
})
app.get('/countries/:id', (req,res)=>{
    console.log(req.params)
    Countries.findById(req.params.id).then(countries=>{
        console.log(req.params.id)
        res.json(countries)
    })
})
app.post('/countries', (req,res)=>{
    Countries.create(req.body).then(countries=>{
        res.json(countries)
    })
})
app.put('/countries/:id', (req,res)=>{
    Countries.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new:true}
        ).then(countries=>{
        res.json(countries)
        })
})
app.delete('/countries/:id', (req,res)=>{
    Countries.findOneAndRemove(
        {_id: req.params.id},
        ).then(countries=>{
            res.json(countries)
        })
})

app.set('port', process.env.PORT || 9002)

app.listen(app.get('port'), ()=>{
    console.log('app is listening')
})

