import { MdEmail } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="bg-red-800 text-white">
      <div className="container mx-auto flex justify-between items-center py-1 px-6 md:px-0">
        <div className="flex items-center">
          <MdEmail className="text-white mr-2" />
          <a className="text-white">Karawang@unsika.ac.id</a>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-red-700 placeholder-white text-white px-3 py-1 rounded-md focus:outline-none"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
