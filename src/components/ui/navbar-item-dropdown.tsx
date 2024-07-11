export interface DropdownCategory {
  category: string;
  subcategories: string[];
}

interface NavbarItemDropdownProps {
  items: DropdownCategory[];
  isVisible: boolean;
}

const NavbarItemDropdown: React.FC<NavbarItemDropdownProps> = ({
  items,
  isVisible,
}) => {
  return (
    <div className={`navbar-dropdown ${isVisible ? "visible" : ""}`}>
      <div className="dropdown-content">
        {items.map((item) => (
          <div key={item.category}>
            <h3 className="dropdown-h3">{item.category}</h3>
            <div className="flex flex-col">
              <ul>
                {item.subcategories.map((subcategory) => (
                  <li key={subcategory}>{subcategory}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavbarItemDropdown;
