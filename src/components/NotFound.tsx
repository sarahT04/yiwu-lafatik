import { Link, useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

export function NotFound() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-8 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 top-16 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-secondary/60 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-[70vh] max-w-5xl flex-col items-center justify-center px-6 py-16 text-center">
        <div className="rounded-3xl border border-border bg-card/70 px-8 py-10 shadow-xl backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {t("notFound.label")}
          </p>
          <h1 className="mt-3 font-heading text-5xl font-semibold text-foreground md:text-6xl">
            {t("notFound.title")}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("notFound.subtitle")}
          </p>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground">
            {t("notFound.body")}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/"
              className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {t("notFound.homeCta")}
            </Link>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="rounded-full border border-border px-6 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              {t("notFound.backCta")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
