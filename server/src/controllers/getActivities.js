const { Activity } = require("../db");

const getActivities = async (req, res) => {
  try {
    const allActivities = await Activity.findAll();
    res.status(200).json(allActivities);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = getActivities;
