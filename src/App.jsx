import {
  Hero,
  Navbar,
  Highlight,
  Model,
  Features,
  HowItWorks,
  Footer,
} from "./components";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlight />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
};

export default App;
