import React from 'react';
import image1 from '../../../images/image1.jpg'
import image2 from '../../../images/image2.jpg'
import image3 from '../../../images/image3.jpg'

const Header = () => {
    return (
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div style={{ backgroundImage: `url(${image1})`, height: '94vh', width: "100vw", backgroundSize: 'cover', backgroundAttachment: 'fixed' }} class="carousel-item active">

                </div>
                <div style={{ backgroundImage: `url(${image2})`, height: '94vh', width: "100vw", backgroundSize: 'cover', backgroundAttachment: 'fixed' }} class="carousel-item" >

                </div>
                <div class="carousel-item" style={{ backgroundImage: `url(${image3})`, height: '94vh', width: "100vw", backgroundSize: 'cover', backgroundAttachment: 'fixed' }} >

                </div>
            </div>
            {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button> */}
        </div>
    );
};

export default Header;