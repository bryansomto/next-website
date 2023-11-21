import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { Articles } from "./utils/Article";

export default function UserInterfaces() {
  return (
    <section className="bg-surfaceBG text-white space-y-12 font-body text-sm">
      <Navbar />
      {Articles.map((i) => (
        <div className="space-y-8" key={i.UI}>
          {i.UI.map((x) => (
            <div key={x.imagePath}>
              <h2 className="px-4">{x.title}</h2>
              <div className={"w-screen h-360 flex bg-" + x.bg}></div>
              <p className="text-xs font-head font-thin p-2 text-justify">
                {x.details}
              </p>
            </div>
          ))}
        </div>
      ))}
      <Footer />
    </section>
  );
}
