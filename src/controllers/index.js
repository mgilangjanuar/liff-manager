import express from 'express'
import notAuthenticated from '../middlewares/notAuthenticated'
import authenticated from '../middlewares/authenticated'
import register from './register'
import home from './home'
import dashboard from './dashboard'
import logout from './logout'
import channel from './channel'
import index from './app/index'


export default function() {
  const app = express.Router()

  app.use('/$', home)
  app.use('/register', notAuthenticated, register)
  app.use('/dashboard', authenticated, dashboard)
  app.use('/channel', authenticated, channel)
  app.use('/logout', authenticated, logout)
  app.use('/app', authenticated, index())

  return app
}