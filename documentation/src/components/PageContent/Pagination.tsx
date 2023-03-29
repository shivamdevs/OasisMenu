import type { FunctionalComponent } from 'preact';
import { useState } from 'preact/hooks';
import { PROJECT_BASE_URL } from "../../consts";

type SidebarItem = {
  text: string;
  link: string;
};

type Sidebar = {
  [category: string]: SidebarItem[];
};

type PaginationProps = {
  sidebar: Sidebar;
  currentUrl: string;
  astroPath: string | undefined;
};

const Pagination: FunctionalComponent<PaginationProps> = ({ sidebar, currentUrl, astroPath }) => {
  const [currentPage, setCurrentPage] = useState<SidebarItem | null>(null);
  const [previousPage, setPreviousPage] = useState<SidebarItem | null>(null);
  const [nextPage, setNextPage] = useState<SidebarItem | null>(null);

  const getPages = () => {
    let previous: SidebarItem | null = null;
    let current: SidebarItem | null = null;
    let next: SidebarItem | null = null;

    const pages = Object.values(sidebar).flatMap(arr => arr);
    pages.forEach((page, index) => {
      const url = astroPath + `${PROJECT_BASE_URL}/${page.link}`;
      if ([url, url.slice(1)].includes(currentUrl)) {
        current = page;
        previous = pages[index - 1] || null;
        next = pages[index + 1] || null;
      }
    });

    setCurrentPage(current);
    setPreviousPage(previous);
    setNextPage(next);
  };

  getPages();

  return (
    <nav className="footnation">
      {previousPage && (
        <a className="footprev" href={`${astroPath}${PROJECT_BASE_URL}/${previousPage.link}`}>
          <i className="fas fa-arrow-left"></i>
          <div className="footlabel">
            <span>Previous Page</span>
            <div className="foottext">{previousPage.text}</div>
          </div>
        </a>
      )}
      {nextPage && (
        <a className="footnext" href={`${astroPath}${PROJECT_BASE_URL}/${nextPage.link}`}>
          <i className="fas fa-arrow-right"></i>
          <div className="footlabel">
            <span>Next Page</span>
            <div className="foottext">{nextPage.text}</div>
          </div>
        </a>
      )}
    </nav>
  );
};

export default Pagination;
