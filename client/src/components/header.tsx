import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "./ui/separator";
import { Link, useLocation } from "react-router-dom";
import useWorkspaceId from "@/hooks/use-workspace-id";
import { useEffect, useState } from "react";

const Header = () => {
  const location = useLocation();
  const workspaceId = useWorkspaceId();

  // Dark mode toggle logic
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const getPageLabel = (pathname: string) => {
    if (pathname.includes("/project/")) return "Project";
    if (pathname.includes("/settings")) return "Settings";
    if (pathname.includes("/tasks")) return "Tasks";
    if (pathname.includes("/members")) return "Members";
    return null; // Default label
  };

  const pageHeading = getPageLabel(location.pathname);
  return (
    <header className="flex sticky top-0 z-50 bg-white dark:bg-background h-12 shrink-0 items-center border-b">
      <div className="flex flex-1 items-center gap-2 px-3">
        <SidebarTrigger />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block text-[15px]">
              {pageHeading ? (
                <BreadcrumbLink asChild>
                  <Link to={`/workspace/${workspaceId}`}>Dashboard</Link>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage className="line-clamp-1 ">
                  Dashboard
                </BreadcrumbPage>
              )}
            </BreadcrumbItem>

            {pageHeading && (
              <>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem className="text-[15px]">
                  <BreadcrumbPage className="line-clamp-1">
                    {pageHeading}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex items-center gap-4 pr-4">
        <button
          aria-label="Toggle dark mode"
          className="p-2 focus:outline-none"
          onClick={() => setDarkMode((d) => !d)}
        >
          {darkMode ? (
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M17.75 15.5A6.75 6.75 0 0 1 8.5 6.25a.75.75 0 0 0-.75-.75A8 8 0 1 0 18 18.25a.75.75 0 0 0-.75-.75Z" /></svg>
          ) : (
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.75a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1A.75.75 0 0 1 12 2.75Zm6.25 9.25a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0v-.01a.75.75 0 0 1 .75-.75ZM12 19.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Zm7.07-12.32a.75.75 0 0 1 1.06 1.06l-.71.71a.75.75 0 1 1-1.06-1.06l.71-.71ZM4.22 17.03a.75.75 0 0 1 1.06 0l.71.71a.75.75 0 1 1-1.06 1.06l-.71-.71a.75.75 0 0 1 0-1.06Zm12.02 1.77a.75.75 0 0 1 1.06 1.06l-.71.71a.75.75 0 1 1-1.06-1.06l.71-.71ZM4.22 6.97a.75.75 0 0 1 0-1.06l.71-.71a.75.75 0 1 1 1.06 1.06l-.71.71a.75.75 0 0 1-1.06 0ZM12 7.25A4.75 4.75 0 1 1 7.25 12 4.75 4.75 0 0 1 12 7.25Z" /></svg>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
