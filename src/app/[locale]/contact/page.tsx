import { useTranslations } from 'next-intl'

export default function ContactPage() {
  const t = useTranslations('about');

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
        {t('title')}
      </h1>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        {t('subtitle')}
      </p>
      {/* Contact form or details would go here */}
    </div>
  )
}
