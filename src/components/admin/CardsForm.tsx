import { getForms } from "../../../actions/form"
import { Skeleton } from "../ui/skeleton"
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Card as UICard } from "../ui/card";
import { Form } from "@prisma/client";
import { Badge } from "../ui/badge";
import { formatDistance } from "date-fns";
import { ptBR } from 'date-fns/locale';
import { LuView } from "react-icons/lu";
import { FaEdit, FaWpforms } from "react-icons/fa";
import { Button } from "../ui/button";
import Link from "next/link";
import { BiRightArrowAlt } from 'react-icons/bi'


export const CardFormSkeleton = () => {
 return <Skeleton className="dark:border-none border-2 border-primary-/20 h-[190px] w-full"/>
}

const Card = ({ form }: { form: Form}) => {
 return(
  <UICard className="dark:border-none">
   <CardHeader>
      <CardTitle className="flex items-center gap-2 justify-between">
         <span className="truncate font-bold">{form.name}</span>
          {form.published && <Badge>Ativo</Badge>}
          {!form.published && <Badge variant={"destructive"}>Inativo</Badge>}
      </CardTitle>
      <CardDescription className="flex items-center justify-between text-muted-foreground text-sm">
         {formatDistance(form.createdAt, new Date(), {
            addSuffix: true
         })}
         {!form.published && 
            <span className="flex items-center gap-2">
               <LuView className="text-muted-foreground"/>
               <span>{form.visits.toLocaleString()}</span>
               <FaWpforms className="text-muted-foreground" />
               <span>{form.submissions.toLocaleString()}</span>
            </span>
         }
      </CardDescription>
   </CardHeader>
   <CardContent className="h-[20px] truncate text-sm text-muted-foreground">
      {form.description || "No description"}
   </CardContent>
   <CardFooter>
      {form.published && (
      <Button asChild className="flex mt-2 items-center  text-md gap-4">
         <Link href={`/forms/${form.id}`}>
            View submissions 
            <BiRightArrowAlt />
         </Link>
      </Button>)}
      {!form.published && (
      <Button variant={"secondary"} asChild className="flex mt-2 w-full text-md justify-center items-center gap-4">
         <Link href={`/admin/builder/${form.id}`}>
             Edit
             <FaEdit />
         </Link>
      </Button>)}
   </CardFooter>
  </UICard>
 )
}

const CardsForm = async () => {
 const forms = await getForms()

 return (
 <>
 {forms.map(form => 
   <Card key={form.id} form={form}></Card>
  )}
 </>
)}

export default CardsForm