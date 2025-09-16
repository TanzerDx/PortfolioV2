import type { RefObject } from "react";

type MenuProps = {
  aboutmeRef: RefObject<HTMLDivElement | null>;
  techstackRef: RefObject<HTMLDivElement | null>;
  projectsRef: RefObject<HTMLDivElement | null>;
  activeId: string; // ⬅️ add this prop
};

const Menu: React.FC<MenuProps> = ({
  aboutmeRef,
  techstackRef,
  projectsRef,
  activeId,
}) => {
  const baseClass = "text-lg subpixel-antialiased";
  const activeClass = "text-white font-bold";
  const inactiveClass = "text-secondaryColor";

  return (
    <div className="flex flex-col w-[130px] text-center gap-12">
      <div>
        <button
          className={`${baseClass} ${
            activeId === "aboutme" ? activeClass : inactiveClass
          }`}
          onClick={() =>
            aboutmeRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "center",
            })
          }
        >
          ABOUT ME
        </button>
      </div>

      <div>
        <button
          className={`${baseClass} ${
            activeId === "techstack" ? activeClass : inactiveClass
          }`}
          onClick={() =>
            techstackRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "center",
            })
          }
        >
          TECH STACK
        </button>
      </div>

      <div>
        <button
          className={`${baseClass} ${
            activeId === "projects" ? activeClass : inactiveClass
          }`}
          onClick={() =>
            projectsRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "center",
            })
          }
        >
          PROJECTS
        </button>
      </div>
    </div>
  );
};

export default Menu;
