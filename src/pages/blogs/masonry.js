import PropTypes from 'prop-types';
import HeaderOne from '../../components/HeaderComps';
import Breadcrumb from '../../components/Breadcrumb';
import BlogMasonry from '../../components/Blogs/BlogMasonry';
import FooterComps from '../../components/FooterComps';
import { getAllItems } from '../../lib/ItemsUtil';
import HeaderFour from '../../components/HeaderComps/index-4';

function BlogMasonryPage({ headerItems, blogs, footerItems }) {
    return (
        <>
            <HeaderFour headerItems={headerItems} headerContainer="container" />
            <Breadcrumb
                breadcrumbContainer="container"
                title="Blog Masonry"
                item="Home"
                itemPath="/"
                activeItem="Blog Masonry"
            />
            <BlogMasonry blogs={blogs} />
            <FooterComps
                footerContainer="container"
                footerItems={footerItems}
            />
        </>
    );
}

export async function getStaticProps() {
    const headerItems = await getAllItems('header');
    const blogs = await getAllItems('blogs');
    const footerItems = await getAllItems('footer');

    return {
        props: {
            headerItems,
            blogs,
            footerItems,
        },
    };
}

BlogMasonryPage.propTypes = {
    headerItems: PropTypes.instanceOf(Array).isRequired,
    blogs: PropTypes.instanceOf(Array).isRequired,
    footerItems: PropTypes.instanceOf(Array).isRequired,
};

export default BlogMasonryPage;
