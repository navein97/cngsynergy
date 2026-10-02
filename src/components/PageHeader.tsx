import type { ReactNode } from "react";

/** Navy title band at the top of every inner page. */
export function PageHeader({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <header className="on-dark bg-ink text-white">
      <div className="shell pb-14 pt-12 sm:pb-20 sm:pt-16">
        <h1 className="display-1">{title}</h1>
        <div className="lane mt-8 max-w-md text-signal" />
        {children && (
          <div className="mt-8 max-w-3xl text-xl leading-relaxed text-mist sm:text-[1.375rem]">
            {children}
          </div>
        )}
      </div>
    </header>
  );
}
