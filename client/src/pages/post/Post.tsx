import { useQuery } from '@apollo/client';
import React from 'react'
import { useParams } from 'react-router-dom';
import { GET_POST } from './query';


interface Post {
  id: string;
  title: string;
  price: number;
  mark: string;
}

interface PostData {
  post: Post;
}

interface PostVariables {
  postId: number;
}


function Post( ) {

    const { id } = useParams<{ id: string }>();
        
    const { loading, error, data } = useQuery<PostData, PostVariables>(GET_POST, {
      variables: { postId: 5 }
    });

    

    if (loading) return <p className='p-24'>Loading...</p>;
    if (error) return <p className='p-24'>Error: {error.message}</p>;
    

    console.log(data);

  return (
    <div>
        <div>Post</div> 
    </div>
  )
}

export default Post