const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    student_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    lab_id: {
        type: Schema.Types.ObjectId,
        ref: 'Lab'
    },
    lesson_id: {
        type: Schema.Types.ObjectId,
        ref: 'Lesson'
    },
    value: Number,
})

const Collection = mongoose.model('Collection', schema);
module.exports = Collection;