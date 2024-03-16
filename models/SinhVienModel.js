const mongoose = require( 'mongoose' );
const Sinhvienschema = new mongoose.Schema( {
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
} );
const sinhvien = mongoose.model( 'student', Sinhvienschema );
module.exports = sinhvien;