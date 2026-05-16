import { Separator } from "@/components/ui/separator";

type Brand = {
  logo: string;
  title: string;
  description: string;
  socials: Social[];
};

type Social = {
  icon: React.ElementType;
  link: string;
};

type OpeningHours = {
  day: string;
  time: string;
};

type contactInfo = {
  address: string;
  phone: string;
  email: string;
  website: string;
  instagram: string;
};

type QuickLinks = {
  name: string;
  link: string;
};

type Policies = {
  name: string;
  link: string;
};

type FooterProps = {
  brand: Brand;
  openingHours: OpeningHours[];
  contactInfo: contactInfo;
  quickLinks: QuickLinks[];
  copyright: string;
  policies: Policies[];
};

export default function Footer({
  brand,
  openingHours,
  contactInfo,
  quickLinks,
  copyright,
  policies,
}: FooterProps) {
  return (
    <footer className="bg-primary px-4 py-20 md:px-20 space-y-10 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-20">
        {/* Brand */}
        <div className="space-y-3">
          <div className="flex items-center gap-x-2">
            <img src={brand.logo} alt="Logo" className="h-16" />

            <h1 className="font-semibold text-3xl">{brand.title}</h1>
          </div>

          <blockquote className="italic">{brand.description}</blockquote>

          <div className="flex items-center gap-x-3">
            {brand.socials.map((social, index) => {
              const Icon = social.icon;

              return (
                <a key={index} href={social.link}>
                  <Icon size={22} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Opening Hours */}
        <div className="space-y-3">
          <h1 className="text-2xl font-semibold mb-4">Opening Hours</h1>

          <div className="space-y-1">
            {openingHours.map((item) => (
              <dl key={item.day} className="flex items-center gap-3">
                <dt>{item.day}</dt>

                <Separator className="flex-1 bg-white/20" />

                <dd className="text-white/80">{item.time}</dd>
              </dl>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-3">
          <h1 className="text-2xl font-semibold mb-4">Contact Info</h1>

          <p className="text-md text-white/80">{contactInfo.address}</p>

          <p className="text-md text-white/80">{contactInfo.phone}</p>

          <p>
            <a
              href="#"
              className="text-md cursor-pointer hover:text-secondary transition duration-300"
            >
              {contactInfo.email}
            </a>
          </p>

          <p>
            <a
              href="#"
              className="text-md cursor-pointer hover:text-secondary transition duration-300"
            >
              {contactInfo.website}
            </a>
          </p>

          <p>
            <a
              href="#"
              className="text-md cursor-pointer hover:text-secondary transition duration-300"
            >
              {contactInfo.instagram}
            </a>
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h1 className="text-2xl font-semibold mb-4">Quick Links</h1>

          {quickLinks.map((link) => (
            <p key={link.name}>
              <a
                href={link.link}
                className="text-md cursor-pointer hover:text-secondary transition duration-300"
              >
                {link.name}
              </a>
            </p>
          ))}
        </div>
      </div>

      <Separator />

      <div className="flex flex-col md:flex-row items-start lg:items-center justify-between text-lg md:text-md gap-3">
        <p className="text-white/80">{copyright}</p>

        <div className="flex items-center gap-x-3">
          {policies.map((policy) => (
            <p key={policy.name}>
              <a
                href={policy.link}
                className="cursor-pointer hover:text-secondary transition duration-300"
              >
                {policy.name}
              </a>
            </p>
          ))}
        </div>
      </div>
    </footer>
  );
}
