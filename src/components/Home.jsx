import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="containerHome text-white font-normal text-lg ">
        <p className="mb-5 text-xl ">New Release</p>
        <p className="text-white font-bold text-6xl">
          Metallics
          <br />
          <span className="font-normal italic font-serif text">Shine </span> On
        </p>
        <p className="text-white my-10">
          Get to know our new eyeshadow
          <br />
          palettes with a glossy finish, smooth
          <br />
          lightweight feel and 10 hour stay-on
        </p>
        <Link to="/shopall">
          <button className="text-white font-semibold border-2 border-white px-8 py-3 mt-5">
            Shop
          </button>
        </Link>
      </div>
    </>
  );
}
export default Home;
