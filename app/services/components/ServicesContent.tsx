import { IconCad, IconCog, IconLaptop, IconQuote, IconWindows } from "../../components/icons";

export function ServicesContent() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl font-heading tracking-[5px] text-primary">Services</h2>
          <p className="mx-auto mt-6 max-w-3xl text-muted md:text-2xl">
            Our dedicated team of experts is here to streamline your operations,
            enhance your technological capabilities, and drive your business forward.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-10 text-center md:grid-cols-5 md:text-2xl">
          <div className="flex flex-col items-center gap-4">
            <IconWindows className="h-28 w-28 text-primary" aria-hidden />
            <div className="font-bold">Administrative services</div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <IconCog className="h-28 w-28 text-primary" aria-hidden />
            <div className="font-bold">Engineering</div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <IconQuote className="h-28 w-28 text-primary" aria-hidden />
            <div className="font-bold">Quoting</div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <IconCad className="h-28 w-28 text-primary" aria-hidden />
            <div className="font-bold">CAD/CAM Technical support</div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <IconLaptop className="h-28 w-28 text-primary" aria-hidden />
            <div className="font-bold">Technical consulting and support</div>
          </div>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3 text-[17px]">
          <article>
            <h3 className="text-lg font-semibold text-foreground">CAD/CAM Technical support</h3>
            <p className="mt-2 text-muted">
              At bhCAD, we pride ourselves on providing top-notch CAD/CAM
              technical support, which includes 2D and 3D drawing services
              and machine element programming. Our expert team utilizes the
              latest technologies to assist you in designing and developing
              high-quality products. Whether it’s creating detailed
              technical drawings or programming complex machine parts, we
              ensure precision and efficiency at every step.
            </p>
          </article>
          <article>
            <h3 className="text-lg font-semibold text-foreground">Technical consulting and support</h3>
            <p className="mt-2 text-muted">
              Our technical support encompasses essential consulting
              services to enhance your business operations. We offer
              comprehensive technical consulting to ensure your equipment
              and software operate optimally, maximizing efficiency and
              minimizing downtime.
            </p>
          </article>
          <article className="lg:row-span-2">
            <h3 className="text-lg font-semibold text-foreground">Administrative Services</h3>
            <p className="mt-2 text-muted">
              Welcome to our Administrative Services Hub! We specialize in
              streamlining your administrative tasks, allowing you to focus
              on what truly matters - growing your business. From managing
              schedules and coordinating meetings to handling correspondence
              and data entry, our dedicated team ensures seamless operations.
              Trust us to optimize efficiency and enhance productivity, so
              you can achieve your goals with ease.
            </p>
            <p className="mt-4 text-muted">
              Discover the power of efficient administration with our
              comprehensive services. From organizing your inbox to
              orchestrating complex projects, we&apos;re here to lighten
              your workload and elevate your productivity. With attention to
              detail and a commitment to excellence, let us be your trusted
              partner in navigating the demands of modern business.
            </p>
          </article>
          <article>
            <h3 className="text-lg font-semibold text-foreground">Nesting and Quoting in ERP Packages</h3>
            <p className="mt-2 text-muted">
              We optimize fabrication processes and reduce waste through
              advanced nesting techniques. Additionally, we offer quoting
              services within ERP packages, ensuring your processes are not
              only efficient but also cost‑effective.
            </p>
          </article>
          <article>
            <h3 className="text-lg font-semibold text-foreground">Drawing and part fabrication</h3>
            <p className="mt-2 text-muted">
              Our team specializes in creating precise technical drawings
              that meet the highest industry standards. No matter the
              complexity of your requirements, we are here to provide
              solutions tailored to your specific needs.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

