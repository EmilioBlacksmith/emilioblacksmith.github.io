import Header from "./Header";
import About from "./About";
import Hero from "./Hero";

export default function App() {
  return (
    <main className="flex h-screen w-screen flex-col items-center overflow-x-hidden bg-app-main font-sans text-white">
      <header className="sticky top-0 w-5/6 bg-app-main">
        <Header />
      </header>
      <section className="w-5/6">
        <Hero />
      </section>
    </main>
  );
}
