export default function(req, res, next) {
  return req.cookies.channel ? res.send(`Cannot ${req.method} ${req.baseUrl}`) : next()
}