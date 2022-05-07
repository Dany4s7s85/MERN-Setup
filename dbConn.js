const mongoose = require("mongoose");

const DB = "mongodb://localhost:27017/college";
mongoose
  .connect(DB)
  .then(() => {
    console.log("connection is successfull");
  })
  .catch((err) => {
    console.log(err);
  });

//create schema for mongodb
const collegeSchema = new mongoose.Schema({
  apid: {
    type: String,
  },
  name: {
    type: String,
  },
  gender: {
    type: String,
  },
  status: {
    type: String,
  },
  birth: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  course: {
    type: String,
  },
  sname: {
    type: String,
  },
  saddress: {
    type: String,
  },
  marks: {
    type: String,
  },
  appstatus: {
    type: String,
  },
});

const database = mongoose.model("students", collegeSchema);

module.exports = database;
