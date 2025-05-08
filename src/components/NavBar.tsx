
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Search, Bell, User } from 'lucide-react';
import { Input } from "@/components/ui/input";

const NavBar: React.FC = () => {
  return (
    <header className="border-b border-slate-200 bg-white dark:bg-slate-950 dark:border-slate-800 sticky top-0 z-40">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-academy-primary flex items-center justify-center">
              <span className="text-white font-bold">S</span>
            </div>
            <span className="font-bold text-xl hidden md:inline-block text-academy-dark dark:text-white">Student AI Central</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center w-full max-w-sm mx-8">
          <div className="relative w-full">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search resources..."
              className="w-full pl-8 bg-background"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-academy-amber rounded-full"></span>
          </Button>
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5 md:hidden" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
