import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { clearErrors } from '../../redux/actions/roomActions';
import RoomFeatures from './RoomFeatures';

const RoomDetails = () => {
  const { room, error } = useSelector((state) => state.roomDetails);
  const dispatch = useDispatch();
  useEffect(() => {
    toast.success('Success!');
    dispatch(clearErrors());
  }, []);
  return (
    <>
      <Head>
        <title>{room && room.room && room.room.name}</title>
      </Head>
      <div className="container container-fluid">
        <h2 className="mt-5">{room && room.room && room.room.name && room.room.name}</h2>
        <p>{room && room.room && room.room.address && room.room.address}</p>

        <div className="ratings mt-auto mb-3">
          <div className="rating-outer">
            <div
              className="rating-inner"
              style={{ width: `${(room && room.room && room.room.rating && room.room.rating / 5) * 100}%` }}
            ></div>
          </div>
          <span id="no_of_reviews">({room && room.room && room.room.noOfReviews && room.room.noOfReviews} Reviews)</span>
        </div>
        <Carousel hover="pause">
          {room &&
            room.room &&
            room.room.images &&
            room.room.images.map((image, index) => (
              <Carousel.Item key={image.public_id}>
                <div style={{ width: '100%', height: '440px' }}>
                  <Image
                    className="d-block m-auto"
                    src={image.url}
                    alt={room.name}
                    layout="fill"
                  />
                </div>
              </Carousel.Item>
            ))}
        </Carousel>

        <div className="row my-5">
          <div className="col-12 col-md-6 col-lg-8">
            <h3>Description</h3>
            <p>
              {room && room.room && room.room.description && room.room.description}
            </p>

            <RoomFeatures room={room} />
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="booking-card shadow-lg p-4">
              <p className="price-per-night">
                <b>${room && room.room && room.room.pricePerNight && room.room.pricePerNight}</b> / night
              </p>

              <button className="btn btn-block py-3 booking-btn">Pay</button>
            </div>
          </div>
        </div>

        <div className="reviews w-75">
          <h3>Reviews:</h3>
          <hr />
          <div className="review-card my-3">
            <div className="rating-outer">
              <div className="rating-inner"></div>
            </div>
            <p className="review_user">by John</p>
            <p className="review_comment">Good Quality</p>

            <hr />
          </div>

          <div className="review-card my-3">
            <div className="rating-outer">
              <div className="rating-inner"></div>
            </div>
            <p className="review_user">by John</p>
            <p className="review_comment">Good Quality</p>

            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomDetails;
