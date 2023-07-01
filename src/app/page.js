import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import style from '@/app/page.module.css';

export default function Home() {
  return (
    <>
      <h1 className={style.title}>Welcome!</h1>
      <p className={style.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vel
        laudantium quae recusandae cum architecto, assumenda dignissimos
        cupiditate sunt similique nulla iste voluptatum eligendi dolor! Eius
        ipsum architecto rem eaque!. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Hic animi veniam dolor iure, quaerat eos, eaque earum
        nam mollitia aliquid omnis asperiores exercitationem sunt, quas
        voluptatibus cumque esse tempora voluptatum!
      </p>
      <Link href="list" className={style.btn}>See People list</Link>
    </>
  );
}
