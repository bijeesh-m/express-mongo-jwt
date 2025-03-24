const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


module.exports.register = async (req, res) => {
    try {
        const userDetails = req.body;
        const isExist = await User.findOne({ email: userDetails.email });

        if (isExist) {
            return res.status(409).json({ message: "User already exists!" });
        }

        const newUser = await User.create(userDetails);
        res.status(201).json({ message: "Registration success!", newUser });
    } catch (error) {
        res.status(500).json({ message: "Regstration failed!", error: error.message });
    }
};

module.exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const auth = await bcrypt.compare(password, user.password);

        if (auth) {
            const token = jwt.sign({ id: user._id, role: user.role }, process.env.jwt_secret, { expiresIn: "1hr" });

            res.cookie("authToken", token, { maxAge: 60 * 60 * 1000 });

            return res.status(200).json({ message: "Login success", user });
        }
        res.status(401).json({ message: "Invalid password" });
    } catch (error) {
        res.status(500).json({ message: "Regstration failed!", error: error.message });
    }
};
