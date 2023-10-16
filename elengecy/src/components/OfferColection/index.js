import PropTypes from 'prop-types';
import Link from 'next/link';
import { IoArrowForwardOutline } from 'react-icons/io5';

function OfferColection({ offerColection }) {
    const secondaryButton =
        'inline-flex items-center bg-secondary text-white leading-[38px] text-[15px] h-[38px] px-[32px] transition-all hover:bg-[#222222]';

    
    

    

    return (
        <div className="offer-colection xl:pt-[100px] lg:pt-[50px] md:pt-[40px] pt-[25px]">
            <div className="container-fluid px-[15px]">
                <div className="bg-offer-colection bg-no-repeat  bg-center flex items-center h-[635px]">
                    <div className="container">
                        <div className="grid grid-cols-12">
                            <div className="md:col-span-7 col-span-12">
                                <div className="content">
                                    <h2
                                        className="offer-colection-title relative pb-[10px] mb-[30px] after:absolute after:left-0 after:bottom-0 after:bg-primary after:h-[4px] after:w-[70px]"
                                        dangerouslySetInnerHTML={{
                                            __html: offerColection[0].title,
                                        }}
                                    />
                                    <p
                                        className="mb-[50px]"
                                        dangerouslySetInnerHTML={{
                                            __html: offerColection[0].desc,
                                        }}
                                    />
                                    
                                    <div className="mt-[60px]">
                                        <Link
                                            href="/"
                                            className={secondaryButton}
                                        >
                                            Shop Now
                                            <IoArrowForwardOutline className="text-white ml-[5px]" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

OfferColection.propTypes = {
    offerColection: PropTypes.instanceOf(Array).isRequired,
};

export default OfferColection;
