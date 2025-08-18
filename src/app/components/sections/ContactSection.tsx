import { FlippingCard } from "../ui/FlippingCard";
import { ContactLink } from "../ui/ContactLink";
import { useTranslations } from "next-intl";

export const ContactSection: React.FC = () => {
  const t = useTranslations("contact");

  return (
    <section id="contact-section" className="w-full">
      <h1 className="font-serif mb-12 relative">{t("title")}</h1>

      <div className="flex flex-col lg:flex-row items-center gap-12 ">
        <FlippingCard
          imageSrc="/marcocoicon.jpg"
          imageAlt="marcocoloco"
          backText={t("flipcard.backText")}
          width={200}
          height={200}
          backgroundColor="bg-black"
        />

        <div className="flex flex-col gap-6 w-full lg:flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ContactLink type="email" address="marcoalucio15@gmail.com" />
            <ContactLink
              type="github"
              address="github.com/marcoolucio17"
              url="https://github.com/marcoolucio17"
            />

            <ContactLink
              type="linkedin"
              address="Marco Lucio"
              url="https://linkedin.com/in/marco"
            />

            <ContactLink
              type="spotify"
              address="Marcoco's Spotify"
              url="https://open.spotify.com/user/luigilucs"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
