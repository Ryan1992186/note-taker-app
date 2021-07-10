const router = require("express").Router()
const fs = require("fs")
const path = require('path')

router.get("/notes", async(req, res) =>{
    //need code for get route
    const data = await fs.promises.readFile(path.join(__dirname,"../db/db.json"), "utf8")
    const notes = JSON.parse(data)
    console.log(notes)
    res.json(notes)
})

router.post("/notes", (req, res) => {
    // need code for post route
})

router.delete("/notes/:id", (req, res) => {
    //need code for delete route
})

module.exports = router