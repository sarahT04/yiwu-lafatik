import { useTranslation } from "react-i18next";

export function Team() {
  const { t } = useTranslation();
  const teamMembers = [
    {
      name: t("team.members.0.name"),
      role: t("team.members.0.role"),
      image: "https://ik.imagekit.io/yiwulafatik/team.jpg",
      bio: t("team.members.0.bio"),
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-linear-to-r from-primary to-secondary text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl mb-6">
              {t("team.hero.title")}
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              {t("team.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 max-w-md mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md border border-border hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 whitespace-pre-line">
                  <h3 className="text-xl mb-1">{member.name}</h3>
                  <p className="text-primary mb-4">{member.role}</p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
