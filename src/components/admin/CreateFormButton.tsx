'use client';

import React from 'react'
import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogTitle, DialogTrigger } from '../ui/dialog';
import { ImSpinner2 } from 'react-icons/im'
import { BsFileEarmarkPlus } from 'react-icons/bs'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { toast } from '../ui/use-toast';
import { formSchema, formSchemaType } from '../../../schemas/form';
import { createForm } from '../../../actions/form';
import { useRouter } from 'next/navigation';

const CreateFormButton = () => {
  const router = useRouter()
  
  const form = useForm<formSchemaType>({
    resolver: zodResolver(formSchema)
  })

 const onSubmit = async (values: formSchemaType) => {
  try {
    const formId = await createForm(values)
    toast({
      title: "Sucess",
      description: "Form created successfully"
    })

    router.push(`/admin/builder/${formId}`)

    console.log(formId)
  } catch (error) {
   toast({
    title: "Error",
    description: "Something went wrong, please try again",
    variant: "destructive"
   })
  }
 }

 return(
  <Dialog>
    <DialogTrigger asChild>
      <Button variant={"outline"} className='group border border-primary/20 h-[190px] items-center justify-center flex flex-col hover:border-primary hover:cursor-pointer brder-dashed gap-4'>
          <BsFileEarmarkPlus className="h-8 w-8 text-muted-foreground group-hover:text-primary" />
          <p className='font-bold text-xl text-muted-foreground group-hover:text-primary'>Criar novo formulário</p>
      </Button>
    </DialogTrigger>
    <DialogContent>
      <DialogTitle>
      Criar formulário
      </DialogTitle>
      <DialogDescription>
      Crie um novo formulário para uma nova fase
      </DialogDescription>
      <div className='flex flex-col gap-4'py-4></div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
        <FormField name='name'control={form.control} render={({field}) => 
        <FormItem>
          <FormLabel>Nome</FormLabel>
          <FormControl><Input {...field}/></FormControl>
          <FormMessage />
          </FormItem>} />
          <FormField name='description'control={form.control} render={({field}) => 
          <FormItem>
          <FormLabel>Descrição</FormLabel>
          <FormControl><Textarea rows={5} {...field}/></FormControl>
          <FormMessage />
          </FormItem>} />
        </form>
      </Form>
      <DialogFooter>
        <Button 
        onClick={form.handleSubmit(onSubmit)}
        disabled={form.formState.isSubmitting} 
        className="w-full mt-4">
          {!form.formState.isSubmitting && <span>Save</span>}
          {form.formState.isSubmitting && <ImSpinner2 className='animate-spin'/>}
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
 )
}

export default CreateFormButton;