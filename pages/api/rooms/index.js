// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import nc from 'next-connect'
import dbConnect from '../../../config/dbConnect';
import { allRooms } from '../../../controllers/roomControllers'
import { newRooms } from '../../../controllers/roomControllers';


const handler = nc();
dbConnect();
handler.get(allRooms);
handler.post(newRooms);

export default handler;