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

router.get("/:id", (req, res) => {
    db("accounts")
    .where({ id: req.params.id})
    .first()
    .then(acc => {
      res.status(200).json(acc)
    })
    .catch(err => {
      console.log(err)
        res.status(500).json({ error: "failed to get list of accounts" })
    })
  })  
  
  
  router.post("/", (req, res) => {
    const replace = req.body
    db("accounts").insert(replace, "id")
    .then(ids => {
      res.status(201).json(ids)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: "failed to create new account" })
  
    })
  })
module.exports = router;