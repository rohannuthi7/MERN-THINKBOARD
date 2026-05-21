import mongoose from 'mongoose';

// Define the Note schema
const noteScheuma = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, {
    timestamps: true // createdAt and updatedAt fields will be automatically added
});

// Create the Note model using the schema
const Note = mongoose.model('Note', noteScheuma);
export default Note;