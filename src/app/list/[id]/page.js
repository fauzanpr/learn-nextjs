import style from "@/app/people.module.css";
import Link from "next/link";

export const generateStaticParams = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data.map((person) => {
    return { id: person.id.toString() };
  });
};

const getData = async (params) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const data = await res.json();

  return data;
};

const Detail = async ({ params }) => {
  const people = await getData(params);
  return (
    <>
      <h1>Detail page</h1>
      <Link className={style.backButton} href="/list">
        Back to List of People
      </Link>
      <div className={style.details}>
        <h2>{people.name}</h2>
        <p>Username : {people.username}</p>
        <p>Email : {people.email}</p>
        <p>Address : {people.address.street}</p>
        <p>Phone Number : {people.phone}</p>
        <p>Website : {people.website}</p>
      </div>
    </>
  );
};

export default Detail;
