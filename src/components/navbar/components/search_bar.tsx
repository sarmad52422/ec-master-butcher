import { CLientServices } from "@/services/user";
import { useEffect, useState } from "react";

interface Category {
  id: string;
  categoryName: string;
}

const SearchBar = () => {
  const [categories, setCategories] = useState<Category[]>([]); // Specify the type of categories
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await CLientServices.getAllCategories();
        setCategories(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-0 sm:grid-cols-1 md:grid-cols-1">
        <div className=" w-full">
          <input
            type="text"
            placeholder="Search entire store here..."
            className="input input-bordered w-full focus:outline-none  rounded-r-none border-r-0 rounded-l-md"
          />
        </div>
        <div>
          <select className="hidden lg:flex select select-bordered focus:outline-none w-full max-w-xs rounded-l-none rounded-r-md">
            <option>Category</option>
            {categories.map((category) => (
              <option
                key={category.id}
                value={category.id}
                className="text-body dark:text-bodydark"
              >
                {category?.categoryName?.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
