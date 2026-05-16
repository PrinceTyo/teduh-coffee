type ReasonProps = {
  badgeLeft: string;
  titleLeft: string;
  descriptionLeft: string;
  image: string;
  ornamentImage: string;
  buttonText: string;
  badgeRight: string;
  titleRight: string;
  descriptionRight: string;
};

export default function Reason({
  badgeLeft,
  titleLeft,
  descriptionLeft,
  image,
  ornamentImage,
  buttonText,
  badgeRight,
  titleRight,
  descriptionRight,
}: ReasonProps) {
  return (
    <section
      className="py-20 flex flex-col md:flex-row lg:justify-items-stretch bg-white"
      id="reason"
    >
      <div className="md:w-1/2 flex">
        <div className="lg:w-1/2 bg-primary p-10 flex flex-col justify-center">
          <span className="text-sm uppercase tracking-[0.3em] text-secondary font-medium">
            {badgeLeft}
          </span>

          <h2 className="mt-4 text-4xl font-semibold text-white leading-tight">
            {titleLeft}
          </h2>

          <p className="mt-4 text-gray-200 leading-relaxed">
            {descriptionLeft}
          </p>

          <a href="#">
            <button className="mt-6 cursor-pointer py-3 px-8 bg-white rounded-lg text-primary font-medium text-lg hover:opacity-90 transition">
              {buttonText}
            </button>
          </a>
        </div>

        <div className="hidden lg:flex lg:w-1/2">
          <img
            src={image}
            alt="Reason Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="md:w-1/2 bg-secondary p-10 text-primary flex flex-col items-center justify-center">
        <div className="relative">
          <img
            src={ornamentImage}
            alt="Second About Image"
            className="hidden lg:flex absolute w-30 top-0 -right-2 rotate-40 bg"
          />
          <p className="uppercase tracking-[0.3em] text-sm font-medium">
            {badgeRight}
          </p>
          <h2 className="md:w-3/5 mt-4 text-4xl font-semibold leading-tight">
            {titleRight}
          </h2>
          <p className="mt-4 text-primary/80 leading-relaxed">
            {descriptionRight}
          </p>

          <a href="#">
            <button className="mt-6 cursor-pointer py-3 px-8 bg-primary rounded-lg text-white font-medium text-lg hover:opacity-90 transition">
              {buttonText}
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
