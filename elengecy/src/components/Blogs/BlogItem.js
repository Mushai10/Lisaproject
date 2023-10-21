import PropTypes from 'prop-types';
import Link from 'next/link';
import { IoAddSharp } from 'react-icons/io5';

function BlogItem({ blog }) {
    const formattedDate = new Date(blog?.date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    return (
        <div className="blog-item overflow-hidden group">
            <div className="blog-img relative">
                <Link href={`/blogs/${blog?.slug}`} className="blog-img block">
                    <img
                        className="object-cover object-center w-full"
                        // src="/images/services-pictures/cabinet-renovations.jpeg"
                        src={blog?.blogImg}
                        alt={blog?.altImage}
                        width={374}
                        height={243}
                    />
                </Link>
                <Link
                    href={`/blogs/${blog?.slug}`}
                    className="flex items-center font-normal leading-7 transition ease-in-out duration-500 bg-white absolute right-0 transform translate-x-full bottom-0 group-hover:translate-x-0 py-[5px] px-[14px]"
                >
                    Read more
                    <IoAddSharp className="ml-[5px]" />
                </Link>
            </div>
            
               
            
            
        </div>
    );
}

BlogItem.propTypes = {
    blog: PropTypes.instanceOf(Object).isRequired,
};

export default BlogItem;
