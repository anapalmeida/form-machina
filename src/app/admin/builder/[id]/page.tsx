import React from 'react'
import { getFormById } from '../../../../../actions/form';
import FormBuilder from '@/components/admin/builder/FileBuilder';

const Page = async ({params}: {params: {id: string}}) => {
 const form = await getFormById(Number(params.id));

 if(!form) {
  throw new Error("Form not found")
 }

 return <FormBuilder form={form} />

}

export default Page