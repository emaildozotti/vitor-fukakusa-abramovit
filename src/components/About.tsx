import { useState } from 'react'
import { FadeIn } from './FadeIn'
import { SITE } from '../site.config'

// ════════════════════════════════════════════════════════════════════
// COPY — SUBSTITUIR POR CLIENTE (lp-copy.md → Bloco 5 Sobre)
// ════════════════════════════════════════════════════════════════════
const COPY = {
  eyebrow: 'Quem é Vitor Fuka',
  heading: 'Minha autoridade não veio de um gabinete. Veio da',
  headingEm: 'dor real',
  paragraphs: [
    'Eu não cheguei à psicologia por acaso. Desde cedo, percebi que as pessoas carregavam algo que não conseguiam nomear, e que isso pesava de um jeito que nenhum conselho resolvia. Quando comecei meu estágio clínico em um hospital público, isso deixou de ser uma intuição e virou uma certeza. Lá, a dor humana não tem filtro. Não tem edição. E foi nesse ambiente que eu aprendi o que é realmente acolher alguém.',
    'Vi de perto a transformação de pessoas que chegavam paralisadas e saíam com mais clareza sobre si mesmas. Não era magia. Era processo. Era tempo. Era a fragmentação gradual das ilusões que mantinham essas pessoas presas. Cada caso reafirmou o que a Psicologia Humanista Existencial já me ensinava: a mudança real exige que o sujeito se assuma, com toda a coragem que isso pede.',
    'Hoje, minha missão é oferecer um espaço de escuta genuína para adultos que estão funcionando, mas que sentem que algo está profundamente fora de lugar. Não trabalho com ilusões de rápido nem com promessas de felicidade. Trabalho com a realidade de cada pessoa, no ritmo que o processo exige, com o limite ético que a profissão demanda.',
  ],
  transition: 'Se você está pronto para começar, o próximo passo é simples.',
  ctaText: 'Quero conversar com Vitor',
}
// ════════════════════════════════════════════════════════════════════

export default function About() {
  const [imgError, setImgError] = useState(false)

  return (
    <section
      className="section-padding-lg"
      style={{ backgroundColor: 'var(--color-bg-warm)' }}
    >
      <div className="container-ultra">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-stretch">

          {/* Copy — mobile: first */}
          <div className="flex flex-col gap-7 order-1 md:order-2">
            <FadeIn>
              <div className="flex items-center gap-4 mb-2">
                <div
                  style={{
                    width: '2px',
                    height: '40px',
                    backgroundColor: 'var(--color-secondary)',
                    opacity: 0.7,
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                />
                <span className="eyebrow-ultra" style={{ color: 'var(--color-secondary)' }}>
                  {COPY.eyebrow}
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2
                className="text-3xl md:text-4xl leading-tight"
                style={{
                  fontFamily: 'var(--font-display)',
                  color: 'var(--color-primary)',
                  fontWeight: 400,
                  lineHeight: 1.2,
                }}
              >
                {COPY.heading}{' '}
                <em style={{ color: 'var(--color-secondary)' }}>{COPY.headingEm}</em>
              </h2>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p
                className="text-sm md:text-base leading-relaxed"
                style={{
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--color-text-main)',
                  fontWeight: 300,
                  lineHeight: 1.85,
                  opacity: 0.85,
                }}
              >
                {COPY.paragraphs[0]}
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div
                className="pl-5"
                style={{ borderLeft: `2px solid color-mix(in srgb, var(--color-secondary) 50%, transparent)` }}
              >
                <p
                  className="text-sm md:text-base leading-relaxed"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    color: 'var(--color-text-main)',
                    fontWeight: 400,
                    lineHeight: 1.85,
                    fontStyle: 'italic',
                    opacity: 0.9,
                  }}
                >
                  {COPY.paragraphs[1]}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <p
                className="text-sm md:text-base leading-relaxed"
                style={{
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--color-text-main)',
                  fontWeight: 300,
                  lineHeight: 1.85,
                  opacity: 0.85,
                }}
              >
                {COPY.paragraphs[2]}
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div
                className="pt-2 pb-4"
                style={{ borderTop: `1px solid color-mix(in srgb, var(--color-secondary) 25%, transparent)` }}
              >
                <span
                  className="eyebrow-ultra"
                  style={{ color: 'var(--color-primary)', opacity: 0.55 }}
                >
                  {SITE.credenciais}
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.35}>
              <p
                className="text-sm"
                style={{
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--color-primary)',
                  fontWeight: 300,
                  opacity: 0.65,
                  fontStyle: 'italic',
                }}
              >
                {COPY.transition}
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <a
                href={SITE.waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer rounded-sm text-sm font-medium tracking-wide self-start"
                style={{
                  backgroundColor: 'var(--color-primary)',
                  color: 'var(--color-off-white)',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 500,
                  textDecoration: 'none',
                }}
              >
                {COPY.ctaText}
              </a>
            </FadeIn>
          </div>

          {/* Photo — mobile: second */}
          <div className="order-2 md:order-1">
            <FadeIn delay={0.1} className="w-full">
              <div className="relative w-full md:w-auto">
                {!imgError ? (
                  <img
                    src={SITE.fotoAbout}
                    alt={SITE.nomeCurto}
                    onError={() => setImgError(true)}
                    className="object-cover object-top w-full md:w-[380px]"
                    style={{
                      aspectRatio: '3 / 4',
                      borderRadius: '16px 4px 16px 4px',
                    }}
                  />
                ) : (
                  <div
                    className="flex items-center justify-center w-full md:w-[380px]"
                    style={{
                      aspectRatio: '3 / 4',
                      borderRadius: '16px 4px 16px 4px',
                      background: `linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)`,
                      border: `1px solid color-mix(in srgb, var(--color-secondary) 20%, transparent)`,
                    }}
                  >
                    <div className="text-center" style={{ color: 'var(--color-secondary)', opacity: 0.5 }}>
                      <div
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '3rem',
                          lineHeight: 1,
                          marginBottom: '0.5rem',
                        }}
                      >
                        {SITE.iniciais}
                      </div>
                      <div
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '10px',
                          letterSpacing: '0.2em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {SITE.nomeCurto}
                      </div>
                    </div>
                  </div>
                )}
                {/* Decorative line */}
                <div
                  className="absolute -left-4 top-8 bottom-8 hidden md:block"
                  style={{
                    width: '2px',
                    backgroundColor: 'var(--color-secondary)',
                    opacity: 0.4,
                  }}
                  aria-hidden="true"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
