import Image from "next/image";
import type { TeamMember } from "../../data/team";

type TeamGridProps = {
  members: ReadonlyArray<TeamMember>;
};

export function TeamGrid({ members }: TeamGridProps) {
  return (
    <section className="bg-gradient-to-b from-[#e8f7f1] via-[#e9fbf7] to-[#c9f2e5] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <ul className="grid grid-cols-2 gap-10 md:hidden">
          {members.map((member) => (
            <li key={member.name} className="">
              <div className="overflow-hidden rounded-xl bg-white shadow-xl shadow-emerald-300/40">
                <Image
                  src={member.src}
                  alt={member.alt}
                  width={520}
                  height={640}
                  className={`h-auto w-full object-cover ${member.grayscale ? "grayscale" : ""}`}
                />
              </div>
              <p className="mt-4 text-center text-sm font-semibold tracking-[0.25em] text-primary">
                {member.name}
              </p>
            </li>
          ))}
        </ul>

        <ul className="hidden gap-10 md:grid md:grid-cols-3 md:px-10">
          {members.slice(0, 3).map((member) => (
            <li key={member.name} className="">
              <div className="overflow-hidden rounded-xl bg-white shadow-xl shadow-emerald-300/40">
                <Image
                  src={member.src}
                  alt={member.alt}
                  width={520}
                  height={640}
                  className={`h-auto w-full object-cover ${member.grayscale ? "grayscale" : ""}`}
                />
              </div>
              <p className="mt-4 text-center text-sm font-semibold tracking-[0.25em] text-primary">
                {member.name}
              </p>
            </li>
          ))}
        </ul>

        <ul className="mt-14 hidden gap-10 md:grid md:grid-cols-4">
          {members.slice(3).map((member) => (
            <li key={member.name} className="">
              <div className="overflow-hidden rounded-xl bg-white shadow-xl shadow-emerald-300/40">
                <Image
                  src={member.src}
                  alt={member.alt}
                  width={520}
                  height={640}
                  className={`h-auto w-full object-cover ${member.grayscale ? "grayscale" : ""}`}
                />
              </div>
              <p className="mt-4 text-center text-sm font-semibold tracking-[0.25em] text-primary">
                {member.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

