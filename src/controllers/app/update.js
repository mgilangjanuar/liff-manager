import axios from 'axios'

async function _view(req, res) {
  try {
    var requestApps = await axios.get('https://api.line.me/liff/v1/apps', {
      headers: {
        'Authorization': `Bearer ${req.cookies.channel.token}`
      }
    })
  } catch (err) {
    console.log(`ERR ${err}`)
    return res.send('Bad Request')
  }
  const apps = requestApps.data.apps.filter(e => e.liffId == req.params.id)
  return res.render('app/update', {
    _title: 'Update',
    _channel: req.cookies.channel,
    app: apps[0]
  })
}

async function _store(req, res) {
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
  } catch (err) {
    console.log(`ERR ${err}`)
    return res.send('Bad Request')
  }
  return res.redirect('/dashboard')
}

export default function(req, res) {
  return req.method === 'GET' ? _view(req, res) : _store(req, res)
}