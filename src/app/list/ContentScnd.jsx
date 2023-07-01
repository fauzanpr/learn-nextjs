"use client";

import { use } from "react";
import style from '@/app/people.module.css';

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const people = await res.json();
  return { people };
};

const List = () => {
  const { people } = use(getData());
  return (
    <>
      <h1>People List</h1>
      {people.map((person) => {
        return (
          <div className={style.single} key={person.id}>
            <p>{person.name}</p>
          </div>
        );
      })}
    </>
  );
};

export default List;
