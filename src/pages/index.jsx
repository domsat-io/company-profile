import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Service from "@/components/service";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Service />
        <Footer />
      </main>
    </>
  );
}
