import "./Portfolio.css";

export function Portfolio() {
	return (
		<section
			className="hidden"
			id="Portfolio-Section"
		>
			<div className="portfolio_data">
				<div className="SectionName">
					<h1>/* SOME OF MY LATEST WORK 📑*/</h1>
				</div>
				<div className="Projects">
					<div className="PortfolioProject">
						<div className="project_data">
							<h3>2024 || Web Developer</h3>
							<h1>The Busy Gamer App</h1>
							<p>
								A Web Application that allows you to track the videogames that
								you want to play, and it helps you to calculate approximately
								how long it's going to take you to finish all those games.
								Powered by How Long To Beat API.
							</p>
							<a
								href="https://github.com/EmilioBlacksmith/TheBusyGamerWebApp"
								target="_blank"
							>
								LEARN MORE...
							</a>
						</div>
						<video
							autoPlay
							loop
							muted
						>
							<source
								type="video/webm"
								src="assets/Portfolio/portfolio4.webm"
							/>
						</video>
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
						<video
							autoPlay
							loop
							muted
						>
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
						<video
							autoPlay
							loop
							muted
						>
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
						<video
							autoPlay
							loop
							muted
						>
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
