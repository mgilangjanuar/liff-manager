export default function(req, res) {
  return res.render('channel', {
    _title: 'My Channel',
    _channel: req.cookies.channel
  })
}