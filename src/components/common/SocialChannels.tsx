import GithubLogo from "../../assets/images/GitHub.png";
import LinkedInLogo from "../../assets/images/LinkedIn.png";
import MailLogo from "../../assets/images/Gmail.png";

const SocialChannels: React.FC = () => {
  return (
    <div className="flex gap-4">
      <a
        href="https://github.com/TanzerDx"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-3xl p-3 transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:-translate-y-1"
      >
        <img src={GithubLogo} alt="GithubLogo" className="w-10 h-10" />
      </a>

      <a
        href="https://www.linkedin.com/in/hristo-ganchev-15b3b724b/"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-3xl p-3 transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:-translate-y-1"
      >
        <img src={LinkedInLogo} alt="LinkedInLogo" className="w-10 h-10" />
      </a>

      <a
        href="mailto:hristoganchev3@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-3xl p-3 transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:-translate-y-1"
      >
        <img src={MailLogo} alt="MailLogo" className="w-10 h-10" />
      </a>
    </div>
  );
};

export default SocialChannels;
