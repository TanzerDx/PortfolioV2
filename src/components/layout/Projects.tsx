const Projects: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 pr-[3%] 2xl:pl-[3%] 2xl:max-w-[700px]">
      <a className="group" href="https://github.com/TanzerDx">
        <div className="rounded-2xl border border-transparent bg-white/0 hover:bg-white/10 duration-300 px-1 py-4">
          <div className="flex flex-row text-textColor subpixel-antialiased group-hover:text-primaryColor duration-300">
            <p className="font-semibold text-lg">TICKETPASS</p>
            <p className="ml-1 transform text-xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
              &#8599;
            </p>
          </div>
          <p className="mt-[1%] text-textColor subpixel-antialiased text-md">
            A user-friendly website where concert lovers can purchase tickets to
            many events and have all of them in one place. Upon creating a
            registration, the user immediately has access to purchasing concert
            tickets, display the e-tickets on their devices, and has history of
            past concerts they have attended.
          </p>
          <div className="flex flex-row mt-[2%] gap-5">
            <div className="rounded-3xl pt-[0.5%] pb-[0.5%] pl-[1%] pr-[1%] bg-secondaryColor/25">
              <p className="text-secondaryColor subpixel-antialiased text-md">
                React
              </p>
            </div>
            <div className="rounded-3xl pt-[0.5%] pb-[0.5%] pl-[1%] pr-[1%] bg-secondaryColor/25">
              <p className="text-secondaryColor subpixel-antialiased text-md">
                JavaScript
              </p>
            </div>
            <div className="rounded-3xl pt-[0.5%] pb-[0.5%] pl-[1%] pr-[1%] bg-secondaryColor/25">
              <p className="text-secondaryColor subpixel-antialiased text-md">
                Spring Boot
              </p>
            </div>
            <div className="rounded-3xl pt-[0.5%] pb-[0.5%] pl-[1%] pr-[1%] bg-secondaryColor/25">
              <p className="text-secondaryColor subpixel-antialiased text-md">
                MySQL
              </p>
            </div>
          </div>
        </div>
      </a>
      <a className="group" href="https://github.com/TanzerDx/Arcane-Defender">
        <div className="rounded-2xl border border-transparent bg-white/0 hover:bg-white/10 duration-300 px-1 py-4">
          <div className="flex flex-row text-textColor subpixel-antialiased group-hover:text-primaryColor duration-300">
            <p className="font-semibold text-lg">ARCANE DEFENDER</p>
            <p className="ml-1 text-xl transform transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
              &#8599;
            </p>
          </div>
          <p className="mt-[1%] text-textColor subpixel-antialiased text-md">
            A video game that I have worked on in collaboration with another
            software developer. It is a top-down tower defense game made
            entirely in Unity. The goal of the player is simple: build defense
            against numerous waves of monsters and defeat the final boss.
          </p>
          <div className="flex flex-row mt-[2%] gap-5">
            <div className="rounded-3xl pt-[0.5%] pb-[0.5%] pl-[1%] pr-[1%] bg-secondaryColor/25">
              <p className="text-secondaryColor subpixel-antialiased text-md">
                Unity
              </p>
            </div>
          </div>
        </div>
      </a>
      <a className="group" href="https://github.com/orgs/PibbleTV/repositories">
        <div className="rounded-2xl border border-transparent bg-white/0 hover:bg-white/10 duration-300 px-1 py-4">
          <div className="flex flex-row text-textColor subpixel-antialiased group-hover:text-primaryColor duration-300">
            <p className="font-semibold text-lg">PIBBLETV</p>
            <p className="ml-1 transform text-xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
              &#8599;
            </p>
          </div>
          <p className="mt-[1%] text-textColor subpixel-antialiased text-md">
            A game-oriented livestreaming platform with a variety of different
            categories which users can choose from. The application allows users
            to broadcast their screen in real time while playing video games for
            an audience. For this project, I have used SRT as the streaming
            protocol and SRS as a streaming server to deliver the best quality
            possible to the users.
          </p>
          <div className="flex flex-row mt-[2%] gap-5">
            <div className="rounded-3xl pt-[0.5%] pb-[0.5%] pl-[1%] pr-[1%] bg-secondaryColor/25">
              <p className="text-secondaryColor subpixel-antialiased text-md">
                React
              </p>
            </div>
            <div className="rounded-3xl pt-[0.5%] pb-[0.5%] pl-[1%] pr-[1%] bg-secondaryColor/25">
              <p className="text-secondaryColor subpixel-antialiased text-md">
                SRS
              </p>
            </div>
            <div className="rounded-3xl pt-[0.5%] pb-[0.5%] pl-[1%] pr-[1%] bg-secondaryColor/25">
              <p className="text-secondaryColor subpixel-antialiased text-md">
                nginx
              </p>
            </div>
            <div className="rounded-3xl pt-[0.5%] pb-[0.5%] pl-[1%] pr-[1%] bg-secondaryColor/25">
              <p className="text-secondaryColor subpixel-antialiased text-md">
                TypeScript
              </p>
            </div>
          </div>
        </div>
      </a>

      <a className="group w-[200px] px-1" href="https://github.com/TanzerDx">
        <div className="flex flex-row text-textColor subpixel-antialiased">
          <p className="transition-all decoration-transparent text-lg font-semibold group-hover:underline group-hover:decoration-primaryColor duration-300 underline-offset-[8px]">
            View All Projects
          </p>
          <p className="ml-1 text-xl subpixel-antialiased transform transition-transform duration-300 group-hover:translate-x-1">
            &rarr;
          </p>
        </div>
      </a>
    </div>
  );
};

export default Projects;
