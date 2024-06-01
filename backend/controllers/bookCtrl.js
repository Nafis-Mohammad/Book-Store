const Book = require("../models/bookModel")



const createBook = async (req, res) => {
    try {
        const book = await Book.create({...req.body})

        return res.status(201).json({msg:"Successfully created book", book})
    } catch(error) {
        return res.status(500).json({msg: "Failed to create book", error})
    }
}


const updateBook = async(req, res) => {
    let {body: {title, author, description, genre}, params:{id:bookId}} = req

    const book = await Book.findByIdAndUpdate({_id:bookId}, req.body, {new:true, runValidators:true})

    if(!book) {
        return res.status().json(`No book with id ${bookId}`)
    }

    return res.status(200).json({book})
}


const getBook = async (req, res) => {
    const {params:{id:bookId}} = req
    const book = await Book.findOne({_id:bookId})
    if(!book) {
        return res.status().json(`No book with id ${bookId}`)
    }

    return await res.status(200).json(book)
    
}


const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find().sort({title: 1})
        return res.status(200).json(books)
    } catch(error) {
        return res.status(500).json({msg: "Failed to get all books", error})
    }
}


const deleteBook = async (req, res) => {
    const {params:{id:bookId}} = req
    const book = await Book.findByIdAndDelete({_id:bookId})

    if(!book) {
        return res.status().json(`No book with id ${bookId}`)
    }

    return res.status(200).json("book successfully deleted")
}


module.exports = {
    createBook,
    getBook,
    getAllBooks,
    updateBook,
    deleteBook,
}