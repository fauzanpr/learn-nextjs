import Link from "next/link";

const NotFound = () => {
  return (
    <div className="notFound">
      <h1>Oops....</h1>
      <h2>That page cannot be found.</h2>
      <Link href="/">Go to homepage</Link>
    </div>
  );
};

export default NotFound;
