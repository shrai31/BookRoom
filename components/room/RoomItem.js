import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function RoomItem({ room }) {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
      <div className="card p-2">
        <Image
          className="card-img-top mx-auto"
          src={"https://a0.muscache.com/im/pictures/a8f6a489-d236-4d2d-a57b-a95d928970af.jpg?im_w=960"}
          height={170}
          width={320}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">
            <Link href={`/room/${room._id}`}>
              <div>{room.name}</div>
            </Link>
          </h5>

          <div className="ratings mt-auto mb-3">
            <p className="card-text">
              <b>${room.pricePerNight}</b> / night
            </p>

            <div className="rating-outer">
              <div
                style={{ width: `${(room.rating / 5) * 100}%` }}
                className="rating-inner"
              ></div>
            </div>
            <span id="no_of_reviews">({room.numOfReviews} Reviews)</span>
          </div>

          <button className="btn btn-block view-btn">
            <Link href={`/room/${room._id}`}>View Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default RoomItem;
