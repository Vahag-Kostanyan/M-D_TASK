import { useQuery } from '@apollo/client';
import React from 'react'
import { useParams } from 'react-router-dom';
import { GET_POST } from './query';

function PostModule() {


    const { id } = useParams<{ id: string }>();

    const { loading, error, data } = useQuery(GET_POST, {
        variables: { postId: 5 }
    });



    if (loading) return <p className='p-24'>Loading...</p>;
    if (error) return <p className='p-24'>Error: {error.message}</p>;


    console.log(data);

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <section className="bg-gray-50 dark:bg-gray-900 w-screen">
                <div className="flex pt-16 pb-1.5 flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className='w-full  bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
                        <div className='w-full p-6 space-y-4 md:space-y-6 sm:p-8 flex gap-30 items-center min-h-screen'>
                            <div className='flex justify-center items-center'>
                                <a href="#" className='flex items-center justify-center'>
                                    <img className="p-4 rounded-t-lg" src={data.post.images.image_url} alt="product image" />
                                </a>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PostModule