import Room from '../models/room';

import ErrorHandler from '../utils/errorHandler';
import catchAsyncErrors from '../middlewares/carchAsyncErrors';
import APIFeatures from '../utils/apiFeatures';

// Create all rooms   =>   /api/rooms
const allRooms = catchAsyncErrors(async (req, res) => {

  const resPerPage = 4;

  const roomsCount = await Room.countDocuments();

  const apiFeatures = new APIFeatures(Room.find(), req.query)
      .search()
      .filter()
      let rooms = await apiFeatures.query;

      let filteredRoomsCount = rooms.length;
      
       apiFeatures.pagination(resPerPage)
      // console.log({rooms},"apiFeatures.pagination(resPerPage)",apiFeatures.pagination(resPerPage))
      rooms = await apiFeatures.query;

      
  res.status(200).json({
      success: true,
      roomsCount,
      resPerPage,
      filteredRoomsCount,
      rooms
  })

})

// Create new room   =>   /api/rooms
const newRooms = catchAsyncErrors(async (req, res) => {
  const room = await Room.create(req.body);
  res.status(200).json({
    success: true,
    room,
  });
});

// Get room details   =>   /api/rooms/:id
const getSingleRoom = catchAsyncErrors(async (req, res, next) => {
  const room = await Room.findById(req.query.id); //in nextjs we don;t have params we have query

  if (!room) {
    return next(new ErrorHandler('Room not found with this ID', 404));
  }

  res.status(200).json({
    success: true,
    room,
  });
});

// Update room details   =>   /api/rooms/:id
const updateRoom = catchAsyncErrors(async (req, res) => {
  let room = await Room.findById(req.query.id); // use let because in room we resign value in line 91

  if (!room) {
    return next(new ErrorHandler('Room not found with this ID', 404));
  }

  // if (req.body.images) {

  //     // Delete images associated with the room
  //     for (let i = 0; i < room.images.length; i++) {
  //         await cloudinary.v2.uploader.destroy(room.images[i].public_id)
  //     }

  //     let imagesLinks = []
  //     const images = req.body.images;

  //     for (let i = 0; i < images.length; i++) {

  //         const result = await cloudinary.v2.uploader.upload(images[i], {
  //             folder: 'bookit/rooms',
  //         });

  //         imagesLinks.push({
  //             public_id: result.public_id,
  //             url: result.secure_url
  //         })

  //     }

  //     req.body.images = imagesLinks;

  // }

  room = await Room.findByIdAndUpdate(req.query.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    room,
  });
});

// Delete room   =>   /api/rooms/:id
const deleteRoom = catchAsyncErrors(async (req, res) => {
  const room = await Room.findById(req.query.id);

  if (!room) {
    return next(new ErrorHandler('Room not found with this ID', 404));
  }

  // Delete images associated with the room
  // for (let i = 0; i < room.images.length; i++) {
  //     await cloudinary.v2.uploader.destroy(room.images[i].public_id)
  // }

  await room.remove();

  res.status(200).json({
    success: true,
    message: 'Room is deleted.',
  });
});

export { allRooms, newRooms, getSingleRoom, updateRoom, deleteRoom };
