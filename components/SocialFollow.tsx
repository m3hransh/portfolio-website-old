import {
  faYoutube,
  faLinkedinIn,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const YouTubeLink =
  'https://www.youtube.com/channel/UCMsxbz4QS32ZqIrMSNcMH7Q';
const GitHubLink = 'https://github.com/m3hransh';
const LinkedIn =
  'https://www.linkedin.com/in/mohammad-mehran-shahidi';

export default function SocialFollow() {
  return (
    <div className="flex items-baseline space-x-5 justify-center  ">
      <a target="_blank" href={YouTubeLink}>
        <FontAwesomeIcon
          className="h-10 socialIcon"
          icon={faYoutube}
        />
      </a>
      <a target="_blank" href={GitHubLink}>
        <FontAwesomeIcon
          className="h-10 socialIcon"
          icon={faGithub}
        />
      </a>
      <a target="_blank" href={LinkedIn}>
        <FontAwesomeIcon
          className="h-10 socialIcon"
          icon={faLinkedinIn}
        />
      </a>
    </div>
  );
}
