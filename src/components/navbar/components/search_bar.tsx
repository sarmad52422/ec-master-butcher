// const SearchBar = () => {
//   return (
//     <div className="flex items-center">
//       <div className="relative w-full max-w-md">
//         <input
//           type="text"
//           placeholder="Search"
//           className="input input-bordered rounded-md py-2 px-3 pr-8 focus:outline-none relative" // Adjust padding as needed
//         />
//         <select
//           className="hidden lg:flex absolute top-0 right-0 w-full rounded-md border border-gray-300 focus:outline-none py-2 px-3 z-10" // Adjust styles as needed
//         >
//           <option>Normal</option>
//           <option>Normal Apple</option>
//           <option>Normal Orange</option>
//           <option>Normal Tomato</option>
//         </select>
//       </div>
//     </div>
//   );
// };
// export default SearchBar;

const SearchBar = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-0 sm:grid-cols-1 md:grid-cols-1">
        <div className=" w-full">
          <input
            type="text"
            placeholder="Search entire store here..."
            className="input input-bordered w-full focus:outline-none  rounded-r-none border-r-0 rounded-l-md" // Adjust the rounded value as needed
          />
        </div>
        <div>
          <select className="hidden lg:flex select select-bordered focus:outline-none w-full max-w-xs rounded-l-none rounded-r-md  ">
            <option>Category</option>
            <option>Normal Apple</option>
            <option>Normal Orange</option>
            <option>Normal Tomato</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
