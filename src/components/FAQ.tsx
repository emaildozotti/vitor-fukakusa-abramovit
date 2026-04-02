import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { FadeIn } from './FadeIn'

// ════════════════════════════════════════════════════════════════════
// COPY — SUBSTITUIR POR CLIENTE (lp-copy.md → Bloco 8 FAQ)
// ════════════════════════════════════════════════════════════════════
const COPY = {
  eyebrow: 'Perguntas frequentes',
  heading: 'O que você ainda quer saber antes de começar',
  faqs: [
    {
      q: 'A terapia vai resolver meu problema rápido?',
      a: 'Não existe um prazo fixo, e isso não seria honesto de prometer. O tempo de um processo terapêutico depende do que cada pessoa traz e do ritmo com que ela consegue se mover. O que posso garantir é que o processo tem estrutura, tem direção e não fica dando voltas sem propósito.',
    },
    {
      q: 'E se eu nunca tiver feito terapia antes?',
      a: 'Não precisa de experiência anterior. A primeira sessão é exatamente para você entender como funciona e sentir se existe confiança e alinhamento. O processo começa do ponto em que você está, não de onde você deveria estar.',
    },
    {
      q: 'Tenho medo de me abrir e ser julgado.',
      a: 'Esse medo é mais comum do que parece, e ele não some logo de cara. O espaço terapêutico não é um tribunal. Eu não estou ali para avaliar se você é bom ou mau, certo ou errado. Estou ali para escutar sem filtro e ajudar você a enxergar o que você mesmo ainda não consegue ver.',
    },
    {
      q: 'Você atende casos de depressão severa?',
      a: 'Não atendo casos em que a depressão severa compromete a energia vital a ponto de inviabilizar o vínculo terapêutico. Nesses casos, farei o encaminhamento ético para o profissional mais adequado. Transparência sobre o que eu posso e o que eu não posso oferecer faz parte do meu trabalho.',
    },
    {
      q: 'Já tentei terapia antes e não funcionou. Por que seria diferente agora?',
      a: 'Essa é uma preocupação legítima. Nem toda abordagem funciona para toda pessoa. A psicoterapia humanista existencial tem uma perspectiva específica: ela não trata sintomas como problemas isolados, ela trabalha com quem você é, com o que você evita e com o que você quer assumir. Se você chegou até aqui, talvez seja porque algo nessa perspectiva faz sentido para o seu momento.',
    },
  ],
}
// ════════════════════════════════════════════════════════════════════

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  const toggle = (i: number) => setOpen(open === i ? null : i)

  return (
    <section
      className="section-padding"
      style={{ backgroundColor: 'var(--color-bg-warm)' }}
    >
      <div className="container-ultra">
        {/* Section header */}
        <FadeIn>
          <div className="flex items-center gap-4 mb-4">
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
            className="text-3xl md:text-4xl mb-10 md:mb-14"
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--color-primary)',
              fontWeight: 400,
              lineHeight: 1.2,
            }}
          >
            {COPY.heading}
          </h2>
        </FadeIn>

        {/* Accordion */}
        <div className="flex flex-col gap-0">
          {COPY.faqs.map((faq, i) => (
            <FadeIn key={i} delay={0.05 * i}>
              <div
                style={{
                  borderTop: `1px solid color-mix(in srgb, var(--color-primary) 12%, transparent)`,
                  ...(i === COPY.faqs.length - 1
                    ? { borderBottom: `1px solid color-mix(in srgb, var(--color-primary) 12%, transparent)` }
                    : {}),
                }}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-6 py-5 md:py-6 text-left cursor-pointer"
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    padding: '1.25rem 0',
                  }}
                  aria-expanded={open === i}
                >
                  <span
                    className="text-base md:text-lg"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      color: 'var(--color-primary)',
                      fontWeight: 400,
                      lineHeight: 1.4,
                    }}
                  >
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: open === i ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="shrink-0"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ stroke: 'var(--color-secondary)' }}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p
                        className="text-sm md:text-base leading-relaxed pb-6"
                        style={{
                          fontFamily: 'var(--font-sans)',
                          color: 'var(--color-primary)',
                          fontWeight: 300,
                          lineHeight: 1.85,
                          opacity: 0.8,
                          maxWidth: '680px',
                        }}
                      >
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
