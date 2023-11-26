import "./Portfolio.css";

export function Portfolio() {
  return (
    <section className="hidden" id="Portfolio-Section">
      <div className="portfolio_data">
        <div className="SectionName">
          <h1>/* SOME OF MY LATEST WORK 📑*/</h1>
        </div>
        <div className="Projects">
          <div className="PortfolioProject">
            <div className="project_data">
              <h3>2023 || Web Developer</h3>
              <h1>TUBEPLANNER</h1>
              <p>
                A Youtuber Script Writer and Planner App, for desktop. With the
                focus on thumbnail testing tools, script writing tool based on
                kanban boards like trello, and Calendar Planner for video
                projects.
              </p>
              <a
                href="https://emilioblacksmith.github.io/Blog/posts/my-plan/"
                target="_blank"
              >
                LEARN MORE...
              </a>
            </div>
          </div>
          <div className="PortfolioProject">
            <div className="project_data">
              <h3>2023 || Game Developer</h3>
              <h1>MOTHER FROGGER</h1>
              <p>
                A recreation of the classic videogame of FROGGER (1981), but
                with active ragdoll physics movement, like Gang Beasts, Humans
                Fall Flat or Fall Guys.
              </p>
              <a
                href="https://emilioblacksmith.itch.io/frogger-but-with-ragdolls"
                target="_blank"
              >
                LEARN MORE...
              </a>
            </div>
            <video autoPlay loop muted>
              <source
                type="video/webm"
                src="/assets/Portfolio/portfolio1.webm"
              />
            </video>
          </div>
          <div className="PortfolioProject">
            <div className="project_data">
              <h3>2023 || Web Developer</h3>
              <h1>BIOLINKS</h1>
              <p>
                A minimalistic responsive website to showcase main social media
                links or project links, to share to others online. It is bases
                in Linktree and Linkin.bio.
              </p>
              <a
                href="https://github.com/EmilioBlacksmith/bioLink"
                target="_blank"
              >
                LEARN MORE...
              </a>
            </div>
            <video autoPlay loop muted>
              <source
                type="video/webm"
                src="/assets/Portfolio/portfolio2.webm"
              />
            </video>
          </div>
          <div className="PortfolioProject">
            <div className="project_data">
              <h3>2022 || Game Developer</h3>
              <h1>LUCHO: The Shooting Dog</h1>
              <p>
                A Shooting Platformer 2D game where the movement and interaction
                within the environment is being done by shooting a plasma gun
                thru a laboratory.
              </p>
              <a
                href="https://emilioblacksmith.itch.io/lucho-the-shooting-dog"
                target="_blank"
              >
                LEARN MORE...
              </a>
            </div>
            <video autoPlay loop muted>
              <source
                type="video/webm"
                src="/assets/Portfolio/portfolio3.webm"
              />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
