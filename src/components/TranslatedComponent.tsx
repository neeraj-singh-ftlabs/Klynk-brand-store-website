'use client'

import { useTranslation } from 'react-i18next'

export default function TranslatedContent() {
  const { t } = useTranslation()

  return (
    <div>
      <h1>{t('greeting')}</h1>
      <p>{t('welcome')}</p>
    </div>
  )
}