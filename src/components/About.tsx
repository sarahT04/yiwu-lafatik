import { Target, Eye, Users } from "lucide-react";

export function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl mb-6">About Us</h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Yiwu Lafatik Trade Co., Ltd is pioneering trade relations between Timor-Leste and China,
              committed to facilitating seamless international commerce and logistics solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-6 text-center">Who We Are</h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Established as the first trade company from Timor-Leste in China, Yiwu Lafatik Trade Co., Ltd
                represents a historic milestone in bilateral trade relations between our nations.
                We are headquartered in Yiwu, the world's largest wholesale market, with operations
                extending to Dili, Timor-Leste.
              </p>
              <p>
                Our company was founded on the principle that strong trade partnerships can transform
                economies and create opportunities for businesses of all sizes. We specialize in
                connecting small and medium enterprises (UMKM) in Timor-Leste with manufacturers
                and suppliers in China, while also serving larger corporations and government agencies.
              </p>
              <p>
                With deep understanding of both Chinese and Timorese markets, we navigate cultural
                nuances, language barriers, and regulatory requirements to ensure smooth transactions
                and timely deliveries. Our team brings together expertise in international trade,
                logistics, customs clearance, and supply chain management.
              </p>
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
              <h2 className="text-2xl md:text-3xl mb-4">Our Vision</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To become the leading bridge between Timor-Leste and global markets, empowering
                businesses through reliable logistics solutions and fostering sustainable economic
                growth for our nation.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 md:p-10 shadow-sm border border-border">
              <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                <Target className="text-secondary" size={28} />
              </div>
              <h2 className="text-2xl md:text-3xl mb-4">Our Mission</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To provide trustworthy, efficient, and cost-effective trade and logistics services
                that connect Timorese businesses to international opportunities while maintaining
                the highest standards of professionalism and customer care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary" size={32} />
              </div>
              <h3 className="mb-2">Trust</h3>
              <p className="text-muted-foreground">
                Building lasting relationships through transparency and reliability
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 border-4 border-secondary border-t-transparent rounded-full" />
              </div>
              <h3 className="mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                Committed to delivering superior service in every interaction
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-foreground rounded" />
              </div>
              <h3 className="mb-2">Integrity</h3>
              <p className="text-muted-foreground">
                Operating with honesty and ethical practices at all times
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="flex gap-1">
                  <div className="w-2 h-8 bg-primary rounded" />
                  <div className="w-2 h-6 bg-primary rounded mt-2" />
                  <div className="w-2 h-4 bg-primary rounded mt-4" />
                </div>
              </div>
              <h3 className="mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                Continuously improving our processes and services
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
