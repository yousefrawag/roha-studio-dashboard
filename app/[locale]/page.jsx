import React from 'react'
import { useTranslations } from 'next-intl'
const Home = () => {
  const t = useTranslations()
  return (
    <div>
      {
  t("homepage")
      }
   
    </div>
  )
}

export default Home
