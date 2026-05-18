import {
  Target,
  Eye,
  ShieldCheck,
  Briefcase,
  Lightbulb,
  Flag,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export function About() {
  const { t } = useTranslation();
  const whoWeAreParagraphs = t("about.whoWeAre.paragraphs", {
    returnObjects: true,
  }) as string[];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl mb-6">
              {t("about.hero.title")}
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              {t("about.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-6 text-center">
              {t("about.whoWeAre.title")}
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              {whoWeAreParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-white rounded-lg p-8 md:p-10 shadow-sm border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Eye className="text-primary" size={28} />
              </div>
              <h2 className="text-2xl md:text-3xl mb-4">
                {t("about.vision.title")}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t("about.vision.body")}
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 md:p-10 shadow-sm border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Target className="text-primary" size={28} />
              </div>
              <h2 className="text-2xl md:text-3xl mb-4">
                {t("about.mission.title")}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t("about.mission.body")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-12 text-center">
            {t("about.values.title")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="text-primary" size={32} />
              </div>
              <h3 className="mb-2">
                {t("about.values.items.integrity.title")}
              </h3>
              <p className="text-muted-foreground">
                {t("about.values.items.integrity.body")}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="text-primary" size={32} />
              </div>
              <h3 className="mb-2">
                {t("about.values.items.professionalism.title")}
              </h3>
              <p className="text-muted-foreground">
                {t("about.values.items.professionalism.body")}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="text-primary" size={32} />
              </div>
              <h3 className="mb-2">
                {t("about.values.items.innovation.title")}
              </h3>
              <p className="text-muted-foreground">
                {t("about.values.items.innovation.body")}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Flag className="text-primary" size={32} />
              </div>
              <h3 className="mb-2">
                {t("about.values.items.commitmentToCountry.title")}
              </h3>
              <p className="text-muted-foreground">
                {t("about.values.items.commitmentToCountry.body")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
