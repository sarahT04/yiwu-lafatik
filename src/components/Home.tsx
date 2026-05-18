import { useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import {
  Ship,
  Package,
  Warehouse,
  CheckCircle,
  Globe,
  X,
} from "lucide-react";
import {
  whoWeAreImages,
  carouselImages,
  catalogueData,
  governmentImages,
  officeImages,
} from "@/lib/datas";
import { Carousel } from "@/components/Carousel";

export function Home() {
  const { t } = useTranslation();
  // const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<{
    categoryId: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    item: any;
  } | null>(null);
  const heroItems = carouselImages.map((image) => ({
    src: image.url,
    alt: t(image.altKey),
    title: t(image.titleKey),
    subtitle: t(image.subtitleKey),
  }));
  const whoWeAreItems = whoWeAreImages.map((image) => ({
    src: image.src,
    alt: image.alt,
  }));
  const officeItems = officeImages.map((image) => ({
    src: image.src,
    alt: image.alt,
  }));
  const governmentItems = governmentImages.map((image) => ({
    ...image,
    alt: t(image.alt),
    subtitle: t(image.alt),
  }));
  const qualityCheckImages = [
    {
      src: "https://ik.imagekit.io/yiwulafatik/qc1.png",
      alt: t("home.qualityCheck.images.0.alt"),
    },
    {
      src: "https://ik.imagekit.io/yiwulafatik/qc2.png",
      alt: t("home.qualityCheck.images.1.alt"),
    },
    {
      src: "https://ik.imagekit.io/yiwulafatik/qc3.png",
      alt: t("home.qualityCheck.images.2.alt"),
    },
  ];
  const organizationalCompanies = t("home.partners.companies", {
    returnObjects: true,
  }) as { name: string; description: string }[];

  return (
    <div>
      {/* Hero Carousel */}
      <section className="relative h-125 md:h-150 overflow-hidden bg-slate-900">
        <Carousel
          items={heroItems}
          intervalMs={5000}
          className="h-full"
          controlButtonClassName="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-colors"
          controlIconClassName="text-white"
          controlIconSize={24}
          indicatorContainerClassName="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2"
          indicatorButtonClassName="w-2 h-2 rounded-full transition-all bg-white/50"
          indicatorActiveClassName="bg-white w-8"
          indicatorInactiveClassName="bg-white/50"
          renderContent={(item) => (
            <>
              <div className="absolute inset-0 bg-linear-to-r from-slate-900/80 to-slate-900/40" />
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-2xl">
                    {item.title ? (
                      <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4">
                        {item.title}
                      </h1>
                    ) : null}
                    {item.subtitle ? (
                      <p className="text-lg md:text-xl text-slate-200 mb-8">
                        {item.subtitle}
                      </p>
                    ) : null}
                    <div className="flex gap-4 flex-wrap">
                      {/* <a
                        href="#contact"
                        className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                      >
                        {t("home.cta.getQuote")}
                      </a> */}
                      <a
                        href="#services"
                        className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg hover:bg-white/20 transition-colors border border-white/20"
                      >
                        {t("home.cta.ourServices")}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        />
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6">
                {t("home.whoWeAre.title")}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                <Trans
                  i18nKey="home.whoWeAre.body"
                  components={{
                    highlight: <span className="highlight-sweep" />,
                  }}
                />
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-card rounded-lg p-6 shadow-md border border-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle className="text-primary" size={24} />
                  </div>
                  <h3 className="mb-2">
                    {t("home.whoWeAre.cards.reliability.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("home.whoWeAre.cards.reliability.body")}
                  </p>
                </div>

                <div className="bg-card rounded-lg p-6 shadow-md border border-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Globe className="text-primary" size={24} />
                  </div>
                  <h3 className="mb-2">
                    {t("home.whoWeAre.cards.globalNetwork.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("home.whoWeAre.cards.globalNetwork.body")}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-125 rounded-lg overflow-hidden shadow-lg">
              <Carousel
                items={whoWeAreItems}
                intervalMs={4000}
                className="h-full"
                controlButtonClassName="bg-white/90 p-2 rounded-full hover:bg-white transition-colors shadow-lg"
                controlIconClassName="text-foreground"
                controlIconSize={20}
                indicatorContainerClassName="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2"
                indicatorButtonClassName="w-2 h-2 rounded-full transition-all"
                indicatorActiveClassName="bg-white w-6"
                indicatorInactiveClassName="bg-white/60"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl mb-4">
              {t("home.services.title")}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t("home.services.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <Ship className="text-primary" size={24} />
              </div>
              <h3 className="mb-2">
                {t("home.services.cards.importExport.title")}
              </h3>
              <p className="text-muted-foreground text-sm">
                {t("home.services.cards.importExport.body")}
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <Package className="text-primary" size={24} />
              </div>
              <h3 className="mb-2">
                {t("home.services.cards.freightForwarding.title")}
              </h3>
              <p className="text-muted-foreground text-sm">
                {t("home.services.cards.freightForwarding.body")}
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <Warehouse className="text-primary" size={24} />
              </div>
              <h3 className="mb-2">
                {t("home.services.cards.warehousing.title")}
              </h3>
              <p className="text-muted-foreground text-sm">
                {t("home.services.cards.warehousing.body")}
              </p>
            </div>
          </div>

          {/* Business Scopes */}
          <div className="mt-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl mb-2">
                {t("home.catalogue.title")}
              </h3>
              <p className="text-muted-foreground">
                {t("home.catalogue.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-5 gap-4">
              {catalogueData.map((category) => {
                const isExpanded = false // expandedCategory === category.id;

                return (
                  <div key={category.id} className="col-span-2 sm:col-span-1">
                    <button
                      // onClick={() =>
                      //   setExpandedCategory(isExpanded ? null : category.id)
                      // }
                      className="w-full bg-white rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow text-center"
                    >
                      <div className="w-full aspect-9/16 rounded-t-lg overflow-hidden mb-3">
                        <img
                          src={category.image}
                          alt={t(category.nameKey)}
                          loading="eager"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex items-center justify-center gap-2 pt-1 pb-3">
                        <h4 className="text-sm">{t(category.nameKey)}</h4>
                        {/* <ChevronDown
                          className={`text-muted-foreground transition-transform ${isExpanded ? "rotate-180" : ""}`}
                          size={16}
                        /> */}
                      </div>
                    </button> 

                    {isExpanded && (
                      <div className="mt-2 bg-white rounded-lg border border-border shadow-sm overflow-hidden">
                        {category.items.map((item) => (
                          <button
                            key={item.id}
                            onClick={() =>
                              setSelectedItem({ categoryId: category.id, item })
                            }
                            className="w-full px-4 py-3 text-left hover:bg-muted/50 transition-colors border-b border-border last:border-b-0"
                          >
                            <p className="text-sm">{t(item.titleKey)}</p>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Item Detail Modal */}
          {selectedItem && (
            <div
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedItem(null)}
            >
              <div
                className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
                    aria-label={t("common.close")}
                  >
                    <X size={20} />
                  </button>
                  <div className="aspect-video bg-muted overflow-hidden">
                    <img
                      src={selectedItem.item.image}
                      alt={t(selectedItem.item.titleKey)}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl mb-2">
                      {t(selectedItem.item.titleKey)}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {t(selectedItem.item.descriptionKey)}
                    </p>
                    <div className="flex gap-4">
                      <a
                        href="#contact"
                        className="bg-primary text-white px-6 py-2.5 rounded-lg hover:bg-primary/90 transition-colors"
                        onClick={() => setSelectedItem(null)}
                      >
                        {t("home.catalogue.requestQuote")}
                      </a>
                      <button
                        onClick={() => setSelectedItem(null)}
                        className="bg-muted text-foreground px-6 py-2.5 rounded-lg hover:bg-muted/80 transition-colors"
                      >
                        {t("common.close")}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Our Office */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6">
                {t("home.office.title")}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {t("home.office.body")}
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center shrink-0 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <div>
                    <h4>{t("home.office.locations.china.title")}</h4>
                    <p className="text-muted-foreground">
                      {t("home.office.locations.china.body")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center shrink-0 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <div className="whitespace-pre-line">
                    <h4>{t("home.office.locations.warehouse.title")}</h4>
                    <p className="text-muted-foreground">
                      {t("home.office.locations.warehouse.body")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-100 rounded-lg overflow-hidden shadow-lg">
              <Carousel
                items={officeItems}
                intervalMs={3500}
                className="h-full"
                controlButtonClassName="bg-white/90 p-2 rounded-full hover:bg-white transition-colors shadow-lg"
                controlIconClassName="text-foreground"
                controlIconSize={20}
                indicatorContainerClassName="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2"
                indicatorButtonClassName="w-2 h-2 rounded-full transition-all"
                indicatorActiveClassName="bg-white w-6"
                indicatorInactiveClassName="bg-white/60"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Collaborating with Government */}
      <section className="py-16 md:py-24 md:px-56 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl mb-4">
              {t("home.government.title")}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t("home.government.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {governmentItems.map((image) => (
              <div
                key={image.src}
                className="rounded-lg overflow-hidden shadow-sm border border-border mx-auto"
              >
                <div
                  className={`aspect-[${image.aspectRatio}}]`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full object-cover"
                  />
                </div>
                <p className="px-4 py-3 text-sm text-center">
                  {image.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Check */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-4">
              {t("home.qualityCheck.title")}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t("home.qualityCheck.body")}
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {qualityCheckImages.map((image) => (
              <div
                key={image.src}
                className="rounded-lg overflow-hidden shadow-sm border border-border"
              >
                <div className="aspect-4/3">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Organizational Structure */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              {t("home.partners.title")}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t("home.partners.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {organizationalCompanies.map((company) => (
              <div
                key={company.name}
                className="bg-white rounded-lg p-6 shadow-sm border border-border"
              >
                <h3 className="mb-2">{company.name}</h3>
                <p className="text-muted-foreground text-sm">
                  {company.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
