import { ArrowUpIcon } from "./icons";

type BackToTopLinkProps = {
  target: string;
};

export function BackToTopLink({ target }: BackToTopLinkProps) {
  return (
    <a
      href={target}
      className="fixed bottom-6 right-6 hidden h-12 w-12 items-center justify-center rounded-full bg-secondary text-foreground shadow-lg transition hover:bg-primary/90 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary sm:flex"
      aria-label="Back to top"
    >
      <ArrowUpIcon className="h-5 w-5" aria-hidden />
    </a>
  );
}
