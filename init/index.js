const mongoose = require("mongoose");
const initdata = require("./Hosdata.js");
const Hospital = require ("../models/Hospital.js");

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

const initDB = async ()=>{
    await Hospital.deleteMany({});
    await Hospital.insertMany(initdata.data);
    console.log("Data was Added");
};
initDB();
    
