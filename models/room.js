const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter room name'],
    trim: true,
    maxLength: [100, 'Room name cannot exceed 100 characters'],
  },
  pricePerNight: {
    type: Number,
    required: [true, 'Please enter room price'],
    maxLength: [4, 'Room name cannot exceed 4 characters'],
    default: 0.0,
  },
  description: {
    type: String,
    required: [true, 'Please enter room description'],
  },
  address: {
    type: String,
    required: [true, 'Please enter address description'],
  },
  guestCapacity: {
    type: Number,
    required: [true, 'Please enter guest Capacity description'],
  },
  numOfBeds: {
    type: Number,
    required: [true, 'Please enter number of Beds description'],
  },
  internet: {
    type: Boolean,
    required: false,
  },
  breakfast: {
    type: Boolean,
    required: false,
  },
  airConditioned: {
    type: Boolean,
    required: false,
  },
  petsAllowed: {
    type: Boolean,
    required: false,
  },
  roomCleaning: {
    type: Boolean,
    required: false,
  },
  ratings: {
    type: Number,
    required: 0,
  },
  noOfReviews: {
    type: Number,
    required: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, 'Please enter room category'],
    enum: {
      values: ['King', 'Single', 'Twins'],
      message: 'Please select correct category for room',
    },
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: false, // user save in db
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// in next js we check first it's exists (model) than new create new one just use that otherwise create
module.exports = mongoose.models.Room || mongoose.model('Room', roomSchema);
