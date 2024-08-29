const express = require("express");
const app = express();
const mongoose = require("mongoose");
//require Hospital.js file 
const Hospital = require("./models/Hospital.js");
//require Department.js file 
const Department = require("./models/Department.js");
//require Patient.js file 
const Patient = require("./models/Patient.js");

const path=require("path");

const MONGO_URL = "mongodb://127.0.0.1:27017/SarvaSwastha";


main()
.then(()=>{
    console.log("Connected With DataBase");
})
.catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
}

app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname, "views"));


app.get("/" , (req , res)=>{
    res.send("This is Root");
});

//Home Page 
app.get("/swasth" , async(req,res)=>{
    res.render("./homepage/index.ejs");
});

//New(form) Appointment 
app.get("/swasth/new" , async(req,res)=>{
    res.render("./homepage/newAppointment.ejs");
});
// create appointment
app.post("/swasth" , async(req,res)=>{
    let patients = req.body;
    console.log(patients);
})


// Router for Hospital Schema
// app.get("/testHospital" , async( req, res)=>{
//     let sampleHospital = new Hospital({

//         name:"LataMangeskar" ,
//         location:"Nagpur" ,
//         contactNumber:22121212145 ,
//         availableBeds:95 , 
//         totalBeds:100,


//     });
    

//     await sampleHospital.save();
//     console.log("Sample was saved");
//     res.send("Succesfull Tested");

// });

// Router for Dept Schema
app.get("/testDepartment" , async( req, res)=>{
    let sampleDepartment = new Department({

        name:"DermetoLogist" ,
        description:"They are the doctors for the skin treatment" ,
        doctors:6, 
        contactNumber:22121212145 ,

    });
    await sampleDepartment.save();
    console.log("Sample was saved");
    res.send("Succesfull Tested");

});
// Router for Pateint Schema
app.get("/testPatient" , async( req, res)=>{
    let samplePatient = new Patient({

        name:"Nihal",
        email:"nihal@gmail.com",
        age:19,
        gender:"Male",
        contactNumber:63236632,
    });
    await samplePatient.save();
    console.log("Sample was saved");
    res.send("Succesfull Tested");

});


app.listen(8080 , ()=>{
    console.log("Server is Listing to 8080 Port");
})