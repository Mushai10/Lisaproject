import PropTypes from 'prop-types';
import { getAllItems } from '../lib/ItemsUtil';
import HomeCollection from '../components/HomeCollection';
import HeaderFour from '../components/HeaderComps/index-4';
import HeroFour from '../components/Hero/index-4';
import NewsletterCompsThree from '../components/NewsletterComps/index-3';
import NewArrivalTwo from '../components/NewArrival/index-2';
import FooterComps from '../components/FooterComps';
import FeaturedService from '../components/HomePage/FeaturedService';
import TransparentHeader from '../components/HeaderComps/TransparentHeader';

function HomeCarouselPage({
    footerItems,
    heroCollectionItems,
    // newArrivalTwo,
    headerItems,
    featuredService,
}) {
    return (
        <>
            <HomeCollection>
                <TransparentHeader headerItems={headerItems} />
                <HeroFour
                    heroCollectionItems={heroCollectionItems}
                    btnText="Get in Touch"
                />
                {/* <NewsletterCompsThree
                    newsletterCName="newsletter-area lg:pt-[95px] md:pt-[75px] pt-[45px]"
                    sectionTitle="Sign Up To Get 50% Discount"
                    sectionDesc=" Whether you want to modernize an outdated kitchen, enhance its functionality, or create a more inviting and efficient cooking area, here are the key steps and considerations for a successful kitchen renovation."
                    containerCName="container"
                /> */}
                {/* <NewArrivalTwo
                    newArrivalTwo={newArrivalTwo}
                    products={products}
                    // excerpt="Planning and Design: Work with a professional kitchen designer or architect to create a detailed plan for your new kitchen. Consider factors like layout, flow, storage, lighting, and the overall style you want to achieve. The design phase may include creating blueprints or 3D renderings."
                    ecxcerpt="excerpt"
                    btnText="Shop Now"
                /> */}
                <FeaturedService featuredService={featuredService} />
            </HomeCollection>
            <FooterComps
                footerContainer="container"
                footerItems={footerItems}
            />
        </>
    );
}

export async function getStaticProps() {
    const headerItems = await getAllItems('header');
    const heroCollectionItems = await getAllItems('hero-collection-home-renovations-johannesburg');
    // const newArrivalTwo = await getAllItems('home-collection');
    const footerItems = await getAllItems('footer');
    const featuredService = await getAllItems('home-renovations-johannesburg');

    return {
        props: {
            headerItems,
            heroCollectionItems,
            // newArrivalTwo,
            footerItems,
            featuredService,
        },
    };
}

HomeCarouselPage.propTypes = {
    headerItems: PropTypes.instanceOf(Object).isRequired,
    heroCollectionItems: PropTypes.instanceOf(Object).isRequired,
    featuredService: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default HomeCarouselPage;
