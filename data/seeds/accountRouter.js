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


router.put("/:id", (req, res) => {
    const { id } = req.params;
    const change = req.body
  
    db("accounts")
      .where({ id })
      .update(change)
      .then(count => {
        res.status(200).json(count)
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({ error: "failed to update account" })
      })
  })

  router.delete("/:id", (req, res) => {
    const { id } = req.params
    db("accounts")
      .where({ id })
      .del()
      .then(count => {
        res.status(200).json(count)
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({ error: "failed to update account" })
      })
  })
  
module.exports = router;