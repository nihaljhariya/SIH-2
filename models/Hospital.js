const mongoose = require("mongoose");
    const Schema = mongoose.Schema;

    const HospitalSchema = new mongoose.Schema({
          name: {
            type: String,
            required: true
          },
          location: {
            type: String, 
            required: true
          },
          contactNumber: {
            type: Number,
            required: true
          },
          availableBeds: {
            type: Number,
            default: 0
          },
          totalBeds: {
            type: Number,
            required: true
          }
          
    });

    const Hospital = mongoose.model("Hospital" , HospitalSchema);
    module.exports = Hospital;
