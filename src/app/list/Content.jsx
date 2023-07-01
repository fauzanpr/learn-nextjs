"use client";

import { useEffect, useState } from "react";
import style from '@/app/people.module.css';

const List = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setPeople(data);
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <h1>People List</h1>
      {loading && <p>Loading...</p>}
      {people &&
        people.map((person) => {
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
