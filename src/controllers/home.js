export default function(req, res) {
  return res.render('home', {
    _title: 'Home',
    _channel: req.cookies.channel
  })
}