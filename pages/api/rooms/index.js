// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import nc from 'next-connect';
import dbConnect from '../../../config/dbConnect';
import { allRooms, newRooms } from '../../../controllers/roomControllers';
import onError from '../../../middlewares/errors';

const handler = nc({ onError });
dbConnect();
handler.get(allRooms);
handler.post(newRooms);

export default handler;
