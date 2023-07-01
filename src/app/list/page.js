import Content from "./Content";

// export const getStaticProps = async () => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await res.json();
//     console.log(data);
  
//     return {
//       props: { people: data },
//     };
//   };

export const metadata = {
  title: "People | List",
};

const list = ({ people }) => {
  return (
    <>
      <Content people={people} />
    </>
  );
};

export default list;
