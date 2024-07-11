import SearchIcon from "@/assets/icons/search-icon";
import CartIcon from "@/assets/icons/cart-icon";
import NavbarItem from "./navbar-item";

export default function Navbar() {
  return (
    <div className="sticky bg-white top-0 flex flex-row gap-16 items-center justify-center py-5 w-screen">
      <NavbarItem
        title="Mujer"
        dropdownItems={[
          {
            category: "Zapatos",
            subcategories: ["Todos los zapatos", "Botas"],
          },
          {
            category: "Ropa",
            subcategories: ["Todas las prendas", "Blusas"],
          },
        ]}
      />
      <NavbarItem
        title="Hombre"
        dropdownItems={[
          {
            category: "Zapatos",
            subcategories: ["Todos los zapatos", "Botas"],
          },
          {
            category: "Ropa",
            subcategories: ["Todas las prendas", "Blusas"],
          },
        ]}
      />
      <NavbarItem
        title="Niños"
        dropdownItems={[
          {
            category: "Zapatos",
            subcategories: ["Todos los zapatos", "Botas"],
          },
          {
            category: "Ropa",
            subcategories: ["Todas las prendas", "Blusas"],
          },
        ]}
      />
      <NavbarItem
        title="Destacados"
        dropdownItems={[
          {
            category: "Zapatos",
            subcategories: ["Todos los zapatos", "Botas"],
          },
          {
            category: "Ropa",
            subcategories: ["Todas las prendas", "Blusas"],
          },
        ]}
      />
      <NavbarItem
        title="Ofertas"
        dropdownItems={[
          {
            category: "Zapatos",
            subcategories: ["Todos los zapatos", "Botas"],
          },
          {
            category: "Ropa",
            subcategories: ["Todas las prendas", "Blusas"],
          },
        ]}
      />
      <SearchIcon />
      <CartIcon />
    </div>
  );
}
