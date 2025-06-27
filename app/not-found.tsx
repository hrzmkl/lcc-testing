// @ts-ignore
import Link from "next/link";
// @ts-ignore
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found (404)",
};

const NotFoundPage = () => {
  return (
    <div className="w-full
 h-screen bg-slate-900 flex-center">
      <div className="w-[90%] lg:w-[80%] h-[80%] flex flex-col justify-center items-center gap-10">
        <p className="font-bold text-6xl text-slate-100 text-center">
          Error 404
        </p>
        <p className="text-[48px] text-slate-100 text-center">
          Error, The page you are looking for does not exist
        </p>
        <Link
          href="/"
          className="w-[50%] lg:w-[20%] py-3 rounded-2xl flex-center text-slate-900 bg-lime-300 hover:bg-lime-400"
        >
          Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
