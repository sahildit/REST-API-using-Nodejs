const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/testdatabase'

const index = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open',function(){
	console.log('connected...')
})


