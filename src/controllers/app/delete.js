import axios from 'axios'

export default async function(req, res) {
  try {
    await axios.delete(`https://api.line.me/liff/v1/apps/${req.params.id}`, {
      headers: { 'Authorization': `Bearer ${req.cookies.channel.token}` }
    })
  } catch (err) {
    console.log(`ERR ${err}`)
    return res.send('Bad Request')
  }
  return res.redirect('/dashboard')
}