import React from 'react';

const Testimonial = ({ review }) => {

    const { name, description, profession } = review;

    return (

        <article
            className='p-9 bg-white '
            style={{ width: 400, zIndex: 999 }}
        >

            <p className='text-justify'>"{description.slice(0, 220)}"</p>

            <h6 className='mt-3'>
                <span className='italic'>- {name}</span>,
                <span className='text-orange'> {profession}</span>
            </h6>

        </article>
    );
};

export default Testimonial;