const Countries = require('../models/Countries')
const data = require('./countries.json')

Countries.deleteMany({})
    .then(()=>{
        Countries.create(data)
            .then((res)=>{
                console.log(res)
                process.exit()
            })
    })
    