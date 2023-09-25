import { useQuery } from '@apollo/client';
import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { GET_POST } from './query';

function PostModule() {

    const { id } = useParams<{ id: string }>();

    const { loading, error, data } = useQuery(GET_POST, {
        variables: { postId: id },
        fetchPolicy: 'cache-and-network'
    });



    if (loading) return <p className='p-24'>Loading...</p>;
    if (error) return <p className='p-24'>Error: {error.message}</p>;


    return (
        <div className='p-6 bg-gray-50 flex flex-col gap-4'>
            <div className='p-3'>
                <Link to='/' type="button" className="bg-gray-800 text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-red-700 hover:text-white px-3">
                    <div className="flex flex-row align-middle">
                        <svg className="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                        </svg>
                        <p className="ml-2">Back</p>
                    </div>
                </Link>
            </div>
            <div className='flex flex-wrap bg-white rounded-lg shadow-lg'>
                <div className='flex basis-2/3 '>
                    <a href="#" className='w-full p-24 pt-0'>
                        <img className="p-4 rounded-t-lg w-full" src={data.post.images.image_url} alt="product image" />
                    </a>
                </div>
                <div>
                    <div className="flex flex-col">
                        <div className='flex  gap-3 basis-1/3 py-20 px-6'>
                            <div className='flex flex-col gap-4'>
                                <h3 className='text-lg'>Title:</h3>
                                <h3 className='text-lg'>Description:</h3>
                                <h3 className='text-lg'>Date:</h3>
                                <h3 className='text-lg'>Length:</h3>
                                <h3 className='text-lg'>Mark:</h3>
                                <h3 className='text-lg'>Phone:</h3>
                                <h3 className='text-lg'>Email:</h3>
                                <h3 className='text-lg'>Price:</h3>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <span className='ml-10 text-stone-600 text-lg'>{data.post.title}</span>
                                <span className='ml-10 text-stone-600 text-lg'>{data.post.description}</span>
                                <span className='ml-10 text-stone-600 text-lg'>{data.post.date}</span>
                                <span className='ml-10 text-stone-600 text-lg'>{data.post.length}</span>
                                <span className='ml-10 text-stone-600 text-lg'>{data.post.mark}</span>
                                <span className='ml-10 text-stone-600 text-lg'>{data.post.users.phone}</span>
                                <span className='ml-10 text-stone-600 text-lg'>{data.post.users.email}</span>
                                <span className='ml-10 text-stone-600 text-lg'>${data.post.price}</span>
                            </div>
                        </div>
                    </div>
                    <div className='px-6'>
                        <button type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900 w-full">Buy It Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostModule