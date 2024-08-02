const router = require('express').Router();
const { Event } = require('../../db/models');
const { verifyAccessToken } = require('../middlewares/verifyToken');
const { checkId } = require('../middlewares/common');

router
  .get('/', async (req, res) => {
    try {
      const entries = await Event.findAll();
      res.json(entries);
    } catch (error) {
      console.error(error);
      res.sendStatus(400);
    }
  })
  .get('/:id', checkId, async (req, res) => {
    console.log(req.params)
    try {
      const { id } = req.params
      const entrie = await Event.findOne({ where: { id } })
      res.json(entrie)
    } catch (error) {
      console.log(error)
      res.status(500).send(error.message)
    }
  })
  .post('/', verifyAccessToken, async (req, res) => {
    const { title, description, date, price } = req.body;
    try {
      const entry = await Event.create({
        title,
        description,
        date,
        price,
        // userId: res.locals.user.id,
      });
      res.json(entry);
    } catch (error) {
      console.error(error);
      res.sendStatus(400);
    }
  })
  
  // .delete('/:id', verifyAccessToken, async (req, res) => {
  //   const { id } = req.params;
  //   try {
  //     const event = await Event.findOne({ where: { id } });
  //     if (task.userId === res.locals.user?.id) {
  //       task.destroy();
  //       res.sendStatus(200);
  //     } else {
  //       res.status(400).json({ message: 'У вас нет прав на удаление записи' });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     res.sendStatus(400);
  //   }
  // });

module.exports = router;
