import React from 'react';
import Rating from 'react-rating';

const Review = ({ review }) => {

    const { image, name, description, rating, date } = review;

    return (
        <article className="mt-3 mb-4">

            <aside className="d-flex gap-2 align-items-center">

                <span>
                    <img className="rounded-circle" src={image} alt="userimage" width="60" />
                </span>

                <span>
                    <h6 className="mb-0">{name}</h6>
                    <small style={{ color: "#545F73", fontWeight: '500' }}>{date}</small>
                </span>
            </aside>

            <Rating initialRating={rating}
                style={{ fontSize: '15px', color: "#DF5726", marginTop: '10px' }}
                emptySymbol="far fa-star icon-color" fullSymbol="fas fa-star icon-color" readonly />

            <p style={{ fontWeight: "500", width: "100%", marginTop: '6px', color: "#40526A", textAlign: 'justify' }}>{description}</p>
            <hr />

        </article>
    );
};

export default Review;