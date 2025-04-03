module.exports.upload = async (req, res) => {
    try {
        console.log(req.file, req.body);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "File upload failed!" });
    }
};
