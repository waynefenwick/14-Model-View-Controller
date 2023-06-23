const router = require('express').Router();

const apiRoutes = require('../../14-Model-View-Controller copy/controllers/api');
const homeRoutes = require('../../14-Model-View-Controller copy/controllers/home-routes.js');
const dashboardRoutes = require('../../14-Model-View-Controller copy/controllers/dashboard-routes.js');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

module.exports = router;
