type Feature = {
  title: string;
  description: string;
  icon: React.ElementType;
};

type AboutProps = {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  experience: {
    total: string;
    description: string;
  };
  images: {
    main: string;
    second: string;
  };
  features: Feature[];
};

export default function About({
  badge,
  title,
  description,
  buttonText,
  experience,
  images,
  features,
}: AboutProps) {
  return (
    <section
      className="px-4 pt-20 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-20 bg-white"
      id="about"
    >
      <div className="relative md:w-1/2">
        <div className="flex gap-6">
          <img
            src={images.main}
            alt="About Image"
            className="w-40 h-136 md:w-50 md:h-146 lg:w-96 lg:h-136 object-cover"
          />
          <div className="w-56 h-74 md:h-84 lg:h-74 text-center bg-primary flex flex-col items-center justify-center text-white p-4 space-y-4">
            <h2 className="text-6xl font-bold">{experience.total}</h2>
            <p>{experience.description}</p>
          </div>
        </div>
        <img
          src={images.second}
          alt="About Image"
          className="absolute w-80 h-56 bottom-0 right-0 object-cover"
        />
      </div>
      <div className="md:w-1/2 space-y-6">
        <p className="uppercase tracking-[0.3em] text-sm font-medium text-primary">
          {badge}
        </p>
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="mt-4 text-gray-500 leading-relaxed max-w-2xl">
          {description}
        </p>
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <div key={index} className="flex items-center gap-4">
              <div className="bg-secondary rounded-md p-3">
                <Icon className="w-12 h-12" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">{feature.title}</h2>
                <p>{feature.description}</p>
              </div>
            </div>
          );
        })}
        <a href="#">
          <button className="mt-2 cursor-pointer py-3 px-8 bg-primary rounded-lg text-white font-medium text-lg hover:bg-primary/90 transition-all duration-300">
            {buttonText}
          </button>
        </a>
      </div>
    </section>
  );
}
