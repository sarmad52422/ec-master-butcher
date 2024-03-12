import Link from "next/link";

const CustomMenu = () => {
  return (
    <div>
      <ul className="menu menu-horizontal px-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <details>
            <summary>Meat</summary>
            <ul className="p-2 z-10">
              <li>
                <Link
                  href={{
                    pathname: "/products",
                    query: { category: "Meat" },
                  }}
                >
                  Meat
                </Link>
              </li>
              <li>
                <Link
                  href={{
                    pathname: "/products",
                    query: { category: "Lamb" },
                  }}
                >
                  Lamb
                </Link>
              </li>
              <li>
                <Link
                  href={{
                    pathname: "/products",
                    query: { category: "Mutton" },
                  }}
                >
                  Mutton
                </Link>
              </li>
              <li>
                <Link
                  href={{
                    pathname: "/products",
                    query: { category: "Beef" },
                  }}
                >
                  Beef
                </Link>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <Link href={{ pathname: "/products", query: { category: "Fish" } }}>
            Fish
          </Link>
        </li>

        <li>
          <Link
            href={{
              pathname: "/products",
              query: { category: "Chicken" },
            }}
          >
            Chicken
          </Link>
        </li>
        <li>
          <Link
            href={{
              pathname: "/products",
              query: { category: "Marinated" },
            }}
          >
            Marinated
          </Link>
        </li>
        <li>
          <Link
            href={{
              pathname: "/products",
              query: { category: "Frozen Food" },
            }}
          >
            Frozen Food
          </Link>
        </li>
        <li>
          <Link
            href={{
              pathname: "/products",
              query: { category: "Bulk Buy" },
            }}
          >
            Bulk Buy
          </Link>
        </li>
        <li>
          <Link
            href={{
              pathname: "/products",
              query: { category: "All Products" },
            }}
          >
            All Products
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default CustomMenu;
