import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import index from './controllers/index'


const app = express()
dotenv.config()


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cookieParser())

app.set('view engine', 'pug')

app.use(express.static(`${__dirname}/../node_modules/bootstrap/dist`))
app.use(express.static(`${__dirname}/../node_modules/jquery/dist`))
app.use(express.static(`${__dirname}/../node_modules/clipboard-polyfill/build`))
app.use(express.static(`${__dirname}/../node_modules/font-awesome`))
app.use(express.static(`${__dirname}/../assets`))


app.use('/', index())


app.listen(process.env.PORT | 7836, () => console.log(`app listen: ${process.env.PORT | 7836}`))
