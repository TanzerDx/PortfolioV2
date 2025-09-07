import GithubLogo from "../../assets/images/GitHub.png";
import LinkedInLogo from "../../assets/images/LinkedIn.png";
import MailLogo from "../../assets/images/Gmail.png";

const SocialChannels: React.FC = () => {
  return (
    <div className="flex gap-10">
      <a href="https://github.com/TanzerDx" className="rounded-3xl">
        <img src={GithubLogo} alt="GithubLogo" className="w-10 h-10" />
      </a>

      <a
        href="https://www.linkedin.com/in/hristo-ganchev-15b3b724b/"
        className="rounded-3xl"
      >
        <img src={LinkedInLogo} alt="LinkedInLogo" className="w-10 h-10" />
      </a>

      <a href="mailto:hristoganchev3@gmail.com" className="rounded-3xl">
        <img src={MailLogo} alt="MailLogo" className="w-10 h-10" />
      </a>
    </div>
  );
};

export default SocialChannels;
