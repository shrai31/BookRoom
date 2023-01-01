const mongoose = require('mongoose');

mongoose.set("strictQuery", false);

const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  mongoose.connect(process.env.DB_LOCAL_URI, {
    useNewUrlParser: true,
  })
// .then(()=>console.log('Connect to Db Server'));
};

export default dbConnect;
