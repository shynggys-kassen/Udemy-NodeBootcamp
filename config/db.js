const mongoose = require("mongoose");

const connectDB = async () => {
  // mongoose returns promise
  const connection = await mongoose.connect(process.env.MANGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });

  console.log(
    `MangoDB Connected: ${connection.connection.host}`.cyan.underline.bold
  );
};

module.exports = connectDB;
