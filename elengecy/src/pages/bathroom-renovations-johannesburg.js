import PropTypes from 'prop-types';
import { getAllItems } from '../lib/ItemsUtil';
import HomeCollection from '../components/HomeCollection';
import HeaderFour from '../components/HeaderComps/index-4';
import HeroFour from '../components/Hero/index-4';
import NewsletterCompsThree from '../components/NewsletterComps/index-3';
import NewArrivalTwo from '../components/NewArrival/index-2';
import FooterCompsThree from '../components/FooterComps/index-3';
import FeaturedService from '../components/HomePage/FeaturedService';

function HomeCarouselPage({
    footerItems,
    heroCollectionItems,
    // newArrivalTwo,
    products,
    headerItems,
    featuredService,
}) {
    return (
        <>
            <HomeCollection>
                <HeaderFour headerItems={headerItems} />
                <HeroFour
                    heroCollectionItems={heroCollectionItems}
                    btnText="Shop Now"
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
            <FooterCompsThree footerItems={footerItems} />
        </>
    );
}

export async function getStaticProps() {
    const headerItems = await getAllItems('header');
    const heroCollectionItems = await getAllItems('hero-collection-bathroom-renovations');
    // const newArrivalTwo = await getAllItems('home-collection');
    const products = await getAllItems('products');
    const footerItems = await getAllItems('footer');
    const featuredService = await getAllItems(
        'bathroom-renovations-johannesburg'
    );

    return {
        props: {
            headerItems,
            heroCollectionItems,
            // newArrivalTwo,
            products,
            footerItems,
            featuredService,
        },
    };
}

HomeCarouselPage.propTypes = {
    headerItems: PropTypes.instanceOf(Object).isRequired,
    heroCollectionItems: PropTypes.instanceOf(Object).isRequired,
    featuredService: PropTypes.instanceOf(Object).isRequired,
    products: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default HomeCarouselPage;
