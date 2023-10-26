import PropTypes from 'prop-types';
import { getAllItems, getFeaturedItems } from '../lib/ItemsUtil';
import TransparentHeader from '../components/HeaderComps/TransparentHeader';
import HeroOne from '../components/Hero';


import OfferColection from '../components/OfferColection';
import LatestBlog from '../components/HomePage/LatestBlog';
import NewsletterComps from '../components/NewsletterComps';
import FooterComps from '../components/FooterComps';
import React from 'react';
import Featuredservice from '../components/HomePage/FeaturedService';
import BlogDefault from '../components/Blogs/BlogDefault';
import HeaderFour from '../components/HeaderComps/index-4';



function HomePage({
    headerItems,
    heroDefaultItems,
    featuredProduct,
    featuredService,
    offerColection,
    blogs,
    footerItems,
}) {

    return (
        <>
            <TransparentHeader headerItems={headerItems} />
            {/* <HeaderFour headerItems={headerItems} /> */}
            
            <HeroOne heroDefaultItems={heroDefaultItems} />
            {/* <FeaturedProduct featuredProduct={featuredProduct} /> */}
            <Featuredservice featuredService={featuredService} />
            <BlogDefault blogs={blogs} />
            {/* <OfferColection offerColection={offerColection} /> */}
           
            {/* <LatestBlog blogs={blogs} sectionTitle="Our Blog" />
            <NewsletterComps sectionTitle="Our Newsletter" /> */}
            <FooterComps
                footerContainer="container"
                footerItems={footerItems}
            />
        </>
    );
}

export async function getStaticProps() {
    const headerItems = await getAllItems('header');
    const heroDefaultItems = await getAllItems('hero-default');
    const featuredProduct = await getAllItems('featured-product');
    const featuredService = await getAllItems('home-services');
    const faq = await getAllItems('faq');
    
   // const products = await getAllItems('products');
    // console.log("The Products: ", products);
    // const products = (await commerce.products.list()).data
    //const productFilter = await getAllItems('product-filter');
    //const BestSellingProduct = getFeaturedItems(products);
    const offerColection = await getAllItems('offer-colection');
    const blogs = await getAllItems('blogs');
    const LatestBlog = getFeaturedItems(blogs);
    const footerItems = await getAllItems('footer');

    

    return {
        props: {
            headerItems,
            heroDefaultItems,
            featuredProduct,
            featuredService,
           
            blogs ,
            offerColection,
        
            footerItems,
        },
    };
}

HomePage.propTypes = {
    headerItems: PropTypes.instanceOf(Object).isRequired,
    heroDefaultItems: PropTypes.instanceOf(Object).isRequired,
    featuredProduct: PropTypes.instanceOf(Object).isRequired,
    featuredService: PropTypes.instanceOf(Object).isRequired,
   
    
    offerColection: PropTypes.instanceOf(Object).isRequired,
    blogs: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default HomePage;
