const router = require('express').Router();
const authRouter = require('./auth.api.router');
const tokenRouter = require('./token.api.router');
const eventsRouter = require('./events.api.router')

router.use('/tokens', tokenRouter);
router.use('/auth', authRouter);
router.use('/events', eventsRouter);

module.exports = router;
