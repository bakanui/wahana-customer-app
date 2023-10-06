import { AvailableTicket } from "@/components/AvailableTicket";
import { CompanyStory } from "@/components/CompanyStory";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { PromoTicket } from "@/components/PromoTicket";
import { SearchTiket } from "@/components/SearchTiket";
import { VideoBanner } from "@/components/VideoBanner";

const HomePage = () => {
  return (
    <div className="bg-white flex flex-col w-full h-full">
      <VideoBanner />
      <SearchTiket />
      {/* <AvailableTicket /> */}
      {/* <PromoTicket /> */}
      <Gallery />
      <CompanyStory />
      <Footer />
    </div>
  );
};

export default HomePage;
