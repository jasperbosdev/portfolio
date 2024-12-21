import Navbar from "./components/navigation/navbar";
import Footer from "./components/navigation/footer";
import Introduction from "./components/introduction/Introduction";
import AboutGrid from "./components/introduction/AboutGrid";
import Grid from "./components/etc/grid";

export default function Home() {
  return (
    <main>
      <Grid />
      <div className="container mx-auto max-w-[920px] grid grid-rows-[30px_1fr_30px] justify-items-center min-h-screen p-8 pb-20 gap-0 sm:p-10 font-[family-name:var(--font-geist-sans)]">
        <Navbar />
        <div className="flex-col flex py-20 gap-0 sm:gap-20 w-full">
          <Introduction />
          <AboutGrid />
        </div>
        <Footer />
      </div>
    </main>
  );
}