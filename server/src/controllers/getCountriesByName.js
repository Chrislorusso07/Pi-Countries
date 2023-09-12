const { Country, Activity } = require("../db");
const { Op } = require("sequelize");

const getCountriesByName = async (req, res) => {
  const { name } = req.query;
  try {
    if (!name) {
      return res.status(400).json({ error: "Country name is missing" });
    }

    const countries = await Country.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      include: [
        {
          model: Activity,
          attributes: ["name", "difficulty", "duration", "season"],
          through: { attributes: [] },
        },
      ],
    });

    if (!countries.length) {
      return res
        .status(404)
        .json({ error: `Couldn't find countries including ${name}` });
    }

    return res.json(countries);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to get countries" });
  }
};

module.exports = getCountriesByName;
