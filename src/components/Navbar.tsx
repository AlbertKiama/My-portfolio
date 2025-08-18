import React from 'react';
import { Link } from 'react-scroll';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/theme-provider';

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const next = theme === 'dark' ? 'light' : 'dark';

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="font-semibold">Albert Kariuki</div>
        <nav className="hidden gap-4 md:flex">
          {[
            { to: 'home', label: 'Home' },
            { to: 'about', label: 'About' },
            { to: 'services', label: 'Services' },
            { to: 'skills', label: 'Skills' },
            { to: 'education', label: 'Education' },
            { to: 'experience', label: 'Experience' },
            { to: 'work', label: 'Work' },
            { to: 'blog', label: 'Blog' },
            { to: 'contact', label: 'Contact' },
          ].map((item) => (
            <Link key={item.to} to={item.to} spy smooth offset={-55} duration={500} className="cursor-pointer text-sm hover:underline">
              {item.label}
            </Link>
          ))}
        </nav>
        <Button variant="outline" size="sm" onClick={() => setTheme(next)}>
          {next === 'dark' ? 'Dark' : 'Light'} Mode
        </Button>
      </div>
    </header>
  );
}

