import type { RefObject } from "react";

type MenuProps = {
  aboutmeRef: RefObject<HTMLDivElement | null>;
  techstackRef: RefObject<HTMLDivElement | null>;
  projectsRef: RefObject<HTMLDivElement | null>;
};

const Menu: React.FC<MenuProps> = ({
  aboutmeRef,
  techstackRef,
  projectsRef,
}) => {
  return (
    <div className="flex flex-col w-[130px] text-center gap-12">
      <div>
        <button
          className="text-secondaryColor text-lg subpixel-antialiased"
          onClick={() => {
            aboutmeRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }}
        >
          ABOUT ME
        </button>
      </div>

      <div>
        <button
          className="text-secondaryColor text-lg subpixel-antialiased"
          onClick={() => {
            techstackRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }}
        >
          TECH STACK
        </button>
      </div>

      <div>
        <button
          className="text-secondaryColor text-lg subpixel-antialiased"
          onClick={() => {
            projectsRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }}
        >
          PROJECTS
        </button>
      </div>
    </div>
  );
};

export default Menu;
