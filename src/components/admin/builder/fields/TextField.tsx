"use client";

import { MdTextFields } from "react-icons/md";
import { ElementsType, FormElement } from "../FormElements";

const type: ElementsType = "TextField"

export const TextFieldFormElement: FormElement = {
 type,
 construct: (id: string) => ({
  id, 
  type, 
  extraAttributes: {
   label: "Text field", 
   helperText: "Helper text",
   required: false,
   placeholder: "Value here..."
  }
 }),
 designerButtonElement: {
  icon: <MdTextFields/>,
  label: "Text field",
 },
 designerComponent: () => <div>hey</div>,
 formComponent: () => <div>hey</div>,
 propertiesComponent: () => <div>hey</div>
}