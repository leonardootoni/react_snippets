const Dev = require('../models/Dev');
module.exports = {
  async store(req, res) {
    const { user: userId } = req.headers;
    const { devId } = req.params;

    console.log(devId);
    console.log(userId);

    const loggedDev = await Dev.findById(userId);
    const targetDev = await Dev.findById(devId);

    if (!targetDev) {
      return res.status(400).json({ error: 'Dev not exists' });
    }

    loggedDev.dislikes.push(targetDev._id);
    await loggedDev.save();
    return res.json(loggedDev);
  }
};
