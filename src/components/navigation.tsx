"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "../../components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function Navigation() {
  const pathname = usePathname();
  const { setTheme, theme } = useTheme();

  const routes = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/products",
      label: "Products",
    },
    {
      href: "/writing",
      label: "Writing",
    },
    {
      href: "/books",
      label: "Books",
    },
  ];

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Steven Chen
        </Link>

        <div className="flex items-center gap-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm transition-colors hover:text-primary",
                pathname === route.href
                  ? "text-foreground font-medium"
                  : "text-muted-foreground"
              )}
            >
              {route.label}
            </Link>
          ))}

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
