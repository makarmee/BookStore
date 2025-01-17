import Account from "@/components/Account";
import ForYou from "@/components/ForYou";
import Hero from "@/components/Hero";
import News from "@/components/News";
import Top from "@/components/TopSellers";

export default function Home() {
  return (
    <>
      <Hero />
      <Top />
      <ForYou />
      <News />
      <Account />
    </>
  );
}
