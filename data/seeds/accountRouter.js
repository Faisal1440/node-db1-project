const express = require("express")
const db = require('../dbConfig');

const router = express.Router();


router.get("/", (req, res) => {
  db("accounts")
  .then(acc => {
    res.status(200).json({data: acc})
  })
  .catch(err => {
    console.log(err)
      res.status(500).json({ error: "failed to get list of accounts" })
  })
})

module.exports = router;