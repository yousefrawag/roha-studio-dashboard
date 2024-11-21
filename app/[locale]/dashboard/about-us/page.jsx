import React from 'react'
import { useTranslations } from 'next-intl'

const Aboutus = () => {
    const t = useTranslations()
  return (
    <div className='dark:text-gray-200 text-gray-800'>{t("homepage")}</div>
  )
}

export default Aboutus