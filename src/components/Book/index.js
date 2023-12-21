import PropTypes from 'prop-types';
import * as IoIcon from 'react-icons/io5';
import Link from 'next/link';

function Book({ BookItems }) {
    const singleField = `flex w-full`;
    const inputField = `border border-[#e8e8e8] focus-visible:outline-0 placeholder:text-[#7b7975] py-[10px] px-[20px] w-full h-[50px]`;
    const textareaField = `border border-[#e8e8e8] focus-visible:outline-0 placeholder:text-[#7b7975] p-[15px] w-full h-[150px]`;
    const secondaryButton =
        'flex bg-secondary text-white leading-[38px] text-[15px] h-[40px] px-[32px]';
    return (
        <>
            
            <div className="contact pt-[65px] xl:pb-[120px] lg:pb-[100px] md:pb-[80px] pb-[50px]">
                <div className="container">
                    <div className="grid grid-cols-12 max-lm:gap-y-[30px]">
                        <div className="md:col-span-7 col-span-12 max-lm:order-2">
                            <div className="contact-form-wrap">
                                <h2 className="text-[24px] mb-[10px]">
                                    {BookItems[0]?.formTitle}
                                </h2>
                                <p className="mb-[30px]">
                                    {BookItems[0]?.formDesc}
                                </p>
                                <form>
                                    <div className="group-field flex mb-[20px]">
                                        <div
                                            className={`${singleField} mr-[20px]`}
                                        >
                                            <input
                                                className={`${inputField}`}
                                                type="text"
                                                placeholder="Name *"
                                                required
                                            />
                                        </div>
                                        <div className={`${singleField}`}>
                                            <input
                                                className={`${inputField}`}
                                                type="email"
                                                placeholder="Email *"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className={`${singleField}  mb-[20px]`}
                                    >
                                        <input
                                            className={`${inputField}`}
                                            type="text"
                                            placeholder="Subject *"
                                            required
                                        />
                                    </div>
                                    <div className={`${singleField} mb-[30px]`}>
                                        <textarea
                                            className={`${textareaField}`}
                                            type="text"
                                            placeholder="Please describe what you need."
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className={`${secondaryButton}`}
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="md:col-span-5 col-span-12 lg:pl-[120px] md:pl-[30px] max-lm:order-1">
                            <div className="contact-info">
                                <h2 className="text-[24px] mb-[10px]">
                                    {BookItems[0]?.infoTitle}
                                </h2>
                                <p>{BookItems[0]?.infoDesc}</p>
                                <p
                                    className="mt-[25px]"
                                    dangerouslySetInnerHTML={{
                                        __html: BookItems[0]?.contactAddress,
                                    }}
                                />
                                <div className="social-link flex items-center pt-[60px]">
                                    <h2 className="text-[16px] font-normal lg:pr-[65px] pr-[45px]">
                                        {BookItems[0]?.socialTitle}
                                    </h2>
                                    <ul className="flex">
                                        {BookItems[0]?.socialList?.map(
                                            (items) => {
                                                const Social =
                                                    IoIcon[items.socialIcon];
                                                return (
                                                    <li
                                                        className="mr-[15px] last:mr-0"
                                                        key={items.id}
                                                    >
                                                        <Link
                                                            href={items?.path}
                                                            className="transition-all hover:text-primary"
                                                        >
                                                            <Social />
                                                        </Link>
                                                    </li>
                                                );
                                            }
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </>
    );
}

Book.propTypes = {
    contactItems: PropTypes.instanceOf(Object).isRequired,
};

export default Book;