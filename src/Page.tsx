import SocialChannels from "./components/common/SocialChannels";

function Page() {
  return (
    <div className="flex flex-row pl-[15%] pr-[15%] pt-[5%] pb-[2%]">

      <div className="flex flex-col fixed w-1/2">
        <h1 className="text-5xl text-primaryColor">Hristo Ganchev</h1>
        <h1 className="text-textColor text-2xl mt-[2%]">Full Stack Developer</h1>
        <h1 className="text-textColor text-lg mt-[4%] w-[47%]">
          I build full-stack platforms that are responsive, user-friendly, and optimized for performance and scalability.
        </h1>

        <div className="mt-[15%]">
          <SocialChannels />
        </div>
      </div>


      <div className="ml-[50%] w-1/2">
          <h1 className="text-white">TO FINISH</h1>
      </div>
    </div>
  )
}


export default Page;
