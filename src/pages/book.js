import PropTypes from 'prop-types';
import HeaderOne from '../components/HeaderComps';
import Breadcrumb from '../components/Breadcrumb';
import Book from '../components/Book';
import FooterComps from '../components/FooterComps';
import { getAllItems } from '../lib/ItemsUtil';
import TransparentHeader from '../components/HeaderComps/TransparentHeader';

function BookPage({ headerItems, BookItems, footerItems }) {
    return (
        <>
            <TransparentHeader headerItems={headerItems} headerContainer="container" />
            <Breadcrumb
                breadcrumbContainer="container"
                title="Contact"
                item="Home"
                itemPath="/"
                activeItem="Contact"
            />
            <Book BookItems={BookItems} />
            <FooterComps
                footerContainer="container"
                footerItems={footerItems}
            />
        </>
    );
}

export async function getStaticProps() {
    const headerItems = await getAllItems('header');
    const BookItems = await getAllItems('book');
    const footerItems = await getAllItems('footer');

    return {
        props: {
            headerItems,
            BookItems,
            footerItems,
        },
    };
}

BookPage.propTypes = {
    headerItems: PropTypes.instanceOf(Array).isRequired,
    contactItems: PropTypes.instanceOf(Array).isRequired,
    footerItems: PropTypes.instanceOf(Array).isRequired,
};

export default BookPage;
