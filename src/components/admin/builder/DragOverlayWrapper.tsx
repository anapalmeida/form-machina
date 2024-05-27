import { Active, DragOverlay, useDndMonitor } from '@dnd-kit/core'
import React, { useState } from 'react'

export default function DragOverlayWrapper() {
 const [draggrableItem, setDraggedItem] = useState<Active | null>(null);

 useDndMonitor({
  onDragStart: (event) => {
   setDraggedItem(event.active)
  },
  onDragCancel: () => {
   setDraggedItem(null);
  },
  onDragEnd: () => {
   setDraggedItem(null)
  }
 })

 const node = <div>No drag overlay</div>
 const isSidebarBtnElement = draggrableItem?.data?.current?.isSidebarBtnElement

 if(isSidebarBtnElement) {
  
 }

  return (<DragOverlay>{node}</DragOverlay>)
}
