import React from 'react'
import { getFormStats } from '../../../actions/form'
import { LuView } from 'react-icons/lu'
import { FaWpforms } from 'react-icons/fa'
import { HiCursorClick } from 'react-icons/hi'
import { TbArrowDown } from 'react-icons/tb'
import { ReactNode } from "react";
import { CardContent, CardHeader, CardTitle, Card as UICard } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

interface CardsProps {
 data?: Awaited<ReturnType<typeof getFormStats>>
 loading: boolean
}

interface CardProps {
 title: string
 icon: ReactNode
 description: string
 value: string
 loading: boolean
 className: string;
}

const Card = (props: CardProps) => {
  return (
  <UICard className={`${props.className} transition duration-150 hover:scale-[102%] ease-in-out`}>
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-sm font-medium text-muted-foreground">{props.title}</CardTitle>
      {props.icon}
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">
        {props.loading && <Skeleton><span className="opacity-0">0</span></Skeleton>}
        {!props.loading && props.value}
      </div>
      <p className="text-xs text-muted-foreground pt-1">{props.description}</p>
    </CardContent>
  </UICard>

)}

export const Cards = (props: CardsProps) => {
 const {data, loading} = props;

  return (
    <div className="w-full pt-8 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <Card 
        title="Total de visitas" 
        icon={<LuView className='text-indigo-600'/>} 
        description="Todas as visitas já realizadas" 
        value={data?.visits.toLocaleString() || ""} 
        loading={loading} 
        className="dark:border-none dark:shadow-md dark:shadow-indigo-800 light:shadow-none border-x-0 border-t-0 border-b-4 border-indigo-500 "
        />
      <Card 
        title="Total de envios" 
        icon={<FaWpforms className='text-yellow-600'/>} 
        description="Todos os envios já realizados" 
        value={data?.submissions.toLocaleString() || ""} 
        loading={loading} 
        className="dark:border-none dark:shadow-md dark:shadow-yellow-800 light:shadow-none border-x-0 border-t-0 border-b-4 border-yellow-500 "
        />
      <Card 
        title="Taxa de envio" 
        icon={<HiCursorClick className='text-green-600'/>} 
        description="Visitas que resultam en envios" 
        value={data?.submissionRate.toLocaleString() || ""} 
        loading={loading} 
        className="dark:border-none dark:shadow-md dark:shadow-green-800 light:shadow-none border-x-0 border-t-0 border-b-4 border-green-500"
        />
      <Card 
        title="Taxa de desistência" 
        icon={<TbArrowDown className='text-red-600'/>} 
        description="Todas as visitas que ão resultaram em envios" 
        value={data?.bounceRate.toLocaleString() || ""} 
        loading={loading} 
        className="dark:border-none dark:shadow-md dark:shadow-red-800 light:shadow-none border-x-0 border-t-0 border-b-4 border-red-500"
        />
    </div>
  )
}

const CardsStatsWrapper = async () => {
  const stats = await getFormStats();
  return (
    <Cards loading={false} data={stats}/>
  )}

export default CardsStatsWrapper

