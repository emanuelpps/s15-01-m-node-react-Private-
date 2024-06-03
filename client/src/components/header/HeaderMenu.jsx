import HeaderFilter from "./headerFilter/HeaderFilter";
import HeaderProfile from "./headerFilter/HeaderProfile";
import HeaderSearchBar from "./headerFilter/HeaderSearchBar";

function HeaderMenu() {
  return (
    <div className="flex gap-5">
      <HeaderFilter />
      <HeaderSearchBar />
      <HeaderProfile />
    </div>
  );
}

export default HeaderMenu;
