const express = require('express')
const Book = require('../model/book_model.js')

const getbook =async (req,res) => {
    try {
        const book = await Book.find();
        res.json(book)
    } catch (error) {
        res.json(error)
    }
}

module.exports = {
    getbook
}