import "./MobileFooter.css";

export function MobileFooter() {
  return (
    <div className="MobileFooter">
      <div className="Menu">
        <a href="https://emilioblacksmith.github.io/Blog/" target="_blank">
          1. BLOG
        </a>
        <a href="https://emilioblacksmith.github.io/bioLink/" target="_blank">
          2. MY SOCIALS
        </a>
        <a
          href="https://www.youtube.com/channel/UC1ZeE2i5QwVwhWOV-HveneQ"
          target="_blank"
        >
          3. MY YOUTUBE
        </a>
      </div>
      <div className="Copyright">
        Developed by{" "}
        <a
          href="https://github.com/EmilioBlacksmith/Portfolio"
          target="_blank"
          className="name"
        >
          EmilioBlacksmith
        </a>
        . MIT LICENSE 2023.
      </div>
    </div>
  );
}
