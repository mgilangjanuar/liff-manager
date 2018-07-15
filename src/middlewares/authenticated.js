export default function(req, res, next) {
  return req.cookies.channel ? next() : res.send(`Cannot ${req.method} ${req.baseUrl}`)
}