const { Country, Activity } = require("../db");

const getCountryById = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await Country.findByPk(id, {
      include: {
        model: Activity,
        attributes: ["id", "name", "difficulty", "duration", "season"],
      },
    });

    if (!response) {
      return res.status(404).json({ error: "Could not find Country" });
    }
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getCountryById;
