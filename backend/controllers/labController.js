const Lab = require("../models/Lab");


module.exports.create = async(req,res) => {
    try {
        const {
            id, name, desc, laborant_id, picture
        } = req.body;
        const lab = await Lab.create({
            id, name,
            desc, laborant_id,
            picture
        });
        res.json({
            success: true,
            lab: lab
        });

    } catch (error) {
        console.log(error);
    }
}
module.exports.deleteOne = async(req,res) => {
    try {
        const { _id } = req.body;
        const lab = await Lab.findByIdAndDelete(_id);
        res.json({
            success: true,
            lab: lab,
        })
    } catch (error) {
        console.log(error);
    }
}