"use client";
import Spacer from "@/ui/Spacer";
import axios from "axios";
import React, { useEffect, useState } from "react";

const FilmsPage = () => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    const fetchFilms = async () => {
      const res = await axios.get("http://localhost:4000/films");
      const fetchedFilms = res.data;
      setFilms(fetchedFilms);
    };
    fetchFilms();
  }, []);
  useEffect(() => {
    console.log(films);
  }, [films]);
  return (
    <div className="w-full">
      <ul className="flex gap-[20px] justify-end mr-[60px]">
        <li>All</li>
        <li>Wedding Day</li>
        <li>Pre-wedding</li>
        <li>Baby</li>
      </ul>
      <Spacer y={40} />
      <section className="flex justify-center">리스트가 보여지는 부분</section>
    </div>
  );
};

export default FilmsPage;
