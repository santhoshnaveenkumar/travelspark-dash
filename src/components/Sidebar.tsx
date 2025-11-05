import { Home, Mic, Wallet, MapPin, Settings, Beaker } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const links = [
    { to: "/", icon: Home, label: "Dashboard" },
    { to: "/translator", icon: Mic, label: "Translator" },
    { to: "/budget", icon: Wallet, label: "Budget" },
    { to: "/guide", icon: MapPin, label: "Smart Guide" },
    { to: "/settings", icon: Settings, label: "Settings" },
    { to: "/demo", icon: Beaker, label: "Demo" },
  ];

  return (
    <aside className="fixed left-0 top-16 bottom-16 w-64 bg-sidebar border-r border-sidebar-border overflow-y-auto">
      <nav className="p-4 space-y-2">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium shadow-sm"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
              )
            }
          >
            <link.icon className="w-5 h-5" />
            <span>{link.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
