import PropTypes from 'prop-types';
import Link from 'next/link';
import { IoArrowForwardOutline } from 'react-icons/io5';

function FeaturedService({ featuredService }) {
    const outlineButton =
        'inline-flex items-center border border-secondary text-secondary transition-all hover:bg-secondary hover:text-white leading-[38px] text-[15px] h-[38px] px-[35px]';
    const outlineButton1 =
        'inline-flex items-center border border-secondary text-secondary transition-all hover:bg-secondary hover:text-white leading-[38px] text-[15px] h-[38px] px-[35px]';

    return (
        <>
            <div
                className="featured-product xl:pt-[120px] lg:pt-[100px] md:pt-[80px] pt-[50px] relative before:content-[attr(data-count)] before:absolute before:text-[#F5F4F7] before:font-semibold before:xl:text-[70px] before:text-[40px] before:sm:bottom-[-15px] before:bottom-[-60px] before:right-0 before:z-[1]"
                data-count="Elengecy"
            >
                <div className="container">
                    <div className="grid md:grid-cols-2 grid-cols-12 lm:gap-x-[30px] md:gap-y-0 gap-y-[30px] group">
                        <div className="md:col-span-1 col-span-12">
                            <Link
                                href={featuredService[0]?.path}
                                className="featured-product-img block transition-all duration-500 group-hover:scale-[1.05]"
                            >
                                <img
                                    src={featuredService[0]?.image}
                                    alt={featuredService[0]?.altImage}
                                />
                            </Link>
                        </div>
                        <div className="md:col-span-1 col-span-12 self-center">
                            <div className="featured-product-content">
                                <span className="text-[14px] leading-5 font-medium uppercase block mb-[5px] text-[#999999]">
                                    {featuredService[0]?.subTitle}
                                </span>
                                <h2 className="relative after:bg-primary after:absolute after:left-0 after:bottom-0 after:h-[4px] after:w-[70px] pb-[10px] mb-[30px]">
                                    <Link
                                        href={featuredService[0]?.path}
                                        className="transition-all hover:text-primary"
                                    >
                                        {featuredService[0]?.title}
                                    </Link>
                                </h2>
                                <p>{featuredService[0]?.excerpt}</p>
                                <div className="mt-[60px]">
                                    <Link
                                        href={featuredService[0]?.path}
                                        className={outlineButton}
                                    >
                                        {featuredService[0]?.buttonText}
                                        <IoArrowForwardOutline className="ml-[5px]" />
                                    </Link>
                                </div>
                                <div className="mt-[60px]">
                                    <Link
                                        href={featuredService[0]?.path}
                                        className={outlineButton1}
                                    >
                                        {featuredService[0]?.buttonText1}
                                        <IoArrowForwardOutline className="ml-[5px]" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="featured-product xl:pt-[135px] lg:pt-[115px] md:pt-[95px] pt-[65px] relative before:content-[attr(data-count)] before:absolute before:text-[#F5F4F7] before:font-semibold before:xxl:text-[150px]  before:xl:text-[80px] before:text-[40px] before:bottom-[-75px] before:left-0 before:z-[1]"
                data-count=""
            >
                <div className="container">
                    <div className="grid md:grid-cols-2 grid-cols-12 lm:gap-x-[30px] md:gap-y-0 gap-y-[30px] group">
                        <div className="md:col-span-1 col-span-12 order-2">
                            <Link
                                href={featuredService[1]?.path}
                                className="featured-product-img block transition-all duration-500 group-hover:scale-[1.05]"
                            >
                                <img
                                    src={featuredService[1]?.image}
                                    alt={featuredService[1]?.altImage}
                                />
                            </Link>
                        </div>
                        <div className="md:col-span-1 col-span-12 self-center order-1">
                            <div className="featured-product-content">
                                <span className="text-[14px] leading-5 font-medium uppercase block mb-[5px] text-[#999999]">
                                    {featuredService[1]?.subTitle}
                                </span>
                                <h2 className="relative after:bg-primary after:absolute after:left-0 after:bottom-0 after:h-[4px] after:w-[70px] pb-[10px] mb-[30px]">
                                    <Link
                                        href={featuredService[1]?.path}
                                        className="transition-all hover:text-primary"
                                    >
                                        {featuredService[1]?.title}
                                    </Link>
                                </h2>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: featuredService[1]?.excerpt,
                                    }}
                                />
                                <div className="mt-[60px]">
                                    <Link
                                        href={featuredService[1]?.path}
                                        className={outlineButton}
                                    >
                                        {featuredService[1]?.buttonText}
                                        <IoArrowForwardOutline className="ml-[5px]" />
                                    </Link>
                                </div>
                                <div className="mt-[60px]">
                                    <Link
                                        href={featuredService[1]?.path}
                                        className={outlineButton1}
                                    >
                                        {featuredService[1]?.buttonText1}
                                        <IoArrowForwardOutline className="ml-[5px]" />
                                    </Link>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* TODO: Call to action button */}
            <div className="my-10 bg-primary featured-product xl:pt-[120px] lg:pt-[100px] md:pt-[80px] pt-[50px] xl:pb-[110px] lg:pb-[90px] pb-[60px] relative before:content-[attr(data-count)] before:absolute before:text-[#F5F4F7] before:font-semibold before:xxl:text-[150px]  before:xl:text-[80px] before:text-[40px] before:bottom-[35px] before:right-0 before:z-[1] items-center">
                <h2 className="text-center">
                Let's Talk About Your Project
                </h2>
                <div className='grid md:flex items-center justify-center gap-8'>
                    <div className="mt-[60px] grid items-center justify-center">
                        <Link
                            href={"tel:+27 (11) 082-9899"}
                            className={outlineButton}
                        >
                            Contact Us
                            <IoArrowForwardOutline className="ml-[5px]" />
                        </Link>
                    </div>
                    <div className="mt-[60px] grid items-center justify-center">
                        <Link
                            href="tel:+27 (11) 082-9899"
                            className={outlineButton}
                        >
                            Book a Consultation
                            <IoArrowForwardOutline className="ml-[5px]" />
                        </Link>
                    </div>
                </div>
            </div>
            <div
                className="featured-product xl:pt-[120px] lg:pt-[100px] md:pt-[80px] pt-[50px] xl:pb-[110px] lg:pb-[90px] pb-[60px] relative before:content-[attr(data-count)] before:absolute before:text-[#F5F4F7] before:font-semibold before:xxl:text-[150px]  before:xl:text-[80px] before:text-[40px] before:bottom-[35px] before:right-0 before:z-[1]"
                data-count="Elengecy"
            >
                <div className="container">
                    <div className="grid md:grid-cols-2 grid-cols-12 lm:gap-x-[30px] md:gap-y-0 gap-y-[30px] group">
                        <div className="md:col-span-1 col-span-12">
                            <Link
                                href={featuredService[2]?.path}
                                className="featured-product-img block transition-all duration-500 group-hover:scale-[1.05]"
                            >
                                <img
                                    src={featuredService[2]?.image}
                                    alt={featuredService[2]?.altImage}
                                />
                            </Link>
                        </div>
                        <div className="md:col-span-1 col-span-12 self-center">
                            <div className="featured-product-content">
                                <span className="text-[14px] leading-5 font-medium uppercase block mb-[5px] text-[#999999]">
                                    {featuredService[2]?.subTitle}
                                </span>
                                <h2 className="relative after:bg-primary after:absolute after:left-0 after:bottom-0 after:h-[4px] after:w-[70px] pb-[10px] mb-[30px]">
                                    <Link
                                        href={featuredService[2]?.path}
                                        className="transition-all hover:text-primary"
                                    >
                                        {featuredService[2]?.title}
                                    </Link>
                                </h2>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: featuredService[2]?.excerpt,
                                    }}
                                />
                                <div className="mt-[60px]">
                                    <Link
                                        href={featuredService[2]?.path}
                                        className={outlineButton}
                                    >
                                        {featuredService[2]?.buttonText}
                                        <IoArrowForwardOutline className="ml-[5px]" />
                                    </Link>
                                </div>
                                <div className="mt-[60px]">
                                    <Link
                                        href={featuredService[2]?.path}
                                        className={outlineButton1}
                                    >
                                        {featuredService[2]?.buttonText1}
                                        <IoArrowForwardOutline className="ml-[5px]" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="featured-product xl:pt-[135px] lg:pt-[115px] md:pt-[95px] pt-[65px] relative before:content-[attr(data-count)] before:absolute before:text-[#F5F4F7] before:font-semibold before:xxl:text-[150px]  before:xl:text-[80px] before:text-[40px] before:bottom-[-75px] before:left-0 before:z-[1]"
                    data-count=""
                >
                    <div className="container">
                        <div className="grid md:grid-cols-2 grid-cols-12 lm:gap-x-[30px] md:gap-y-0 gap-y-[30px] group">
                            <div className="md:col-span-1 col-span-12 order-2">
                                <Link
                                    href={featuredService[3]?.path}
                                    className="featured-product-img block transition-all duration-500 group-hover:scale-[1.05]"
                                >
                                    <img
                                        src={featuredService[3]?.image}
                                        alt={featuredService[3]?.altImage}
                                    />
                                </Link>
                            </div>
                            <div className="md:col-span-1 col-span-12 self-center order-1">
                                <div className="featured-product-content">
                                    <span className="text-[14px] leading-5 font-medium uppercase block mb-[5px] text-[#999999]">
                                        {featuredService[3]?.subTitle}
                                    </span>
                                    <h2 className="relative after:bg-primary after:absolute after:left-0 after:bottom-0 after:h-[4px] after:w-[70px] pb-[10px] mb-[30px]">
                                        <Link
                                            href={featuredService[3]?.path}
                                            className="transition-all hover:text-primary"
                                        >
                                            {featuredService[3]?.title}
                                        </Link>
                                    </h2>
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: featuredService[3]?.excerpt,
                                        }}
                                    />
                                    <div className="mt-[60px]">
                                        <Link
                                            href={featuredService[3]?.path}
                                            className={outlineButton}
                                        >
                                            {featuredService[3]?.buttonText}
                                            <IoArrowForwardOutline className="ml-[5px]" />
                                        </Link>
                                    </div>


                                </div>
                               
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div
                className="featured-product xl:pt-[120px] lg:pt-[100px] md:pt-[80px] pt-[50px] xl:pb-[110px] lg:pb-[90px] pb-[60px] relative before:content-[attr(data-count)] before:absolute before:text-[#F5F4F7] before:font-semibold before:xxl:text-[150px]  before:xl:text-[80px] before:text-[40px] before:bottom-[35px] before:right-0 before:z-[1]"
                data-count="Elengecy"
            >
                <div className="container">
                    <div className="grid md:grid-cols-2 grid-cols-12 lm:gap-x-[30px] md:gap-y-0 gap-y-[30px] group">
                        <div className="md:col-span-1 col-span-12">
                            <Link
                                href={featuredService[4]?.path}
                                className="featured-product-img block transition-all duration-500 group-hover:scale-[1.05]"
                            >
                                <img
                                    src={featuredService[4]?.image}
                                    alt={featuredService[4]?.altImage}
                                />
                            </Link>
                        </div>
                        <div className="md:col-span-1 col-span-12 self-center">
                            <div className="featured-product-content">
                                <span className="text-[14px] leading-5 font-medium uppercase block mb-[5px] text-[#999999]">
                                    {featuredService[4]?.subTitle}
                                </span>
                                <h2 className="relative after:bg-primary after:absolute after:left-0 after:bottom-0 after:h-[4px] after:w-[70px] pb-[10px] mb-[30px]">
                                    <Link
                                        href={featuredService[4]?.path}
                                        className="transition-all hover:text-primary"
                                    >
                                        {featuredService[4]?.title}
                                    </Link>
                                </h2>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: featuredService[4]?.excerpt,
                                    }}
                                />
                                <div className="mt-[60px]">
                                    <Link
                                        href={featuredService[4]?.path}
                                        className={outlineButton}
                                    >
                                        {featuredService[4]?.buttonText}
                                        <IoArrowForwardOutline className="ml-[5px]" />
                                    </Link>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
}

FeaturedService.propTypes = {
    featuredService: PropTypes.instanceOf(Object).isRequired,
};

export default FeaturedService;
