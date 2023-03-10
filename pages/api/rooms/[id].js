import nc from 'next-connect'
import dbConnect from '../../../config/dbConnect'

import { getSingleRoom, updateRoom, deleteRoom } from '../../../controllers/roomControllers';

import onError from '../../../middlewares/errors'
// import { isAuthenticatedUser, authorizeRoles } from '../../../middlewares/auth'

const handler = nc( { onError });  //in express we use app.use

dbConnect();

handler.get(getSingleRoom)

handler.put(updateRoom)

handler.delete(deleteRoom)


// handler
//     .use(isAuthenticatedUser, authorizeRoles('admin'))
//     .put(updateRoom)

// handler
//     .use(isAuthenticatedUser, authorizeRoles('admin'))
//     .delete(deleteRoom)

export default handler;