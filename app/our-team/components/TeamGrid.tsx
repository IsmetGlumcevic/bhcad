import Image from "next/image";
import type { TeamMember } from "../../data/team";

type TeamGridProps = {
  members: ReadonlyArray<TeamMember>;
};

export function TeamGrid({ members }: TeamGridProps) {
  return (
    <section className="bg-gradient-to-b from-[#e8f7f1] via-[#e9fbf7] to-[#c9f2e5] py-16 md:py-24">
      <div className="mx-auto max-w-[1600px] px-4 md:px-6 lg:px-8">
        <ul className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4 lg:[&>li:nth-last-child(2)]:col-start-2 lg:[&>li:last-child]:col-start-3">
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
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
