const { Router } = require("express");
const getActivities = require("../controllers/getActivities");
const getAllCountries = require("../controllers/getAllCountries");
const getCountriesById = require("../controllers/getCountriesById");
const getCountriesByName = require("../controllers/getCountriesByName");
const newActivities = require("../controllers/newActivities");

const router = Router();

router.get("/countries", getAllCountries);
router.get("/countries/:id", getCountriesById);
router.get("/countriesname", getCountriesByName);
router.post("/activities", newActivities);
router.get("/activities", getActivities);

module.exports = router;
