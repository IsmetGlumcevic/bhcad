import Image from "next/image";
import type {
  ContactDetails,
  ContactSocialIcon,
  ContactSocialLink,
} from "../../data/contact";

type ContactHeroProps = {
  details: ContactDetails;
  socialLinks: ReadonlyArray<ContactSocialLink>;
};

export function ContactHero({ details, socialLinks }: ContactHeroProps) {
  return (
    <section id="contact" className="relative isolate overflow-hidden text-white">
      <div className="absolute inset-0">
        <Image
          src="/assets/contact/contact.png"
          alt="bhCAD contact background"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-emerald-900/70" />
      </div>

      <div className="relative mx-auto flex min-h-[70vh] w-full max-w-5xl items-center px-4 py-16 md:px-6 lg:px-8">
        <div className="max-w-xl space-y-6">
          <header>
            <h1 className="text-4xl font-heading font-semibold md:text-5xl">Contact us</h1>
            <p className="mt-4 text-white/95 md:text-lg">
              You can contact us by phone or e-mail to learn more about our
              services and how we can help improve your business. Our team is
              ready to answer all your questions and provide you with the
              necessary information quickly and efficiently.
            </p>
          </header>

          <section
            aria-labelledby="contact-details-heading"
            className="space-y-6 text-white"
          >
            <h2
              id="contact-details-heading"
              className="text-2xl font-heading font-semibold text-white"
            >
              Contact information
            </h2>
            <dl className="space-y-4 text-white">
              <EmailBlock email={details.email} />
              <PhoneBlock phone={details.phone} />
              <AddressBlock address={details.address} mapEmbedUrl={details.mapEmbedUrl} />
            </dl>
            <SocialLinks links={socialLinks} />
          </section>
        </div>
      </div>
    </section>
  );
}

type EmailBlockProps = { email: string };

function EmailBlock({ email }: EmailBlockProps) {
  return (
    <div>
      <dt className="flex items-center gap-3 text-xl font-semibold">
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden>
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z" />
        </svg>
        E-mail
      </dt>
      <dd>
        <a
          href={`mailto:${email}`}
          className="mt-1 block text-white/90 underline decoration-white/40 underline-offset-4 hover:decoration-white"
        >
          {email}
        </a>
      </dd>
    </div>
  );
}

type PhoneBlockProps = { phone: string };

function PhoneBlock({ phone }: PhoneBlockProps) {
  const phoneHref = `tel:${phone.replace(/\s+/g, "")}`;
  return (
    <div>
      <dt className="flex items-center gap-3 text-xl font-semibold">
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden>
          <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.07 21 3 13.93 3 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
        Telephone
      </dt>
      <dd>
        <a href={phoneHref} className="mt-1 block text-white/90">
          {phone}
        </a>
      </dd>
    </div>
  );
}

type AddressBlockProps = {
  address: string;
  mapEmbedUrl: string;
};

function AddressBlock({ address, mapEmbedUrl }: AddressBlockProps) {
  return (
    <div>
      <dt className="flex items-center gap-3 text-xl font-semibold">
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden>
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
        </svg>
        Address
      </dt>
      <dd>
        <p className="mt-1 text-white/90">{address}</p>
        <div className="mt-3 overflow-hidden rounded-xl bg-white/90 shadow-2xl ring-1 ring-black/10">
          <iframe
            title="bhCAD location"
            src={mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-56 w-full"
            allowFullScreen
          />
        </div>
      </dd>
    </div>
  );
}

type SocialLinksProps = {
  links: ReadonlyArray<ContactSocialLink>;
};

function SocialLinks({ links }: SocialLinksProps) {
  return (
    <section className="pt-2" aria-labelledby="contact-social-heading">
      <h3 id="contact-social-heading" className="text-xl font-semibold">
        Follow us
      </h3>
      <ul className="mt-3 flex items-center gap-4" role="list">
        {links.map((link) => (
          <li key={link.name}>
            <a
              aria-label={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-emerald-700 shadow ring-1 ring-black/10"
            >
              {getSocialIcon(link.icon)}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function getSocialIcon(icon: ContactSocialIcon) {
  if (icon === "facebook") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
        <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.16 1.8.16v2h-1c-1 0-1.3.62-1.3 1.26V12h2.2l-.35 3h-1.85v7A10 10 0 0 0 22 12" />
      </svg>
    );
  }
  if (icon === "instagram") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5m5 5.8A4.2 4.2 0 1 0 16.2 12 4.2 4.2 0 0 0 12 7.8m6.5-.8a1.2 1.2 0 1 0 1.2 1.2A1.2 1.2 0 0 0 18.5 7m-6.5 2.2A2 2 0 1 1 10 11.2 2 2 0 0 1 12 9.2z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
      <path d="M19 3A2.94 2.94 0 0 1 22 6v12a2.94 2.94 0 0 1-3 3H5a2.94 2.94 0 0 1-3-3V6a2.94 2.94 0 0 1 3-3zM8.34 18.34V9.66H6V18.34H8.34zM7.17 8.5A1.67 1.67 0 1 0 5.5 6.83 1.67 1.67 0 0 0 7.17 8.5zM18.34 18.34V13.8c0-2.62-1.4-3.84-3.27-3.84a2.84 2.84 0 0 0-2.56 1.4h-.05V9.66H10.2c.03.88 0 8.68 0 8.68h2.26v-4.86a2.1 2.1 0 0 1 .1-.75 1.86 1.86 0 0 1 1.73-1.23c1.22 0 1.71.92 1.71 2.28v4.56z" />
    </svg>
  );
}
