import * as React from "react";
import { useState } from "react";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { NavContext } from "../contexts/NavContext";
import { useContext } from "react";
import UserMenuIcon from "./UserMenuIcon";

export default function NavBar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { activeTab, setActiveTab, navTabs } = useContext(NavContext);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
            <span className="font-['Noto_Serif_KR'] text-primary-foreground font-bold text-lg leading-none">
              한
            </span>
          </div>
          <div>
            <div className="font-semibold text-foreground leading-tight text-sm">
              한국어 배우기
            </div>
            <div className="text-xs text-muted-foreground leading-tight">
              Learn Korean
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-1 bg-secondary rounded-full p-1">
          {navTabs.map((tab) => (
            <Link
              key={tab.id}
              to={tab.link}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 bg-accent/10 text-accent rounded-full px-3 py-1.5 text-xs font-semibold">
            <Star className="w-3 h-3 fill-accent" />
            <span>Users</span>
          </div>
          <UserMenuIcon />
        </div>
      </div>
    </header>
  );
}
