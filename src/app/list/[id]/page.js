export const generateStaticParams = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data.map((person) => {
    return { id: person.id.toString() };
  });
};

const getData = async (params) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const data = await res.json();

    return data;
};

const Detail = async ({ params }) => {
  const people = await getData(params);
  return (
    <>
      <h1>Detail page</h1>
      <p>TItle {people.name}</p>
    </>
  );
};

export default Detail;
