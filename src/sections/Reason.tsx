import reasonImage from "@/assets/reason.png";
import bijiKopiImage from "@/assets/about.png";

export default function Reason() {
  return (
    <section className="py-20 flex justify-items-stretch bg-white" id="reason">
      <div className="w-1/2 flex">
        <div className="w-1/2 bg-primary p-10 flex flex-col justify-center">
          <span className="text-sm uppercase tracking-[0.3em] text-secondary font-medium">
            Experience
          </span>

          <h2 className="mt-4 text-4xl font-semibold text-white leading-tight">
            Why Choose Us?
          </h2>

          <p className="mt-4 text-gray-200 leading-relaxed">
            Teduh Coffee hadir untuk menghadirkan lebih dari sekadar kopi.
            Dengan biji kopi pilihan, suasana yang hangat, dan pelayanan yang
            ramah.
          </p>

          <a href="#">
            <button className="mt-6 cursor-pointer py-3 px-8 bg-white rounded-lg text-primary font-medium text-lg hover:opacity-90 transition">
              Explore More
            </button>
          </a>
        </div>

        <div className="w-1/2">
          <img
            src={reasonImage}
            alt="Reason Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="w-1/2 bg-secondary p-10 text-primary flex flex-col items-center justify-center">
        <div className="relative">
          <img
            src={bijiKopiImage}
            alt="Second About Image"
            className="absolute w-30 top-0 -right-2 rotate-40 bg"
          />
          <p className="uppercase tracking-[0.3em] text-sm font-medium">
            Our Promise
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight">
            Dibuat untuk
            <br />
            Menemani Momenmu
          </h2>
          <p className="mt-4 text-primary/80 leading-relaxed">
            Teduh Coffee menghadirkan perpaduan rasa, suasana, dan kenyamanan
            dalam setiap sudutnya. Dari biji kopi pilihan hingga ruang yang
            hangat dan tenang, kami menciptakan tempat untuk menikmati waktu
            dengan lebih bermakna.
          </p>

          <a href="#">
            <button className="mt-6 cursor-pointer py-3 px-8 bg-primary rounded-lg text-white font-medium text-lg hover:opacity-90 transition">
              Explore More
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
