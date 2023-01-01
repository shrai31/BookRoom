const Room = require('../models/room');
const mongoose = require('mongoose');

const rooms = require('../data/rooms.json');

mongoose.connect(
  'mongodb+srv://shrai31:Him1998@node.ed7esqr.mongodb.net/MYHOTEL?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
  }
);

const seedRooms = async () => {
  try {
    await Room.deleteMany();
    console.log('Rooms are deleted');

    await Room.insertMany(rooms);
    console.log('All Rooms are added.');

    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedRooms();
