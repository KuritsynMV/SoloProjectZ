function checkId(req, res, next) {
  const { id } = req.params
  if (Number(id)) {
    next()
  } else {
    res.status(400).send(`
      <h1>Неверный тип данных для id</h1>
      <a href='/'>На главную</a>
    `)
  }
}

module.exports = { checkId }
