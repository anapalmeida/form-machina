import CardsForm, { CardFormSkeleton } from '@/components/admin/CardsForm'
import CardsStatsWrapper, { Cards } from '@/components/admin/CardsStatsWrapper'
import CreateFormButton from '@/components/admin/CreateFormButton'
import Navigation from '@/components/global/Navigation'
import { Separator } from '@/components/ui/separator'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import React, { ReactNode, Suspense } from 'react'

const layout = ({children}: {children: ReactNode}) => {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <Navigation />
        {children}
    </ClerkProvider>
  )
}

export default layout
