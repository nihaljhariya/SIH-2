const mongoose = require("mongoose");
    const Schema = mongoose.Schema;

    const  DepartmentSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            unique: true
          },
          description: {
            type: String,
            default: ''
          },
          doctors: {
            type: mongoose.Schema.Types.ObjectId,
           type: Number,
            default:5
          },
          contactNumber: {
            type: Number,
            
          }
        });
   

        const Department=mongoose.model("Department",DepartmentSchema);
        module.exports=Department;
