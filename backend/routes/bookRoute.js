const express = require("express")
const router = express.Router()

const {createBook, getBook, getAllBooks, updateBook, deleteBook} = require("../controllers/bookCtrl")


router.post("/", createBook)
router.get("/:id", getBook)
router.get("/", getAllBooks)
router.put("/:id", updateBook)
router.delete("/:id", deleteBook)


module.exports = router