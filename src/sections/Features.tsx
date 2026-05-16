import { Separator } from "@/components/ui/separator";

type FeatureItem = {
  title: string;
  description: string;
  image: string;
};

type FeaturesProps = {
  title: string;
  ornamentImage: string;
  items: FeatureItem[];
};

export default function Features({
  title,
  ornamentImage,
  items,
}: FeaturesProps) {
  return (
    <section
      className="relative px-4 py-20 lg:px-20 text-center bg-white overflow-x-hidden"
      id="features"
    >
      <img
        src={ornamentImage}
        alt="Second About Image"
        className="hidden md:flex md:absolute w-30 top-20 -left-8 rotate-40"
      />
      <h1 className="text-5xl font-bold">{title}</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 mt-16 gap-10">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center text-center"
          >
            <img
              src={item.image}
              alt="Espresso"
              className="w-20 h-20 rounded-full p-1 bg-secondary border border-primary"
            />
            <h2 className="text-2xl font-bold mt-4">{item.title}</h2>
            <p className="mt-2 text-gray-500">{item.description}</p>
            {index !== items.length - 1 && (
              <div className="hidden lg:block absolute -right-5 -bottom-25 -translate-y-1/2 h-40">
                <Separator
                  orientation="vertical"
                  className="h-full bg-primary"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
