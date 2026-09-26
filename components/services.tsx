import { FileText, Smartphone, PenTool } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <FileText size={40} />,
      title: "Web Development",
      description:
        "We build websites using the latest technologies. Creating responsive and user-friendly interfaces that provide an excellent user experience.",
    },
    {
      icon: <Smartphone size={40} />,
      title: "Mobile Development",
      description:
        "We build mobile apps for iOS and Android. Creating native-like experiences with cross-platform technologies like React Native.",
    },
    {
      icon: <PenTool size={40} />,
      title: "Design",
      description:
        "We design beautiful and responsive websites. Creating visually appealing interfaces that engage users and drive conversions.",
    },
  ];

  return (
    <section
      id="services"
      className="bg-[#FAF7F2] px-4 py-20 dark:bg-[#0C1014] md:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <span className="eyebrow">How I can help</span>
          <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.05em] text-[#111111] dark:text-white sm:text-5xl">
            From a useful idea to a product people can rely on.
          </h2>
          <p className="mt-6 text-base leading-8 text-[#334155] dark:text-slate-300">
            I combine product thinking, interface craft, and full-stack delivery
            to turn complex needs into focused digital experiences.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden border border-[#111111]/10 bg-[#111111]/10 md:grid-cols-3 dark:border-white/10 dark:bg-white/10">
          {services.map((service) => (
            <article key={service.title} className="group bg-[#FAF7F2] p-8 transition-colors hover:bg-white dark:bg-[#0C1014] dark:hover:bg-[#141a1f]">
              <div className="mb-8 inline-flex border border-[#B45309]/30 bg-[#B45309]/10 p-3 text-[#B45309] transition-transform duration-300 group-hover:-translate-y-1">
                {service.icon}
              </div>
              <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-[#111111] dark:text-white">{service.title}</h3>
              <p className="mt-4 leading-7 text-[#334155] dark:text-slate-300">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
