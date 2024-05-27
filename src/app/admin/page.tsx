import CardsForm, { CardFormSkeleton } from '@/components/admin/CardsForm'
import CardsStatsWrapper, { Cards } from '@/components/admin/CardsStatsWrapper'
import CreateFormButton from '@/components/admin/CreateFormButton'
import Navigation from '@/components/global/Navigation'
import { Separator } from '@/components/ui/separator'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import React, { Suspense } from 'react'

const Page = () => {
  return (
    <main className='container h-min-full pt-4'>
      <Suspense fallback={<Cards loading={true}/>}>
        <CardsStatsWrapper/>
      </Suspense>
      <Separator className='my-6'/>
        <h2 className='text-4xl font-bold col-span-2'>Seus formulários</h2>
      <Separator className='my-6'/>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        <CreateFormButton/>
        <Suspense fallback={[1, 2].map(el => <CardFormSkeleton key={el} />)}>
          <CardsForm />
        </Suspense>
      </div>
    </main>
  )
}

export default Page
