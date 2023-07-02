"use client";

import { use } from "react";
import style from "@/app/people.module.css";
import Link from "next/link";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const people = await res.json();
  return { people };
};

const List = async () => {
  //   const { people } = use(getData());
  const { people } = await getData();
  return (
    <>
      <h1>People List</h1>
      {people.map((person) => {
        return (
          <Link key={person.id} className={style.single} href={`list/${person.id.toString()}`}>
            {person.name}
          </Link>
        );
      })}
    </>
  );
};

export default List;
