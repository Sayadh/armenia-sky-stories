import { ChevronDown } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="/images/hero-bright.png"
          alt="Հայաստանի լեռնային բնապատկերը օդից"
          className="h-full w-full animate-slow-zoom object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-black/55" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="glass-dark mb-5 inline-block rounded-full px-4 py-1.5 text-sm font-medium text-white">
          Armenia Sky Stories
        </p>
        <h1 className="font-heading text-4xl font-bold leading-tight text-white text-balance drop-shadow-lg sm:text-6xl md:text-7xl">
          Հայաստանը՝ նոր տեսանկյունից
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/90 text-pretty sm:text-lg">
          Պրոֆեսիոնալ դրոնային նկարահանումներ Հայաստանի ողջ տարածքում։ Տեսարժան
          վայրեր, հողատարածքներ, առանձնատներ, զբոսաշրջային նախագծեր և անհատական
          նկարահանումներ։
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="w-full rounded-full bg-accent px-8 py-4 text-base font-semibold text-accent-foreground shadow-xl transition-transform hover:scale-105 sm:w-auto"
          >
            Պատվիրել նկարահանում
          </a>
          <a
            href="#portfolio"
            className="glass-dark w-full rounded-full px-8 py-4 text-base font-semibold text-white transition-transform hover:scale-105 sm:w-auto"
          >
            Դիտել աշխատանքները
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Ոլորել ներքև"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/90"
      >
        <ChevronDown className="h-8 w-8 animate-scroll-bob" />
      </a>
    </section>
  )
}
