const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    time_id: {
        type: Schema.Types.ObjectId,
        ref: 'Time',
    },
    student_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    status: {
        type: String,
        enum: [
            'arrived', 'absent', 'late'
        ],
        required: true,
    }
}, {timestamps: true});

const Attend = mongoose.model('Attend', schema);
module.exports = Attend;