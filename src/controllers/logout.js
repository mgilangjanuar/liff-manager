export default function(req, res) {
  return res.clearCookie('channel').redirect('/')
}