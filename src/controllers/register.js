import axios from 'axios'
import qs from 'qs'


function _view(req, res) {
  if (req.cookies.channel) return res.redirect('/dashboard')
  return res.render('register', { _title: 'Register' })
}

async function _store(req, res) {
  try {
    var requestToken = await axios.post(
      'https://api.line.me/v2/oauth/accessToken',
      qs.stringify({
        grant_type: 'client_credentials',
        client_id: req.body.channelID,
        client_secret: req.body.channelSecret
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    )
  } catch (err) { 
    return res.render('register', { _title: 'Register', _err_data: err.response.data})
  }
  return res.cookie(
    'channel', {
      id: req.body.channelID,
      secret: req.body.channelSecret,
      token: requestToken.data.access_token
    },
    {
      expire: new Date() + requestToken.data.expires_in
    }
  ).redirect('/dashboard')
}

export default function(req, res) {
  return req.method === 'GET' ? _view(req, res) : _store(req, res)
}