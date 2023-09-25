import { FormEvent, useState } from "react"
import { form } from "../types";
import { useMutation } from "@apollo/client";
import { CREATE_POST } from "../mutation";

function PostCreate() {

  const [form, setForm] = useState<form>({
    title: 'test',
    mark: 'test',
    date: '2023-09-06',
    location: 'test',
    length: '22',
    price: '4000',
    image: 'https://image.shutterstock.com/image-photo/wind-turbines-farm-beautiful-orange-260nw-1449359885.jpg',
    description: 'test',
  });

  const [actionCreatePost, {error}] = useMutation(CREATE_POST);

  console.log(form);
  
  const createPost = async (event: FormEvent) : Promise<void> => {
    event.preventDefault();
    try{
      const reponse = await actionCreatePost({
        variables: {...form}
      });

      console.log(reponse, 'reponse');
      
    }catch(error) {
      console.error(error);
    }
  }

  return (
    <div>
      <div className="container items-center px-5 py-12 lg:px-20">
        <form className="flex flex-col w-full p-10 px-8 pt-6 mx-auto my-6 mb-4 transition duration-500 ease-in-out transform bg-white border rounded-lg lg:w-1/2 ">

          <div className="relative pt-4">
            <label htmlFor="title" className="text-base leading-7 text-blueGray-500">Title</label>
            <input type="text" id="title" name="title" placeholder="title" className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
              value={form.title}
              onChange={(event): void => { setForm({ ...form, title: event.target.value }) }}
              required
            />
          </div>
          <div className="relative pt-4">
            <label htmlFor="mark" className="text-base leading-7 text-blueGray-500">mark</label>
            <input
              type="text" id="mark" name="mark" placeholder="mark" className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
              value={form.mark}
              onChange={(event): void => { setForm({ ...form, mark: event.target.value }) }}
              required
            />
          </div>
          <div className="relative pt-4">
            <label htmlFor="date" className="text-base leading-7 text-blueGray-500">Date</label>
            <input type="date" id="date" name="date" placeholder="date" className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
              value={form.date}
              onChange={(event): void => { setForm({ ...form, date: event.target.value }) }}
              required
            />
          </div>
          <div className="relative pt-4">
            <label htmlFor="location" className="text-base leading-7 text-blueGray-500">location</label>
            <input
              type="text" id="location" name="location" placeholder="location" className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
              value={form.location}
              onChange={(event): void => { setForm({ ...form, location: event.target.value }) }}
              required
            />
          </div>
          <div className="relative pt-4">
            <label htmlFor="length" className="text-base leading-7 text-blueGray-500">length</label>
            <input type="number" id="length" name="color" placeholder="length" className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
              value={form.length}
              onChange={(event): void => { setForm({ ...form, length: event.target.value }) }}
              required
            />
          </div>
          <div className="relative pt-4">
            <label htmlFor="price" className="text-base leading-7 text-blueGray-500">price</label>
            <input type="text" id="price" name="price" placeholder="price" className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
              value={form.price}
              onChange={(event): void => { setForm({ ...form, price: event.target.value }) }}
              required
            />
          </div>
          <div className="relative pt-4">
            <label htmlFor="image" className="text-base leading-7 text-blueGray-500">image url</label>
            <input type="text" id="image" name="image" placeholder="image url" className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
              value={form.image}
              onChange={(event): void => { setForm({ ...form, image: event.target.value }) }}
              required
            />
          </div>
          <div className="flex flex-wrap mt-4 mb-6 -mx-3">
            <div className="w-full px-3">
              <label className="text-base leading-7 text-blueGray-500" htmlFor="description">discription </label>
              <textarea
              value={form.description}
              onChange={(event) => setForm({...form, description: event.target.value})}
              className="w-full h-32 px-4 py-2 mt-2 text-base text-blueGray-500 transition duration-500 ease-in-out transform bg-white border rounded-lg focus:border-blue-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 apearance-none autoexpand" id="description" name="description" placeholder="description" required></textarea>
            </div>
          </div>
          <div className="flex items-center w-full pt-4 mb-4">
            <button onClick={createPost} className="w-full py-3 text-base text-white transition duration-500 ease-in-out transform bg-blue-600 border-blue-600 rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-800 "> Create Post </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PostCreate