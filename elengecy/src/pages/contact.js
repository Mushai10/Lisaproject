import PropTypes from 'prop-types';
import HeaderOne from '../components/HeaderComps';
import Breadcrumb from '../components/Breadcrumb';
import ContactUs from '../components/Contact';
import FooterComps from '../components/FooterComps';
import { getAllItems } from '../lib/ItemsUtil';
import HeaderFour from '../components/HeaderComps/index-4';

function ContactPage({ headerItems, contactItems, footerItems }) {
    return (
        <>
            <HeaderFour headerItems={headerItems} headerContainer="container" />
            <Breadcrumb
                breadcrumbContainer="container"
                title="Contact"
                item="Home"
                itemPath="/"
                activeItem="Contact"
            />
            <ContactUs contactItems={contactItems} />
            <FooterComps
                footerContainer="container"
                footerItems={footerItems}
            />
        </>
    );
}

export async function getStaticProps() {
    const headerItems = await getAllItems('header');
    const contactItems = await getAllItems('contact');
    const footerItems = await getAllItems('footer');

    return {
        props: {
            headerItems,
            contactItems,
            footerItems,
        },
    };
}

ContactPage.propTypes = {
    headerItems: PropTypes.instanceOf(Array).isRequired,
    contactItems: PropTypes.instanceOf(Array).isRequired,
    footerItems: PropTypes.instanceOf(Array).isRequired,
};

export default ContactPage;
