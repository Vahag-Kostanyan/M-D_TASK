import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_POSTS_LIST } from '../Query/query';
import MainCard from './components/MainCard';
import { useNavigate } from 'react-router-dom';


function Home() {

  const navigate = useNavigate();

  const { loading, error, data } = useQuery(GET_POSTS_LIST);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  
  function details(id: number): void{
    navigate(`/boat/${id}`);
  }
  
  return (
    <h1 className="text-3xl font-bold underline ">
      <div className='flex gap-10 flex-wrap justify-center'>
        {data.posts.map((item: object) => {
          return <MainCard item={item} details={details} />
        })}
      </div>
    </h1>
  )
}

export default Home