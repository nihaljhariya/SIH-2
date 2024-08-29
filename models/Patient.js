const mongoose = require("mongoose");
    const Schema = mongoose.Schema;

    const  PatientSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
          },
          email: {
            type: String,
            required: true
          },
          age: {
            type: Number,
            required: true
          },
          gender: {
            type: String,
            enum: ['Male', 'Female', 'Other'],
            required: true
          },
          contactNumber: {
            type: Number,
            required: true
          }
        });
   

        const Patient=mongoose.model("Patient",PatientSchema);
        module.exports=Patient;