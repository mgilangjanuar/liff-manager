import axios from 'axios'


export default async function(req, res) {
  try {
    var requestApps = await axios.get('https://api.line.me/liff/v1/apps', {
      headers: {
        'Authorization': `Bearer ${req.cookies.channel.token}`
      }
    })
  } catch (err) { return res.redirect('/app/create') }
  return res.render('dashboard', {
    _title: 'Dashboard',
    _channel: req.cookies.channel,
    data: requestApps.data
  })
}
