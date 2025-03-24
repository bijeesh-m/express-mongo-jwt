const Book = require("../models/bookModel");

module.exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json({ message: "Books fetched successfully!", books });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Books fetched failed!", error: error.message });
    }
};

module.exports.bookById = async (req, res) => {
    try {
        const bookId = req.params.bookId;
        const book = await Book.findById(bookId);
        if (!book) {
            return res.status(404).json({ message: "Book not found!" });
        }
        res.status(200).json({ message: "Book fetched successfully!", book });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Books fetched failed!", error: error.message });
    }
};

module.exports.createBook = async (req, res) => {
    try {
        const bookDetails = req.body;
        // const book = await Book.create(bookDetails);
        const newBook = new Book(bookDetails);
        newBook.author = "asldkjflkjasdlf";
        await newBook.save();
        res.status(200).json({ message: "Book created successfully!", newBook });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Books fetched failed!", error: error.message });
    }
};

// module.exports.updateBook = async (req, res) => {
//     try {
//         // const bookId = req.params.bookId;
//         const { bookId } = req.params;

//         const { Title, author, price, published } = req.body;

//         const book = await Book.findByIdAndUpdate(bookId, {
//             $set: { title: Title && Title, author: author && author },
//         });

//         // book.title = Title ? Title : book.title;
//         // book.author = author ? author : book.author;
//         // book.price = price ? price : book.price;
//         // book.published = published ? published : book.published;

//         // const updatedBook = await book.save();

//         res.status(200).json({ message: "Book updated successfully!", book });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ message: "Books update failed!", error: error.message });
//     }
// };
module.exports.updateBook = async (req, res) => {
    try {
        // const bookId = req.params.bookId;
        const { bookId } = req.params;

        const { Title, author, price, published } = req.body;

        const book = await Book.findOne({ _id: bookId });

        book.title = Title ? Title : book.title;
        book.author = author ? author : book.author;
        book.price = price ? price : book.price;
        book.published = published ? published : book.published;

        const updatedBook = await book.save();

        res.status(200).json({ message: "Book updated successfully!", updatedBook });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Books update failed!", error: error.message });
    }
};

module.exports.deleteBook = async (req, res) => {
    try {
        const { bookId } = req.params;
        const book = await Book.findByIdAndDelete(bookId);

        if (!book) {
            return res.status(404).json({ message: "Books delete failed! no book found with this id" });
        }

        res.status(200).json({ message: "book deleted successfully!", book });
    } catch (error) {
        res.status(500).json({ message: "Books delete failed!", error: error.message });
    }
};
