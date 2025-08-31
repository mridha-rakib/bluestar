import React, { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import layer1 from "/logo_wh.svg";
import ConnectButtonWithModal from "./ConnectButton";
import { ChevronDown } from "lucide-react";

/**
 * Separate desktop and mobile navbars.
 * - DesktopNavbar: your original layout with hover submenu.
 * - MobileNavbar: simplified nav + dropdown.
 * For medium screens (md), mobile logo is used instead of the large desktop one.
 */

const DesktopNavbar = ({ navItems }) => {
  const location = useLocation();

  return (
    <ul className="hidden lg:flex items-center gap-[64px] md:gap-[50px]">
      {navItems.map((item) => {
        const isActive = item.submenu
          ? item.submenu.some((sub) => location.pathname.startsWith(sub.path))
          : location.pathname === item.path;

        return (
          <li key={item.name} className="relative group ">
            <Link
              to={item.path}
              className="flex items-center justify-center relative py-[20px] px-[10px] text-white font-medium text-base"
            >
              {item.name}
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-[#1890FF] transition-all duration-300 ${
                  isActive ? "w-full" : "w-0"
                }`}
              />
              {item.submenu && (
                <span className="ml-2 text-xs" aria-hidden="true">
                  <ChevronDown />
                </span>
              )}
            </Link>

            {item.submenu && (
              <div className="hidden group-hover:flex absolute top-full left-0 flex-col bg-black min-w-[240px] shadow-lg z-10">
                {item.submenu.map((sub) => (
                  <Link
                    key={sub.name}
                    to={sub.path}
                    className={`block py-3 px-4 text-white hover:bg-gray-700 transition ${
                      location.pathname === sub.path
                        ? "bg-gray-800 font-semibold"
                        : ""
                    }`}
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            )}
          </li>
        );
      })}
      <li>
        <ConnectButtonWithModal />
      </li>
    </ul>
  );
};

const MobileNavbar = ({ navItems }) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  // Refs for click-outside detection
  const wrapperRef = React.useRef(null); // wraps the whole mobile nav area (button + panel)
  const triggerRef = React.useRef(null); // the hamburger button

  const mobileLinks = useMemo(() => {
    const serviceSubs =
      navItems.find((n) => n.name === "Services")?.submenu || [];
    return [
      { name: "Home", path: "/" },
      ...serviceSubs,
      { name: "About", path: "/about" },
    ];
  }, [navItems]);

  // Close on outside click/tap and on Escape
  React.useEffect(() => {
    if (!open) return;

    const handlePointer = (e) => {
      const wrap = wrapperRef.current;
      const trig = triggerRef.current;
      const target = e.target;
      if (!wrap) return;
      const clickInside = wrap.contains(target);
      const clickOnTrigger = trig && trig.contains(target);
      if (!clickInside && !clickOnTrigger) {
        setOpen(false);
      }
    };

    const handleKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handlePointer);
    document.addEventListener("touchstart", handlePointer, { passive: true });
    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("mousedown", handlePointer);
      document.removeEventListener("touchstart", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  // Close when the route changes (e.g., via back/forward nav)
  React.useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <div ref={wrapperRef} className="flex lg:hidden w-full flex-col">
      {/* Top bar */}
      <div className="flex items-center justify-between h-[64px] px-4">
        <Link to="/" className="shrink-0" onClick={() => setOpen(false)}>
          {/* Medium screens: show smaller logo */}
          <img src={"/blueStar_logo.svg"} alt="logo" width={45} height={45} />
        </Link>

        <button
          ref={triggerRef}
          className="flex items-center justify-center w-11 h-11 rounded-lg text-white"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="w-full bg-[#EAF5FF] mt-40 divide-y divide-[#B3DCFF]">
          {mobileLinks.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`block text-center py-3 font-medium text-black hover:bg-[#E1F0FF] ${
                  active ? "font-semibold" : ""
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          <div className="p-3 flex justify-center">
            <ConnectButtonWithModal />
          </div>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "Services",
      path: "#",
      submenu: [
        { name: "Commercial & Mixed Use", path: "/service/com" },
        { name: "Residential Development", path: "/service/res" },
        { name: "Custom Homes", path: "/service/cus" },
      ],
    },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="absolute w-full gap-3 top-0 bg-black/80 text-white flex items-center justify-between h-[120px] px-6 md:px-[60px] lg:px-[141px] font-sans z-50">
      {/* Desktop Logo visible only on lg+ */}
      <div className="hidden lg:flex items-center">
        <img src={layer1} alt="logo" width={219} height={41} />
      </div>

      {/* Desktop nav (lg+) */}
      <DesktopNavbar navItems={navItems} />

      {/* Mobile + Medium nav (below lg) */}
      <MobileNavbar navItems={navItems} />
    </nav>
  );
};

export default Navbar;
