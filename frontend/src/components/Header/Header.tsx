import HeaderTopBar from "./TopBar";
import HeaderMiddleBar from "./MiddleBar";
import Navbar from "./NavBar";
import SearchForm from "./middleBarHeader/SearchForm";

export default function Header() {
  return (
    <header className="flex flex-col items-center">
      {/* Top Bar */}
      <HeaderTopBar />

      {/* Middle Bar */}
      <HeaderMiddleBar />
      <div className="md:hidden bg-darkBlue w-full px-4 py-4">
        <SearchForm />
      </div>
      {/* Bottom Bar */}
      <Navbar />
    </header>
  );
}
