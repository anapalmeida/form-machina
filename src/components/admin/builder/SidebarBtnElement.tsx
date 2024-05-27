import React from 'react';
import { FormElement } from './FormElements';
import { Button } from '@/components/ui/button';
import { useDraggable } from '@dnd-kit/core';
import { cn } from '@/lib/utils';

export const SidebarBtnElement = ({formElement}: {formElement: FormElement}) => {
 const { label, icon: Icon } = formElement.designerButtonElement
 const draggrable = useDraggable({
  id:`designer-btn-${formElement.type}`,
  data: {
   type: formElement.type,
   isSidebarBtnElement: true
  }
 })

 return (
  <Button ref={draggrable.setNodeRef}
  {...draggrable.listeners} {...draggrable.attributes} variant={"outline"} 
  className={cn('flex flex-col gap-2 h-[120px] w-[120px] cursor-grab',
  draggrable.isDragging && "ring-2 ring-primary"
  )}
  >
   {/* <Icon className="w-8 h-8 text-primary cursor-grab" /> */}
    <p className='text-xs'>{label}</p>
  </Button>
 )
}

export const SidebarBtnElementDraggableOverlay = ({formElement}: {formElement: FormElement}) => {
 const { label, icon: Icon } = formElement.designerButtonElement

 return (
  <Button
  variant={"outline"} 
  className='flex flex-col gap-2 h-[120px] w-[120px] cursor-grab'>
   {/* <Icon className="w-8 h-8 text-primary cursor-grab" /> */}
   <p className='text-xs'>{label}</p>
  </Button>
 )
}