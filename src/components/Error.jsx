export default function Error() {
  return (
    <div className="flex gap-10 justify-center">
      <div className="">
        <h1 className="text-7xl">404</h1>
      </div>
      <div className=" border-r-black border"></div>
      <div className="flex flex-col gap-5">
        <h2 className="text-2xl">Page Not Found</h2>
        <p className="w-[392px]">
          We're sorry, This page is unknown or does not exist the page you are
          looking for.
        </p>
        <button className="text-white bg-indigo-500 px-4 py-3 rounded w-fit">
          Back To home
        </button>
      </div>
    </div>
  );
}
