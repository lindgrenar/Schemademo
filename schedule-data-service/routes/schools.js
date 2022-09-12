const { response } = require('express')
const encrypt = require('../modules/encrypt.js')

module.exports = function (server, db) {

  server.get('/data/schools', (req, res) => {
    let query = "SELECT id, name, shortName FROM schools"
    let result = db.prepare(query).all()
    res.setHeader('Content-Range', result.length);
    res.setHeader('X-Total-Count', result.length);
    res.json(result)
  })

  // registrera en ny school
  server.post('/data/schools', (request, response) => {
    let user = request.body
    let result
    try {
      result = db.prepare('INSERT INTO schools (name, shortName) VALUES(?,?)').run([user.name, user.shortName])
    } catch (e) {
      console.error(e)
    }
    response.json(result)
  })

  server.put('/data/schools', (request, response) => {
    let user = request.body
    let result
    try {
      result = db.prepare('UPDATE schools SET name = ?, shortname = ?, WHERE id = ?').run([user.id, user.name, user.shortName])
    }catch(e){
      console.error(e)
    }
    response.json(result)
  })
}