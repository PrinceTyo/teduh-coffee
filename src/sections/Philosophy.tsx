type PhilosophyItem = {
  title: string;
  description: string;
  icon: React.ElementType;
};

type PhilosophyProps = {
  badge: string;
  title: string;
  ornamentImage: string;
  image: string;
  leftItems: PhilosophyItem[];
  rightItems: PhilosophyItem[];
};

export default function Philosophy({
  badge,
  title,
  ornamentImage,
  image,
  leftItems,
  rightItems,
}: PhilosophyProps) {
  return (
    <section className="px-4 pb-20 lg:px-20 bg-white" id="philosophy">
      <div className="relative flex flex-col items-center justify-center text-center space-y-2">
        <img
          src={ornamentImage}
          alt="Second About Image"
          className="hidden lg:flex absolute w-30 -top-10 -right-8 rotate-40"
        />
        <img
          src={ornamentImage}
          alt="Second About Image"
          className="hidden lg:flex absolute w-30 -top-10 -left-8 -rotate-40"
        />
        <span className="uppercase tracking-[0.3em] text-sm font-medium text-primary">
          {badge}
        </span>
        <h2 className="text-4xl font-bold text-black leading-tight">{title}</h2>
        <div className="mt-1 w-30 h-1 bg-primary"></div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-around mt-16 md:mt-10 gap-y-10 md:gap-y-0">
        <div className="md:w-1/3 space-y-8 md:space-y-12">
          {leftItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} className="flex items-center text-end gap-6">
                <div className="flex flex-col items-end">
                  <h2 className="uppercase font-bold text-xl text-primary">
                    {item.title}
                  </h2>
                  <div className="mb-2 -mt-0.5 w-20 h-0.75 bg-primary"></div>
                  <p className="text-sm">{item.description}</p>
                </div>
                <div>
                  <Icon className="h-16 w-16 text-primary" />
                </div>
              </div>
            );
          })}
        </div>

        <div>
          <img src={image} alt="Philosophy Image" className="h-106" />
        </div>

        <div className="md:w-1/3 space-y-8 md:space-y-12">
          {rightItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} className="flex items-center text-start gap-6">
                <div>
                  <Icon className="h-16 w-16 text-primary" />
                </div>
                <div className="flex flex-col items-star">
                  <h2 className="uppercase font-bold text-xl text-primary">
                    {item.title}
                  </h2>
                  <div className="mb-2 -mt-0.5 w-20 h-0.75 bg-primary"></div>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
