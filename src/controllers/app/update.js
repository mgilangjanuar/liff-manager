import axios from 'axios'
import URLValidation from '../../helpers/URLValidation'

async function _view(req, res) {
  try {
    var requestApps = await axios.get('https://api.line.me/liff/v1/apps', {
      headers: {
        'Authorization': `Bearer ${req.cookies.channel.token}`
      }
    })
  } catch (err) { return res.send(`Bad Request\n<pre>${JSON.stringify(err.response.data)}</pre>`) }
  const apps = requestApps.data.apps.filter(e => e.liffId == req.params.id)
  return res.render('app/update', {
    _title: 'Update',
    _channel: req.cookies.channel,
    app: apps[0]
  })
}

async function _store(req, res) {
  if (!URLValidation(req.body.url)) {
    return res.send(`Bad Request\n<pre>URL not valid</pre>`)
  }

  try {
    await axios.put(
      `https://api.line.me/liff/v1/apps/${req.params.id}/view`,
      {
        type: req.body.type,
        url: req.body.url
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${req.cookies.channel.token}`
        }
      }
    )
  } catch (err) { return res.send(`Bad Request\n<pre>${JSON.stringify(err.response.data)}</pre>`) }
  return res.redirect('/dashboard')
}

export default function(req, res) {
  return req.method === 'GET' ? _view(req, res) : _store(req, res)
}