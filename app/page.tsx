import { Locator } from "@/components/sections/locator";
import { Press } from "@/components/sections/press";
import { Product } from "@/components/sections/product";
import { Ritual } from "@/components/sections/ritual";
import { Story } from "@/components/sections/story";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { Pillars } from "@/components/sections/pillars";
import { RetailerStrip } from "@/components/sections/retailer-strip";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <RetailerStrip />
        <Pillars />
        <Story />
        <Product />
        <Ritual />
        <Press />
        <Locator />
      </main>
      <Footer />
    </>
  );
}
