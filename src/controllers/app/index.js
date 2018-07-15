import express from 'express'
import create from './create'
import update from './update'
import _delete from './delete';


export default function() {
  const app = express.Router()

  app.use('/create', create)
  app.use('/:id/update', update)
  app.use('/:id/delete', _delete)

  return app
}