import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Cards from "./Cards";
import axios from "axios"

function Course() {

  const [book,setBook] = useState([]);

  useEffect(()=>{
    
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data)
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getBook();
  }, [])

  return (
    <div className="max-w-screen-2xl dark:bg-slate-900 dark:text-white container mx-auto md:px-20 px-4">
      <div className="text-center items-center justify-center mt-28">
        <h1 className="text-3xl md:text-4xl ">
          We are delighted to have you{" "}
          <span className="text-pink-500"> Here :)</span>
        </h1>
        <p className="mt-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A doloremque
          optio laboriosam porro dolor reprehenderit. Necessitatibus deserunt in
          eveniet id recusandae laudantium, debitis dicta officiis praesentium
          magni ab exercitationem doloribus officia minima aspernatur ullam
          beatae dignissimos voluptate voluptatibus natus. Optio alias modi vel!
          Distinctio, vero ducimus. Dignissimos deserunt sunt laborum.
        </p>

        <Link to={"/"}>
        <button className="mt-6 px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-700 ">
          Back
        </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4">
        {
            book.map((item) => (
                <Cards key={item.id} item={item} />
            ))
        }
      </div>
    </div>
  );
}

export default Course;
