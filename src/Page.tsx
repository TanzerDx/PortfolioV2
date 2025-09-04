import SocialChannels from "./components/common/SocialChannels";
import Menu from "./components/common/Menu";

function Page() {
  return (
    <div className="flex flex-row pt-[5%] pb-[2%]">
      <div className="flex flex-col ml-[20%] fixed w-[900px] h-[80%]">
        <h1 className="text-5xl text-primaryColor">Hristo Ganchev</h1>

        <h1 className="text-textColor text-2xl mt-[2%]">
          Full Stack Developer
        </h1>

        <h1 className="text-textColor text-lg mt-[4%] w-[450px]">
          I build full-stack platforms that are responsive, user-friendly, and
          optimized for performance and scalability.
        </h1>

        <div className="ml-[23%] mt-[10%]">
          <Menu />
        </div>

        <div className="mt-auto">
          <SocialChannels />
        </div>
      </div>

      <div className="ml-[50%] w-1/2">
        <h1 className="text-white">TO FINISH</h1>
      </div>
    </div>
  );
}

export default Page;
