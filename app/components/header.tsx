import { LogOut, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { Button } from "~/components/ui/button";
import { useAuthContext } from "~/context/auth-context";

export const Header = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false); // State to track client-side rendering
  const navigate = useNavigate();
  const { user } = useAuthContext();

  // Initialize the component after client-side mount to avoid hydration issues
  useEffect(() => {
    setIsClient(true);

    const handleResize = () => {
      if (window.innerWidth > 768) setIsMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Re-run when isClicked state changes

  // Handle logout functionality
  const handleLogout = () => {
    console.log("Déconnecté");
    setIsMenuOpen(false);
    navigate("/auth/connexion");
  };

  // Toggle menu state with a delay for closing behavior
  const toggleMenu = (e: React.MouseEvent) => {
    setIsMenuOpen((prev) => !prev);
  };

  if (!isClient) return null; // Ensure the header doesn't render until the component is client-side

  return (
    <header className="flex justify-between w-full items-center p-6 shadow-md bg-white">
      <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
        <Link to="/">PhotoSnap</Link>
      </h1>

      {/* Desktop Navigation - Align the menu to the far right */}
      <div className="hidden md:flex items-center space-x-4 ml-auto">
        {isAuthenticated ? (
          <>
            {/* Avatar */}
            <img
              src="https://images.pexels.com/photos/11473272/pexels-photo-11473272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="User Avatar"
              className="w-8 h-8 rounded-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "/path/to/default-avatar.png";
              }}
            />

            {/* Profile Link */}
            <Button asChild variant="profil">
              <NavLink to="/compte/profil" className="py-2 text-lg text-gray-700">
                {user?.username}
              </NavLink>
            </Button>

            {/* Logout Button */}
            <Button
              variant="outline"
              className="text-red-500 hover:text-white hover:bg-red-400 cursor-pointer"
              onClick={handleLogout}>
              <LogOut className="w-4 h-4" /> Déconnexion
            </Button>
          </>
        ) : (
          <>
            <NavLink
              to="/auth/connexion"
              className="py-2 text-lg text-gray-700 hover:bg-gray-100 rounded-lg">
              Connexion
            </NavLink>
            <NavLink
              to="/auth/inscription"
              className="py-2 text-lg text-gray-700 hover:bg-gray-100 rounded-lg">
              Inscription
            </NavLink>
          </>
        )}
      </div>

      {/* Mobile Menu Button (Hamburger) */}
      <div className="md:hidden">
        <Button variant="outline" className="text-gray-700" onClick={toggleMenu}>
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && isClient && (
        <div className="md:hidden text-center absolute left-0 w-full z-10 top-16 right-0 bg-white shadow-md border-t border-gray-400 mt-1 p-4 rounded-lg">
          {isAuthenticated ? (
            <div className="space-y-2">
              {/* Avatar */}
              <img
                src="https://images.pexels.com/photos/11473272/pexels-photo-11473272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="User Avatar"
                className="w-8 h-8 rounded-full object-cover mb-2 mx-auto"
                onError={(e) => {
                  e.currentTarget.src = "/path/to/default-avatar.png";
                }}
              />

              {/* Profile Link */}
              <Button
                asChild
                variant="profil"
                className="w-full"
                onClick={() => setIsMenuOpen(false)}>
                <NavLink to="/compte/profil" className="block py-2 text-lg text-gray-700">
                  {user?.username}
                </NavLink>
              </Button>

              {/* Logout Button */}
              <Button
                variant="outline"
                className="text-red-500 hover:text-white hover:bg-red-400 w-full"
                onClick={handleLogout}>
                Déconnexion
              </Button>
            </div>
          ) : (
            <>
              <NavLink
                to="/auth/connexion"
                className="block py-2 text-lg text-gray-700 hover:bg-gray-100">
                Connexion
              </NavLink>
              <NavLink
                to="/auth/inscription"
                className="block py-2 text-lg text-gray-700 hover:bg-gray-100">
                Inscription
              </NavLink>
            </>
          )}
        </div>
      )}
    </header>
  );
};
