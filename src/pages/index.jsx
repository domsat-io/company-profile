"use client";
import Head from "next/head";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Slider from "@/components/slider";
import Service from "@/components/service";
import Project from "@/components/project";
import Client from "@/components/client";
import Team from "@/components/team";
import Faq from "@/components/faq";
import Work from "@/components/work";

export default function Home() {
  return (
    <>
      <Head>
        <title>Domsat.io</title>
      </Head>

      {/* <Header /> */}

      <main>
        <Hero />
        <Service />
        <Work />
        <Project />
        <Faq />
        <Client />
        <Slider />
        <Team />
        <Footer />
      </main>
    </>
  );
}
