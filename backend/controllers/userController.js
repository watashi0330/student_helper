const User = require('../models/User');

module.exports.create = async(req, res) => {
    try {
        const { 
            sisi_id, password, first_name, last_name,
            role, email
        } = req.body;
        const user = await User.create({
            sisi_id,
            password,
            first_name,
            last_name,
            role,
            email
        });
        res.json({
            success: true,
            user: user,
        });
    } catch (error) {
        console.log(error);
    }
}
module.exports.deleteOne = async(req, res) => {
    try {
        const { _id } = req.body;
        const user = await User.findByIdAndDelete(_id);
        res.json({
            success: true,
            user: user,
        });
    } catch (error) {
        console.log(error);
    }
}