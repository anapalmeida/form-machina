import React from "react";
import { TextFieldFormElement } from "./fields/TextField";

export type ElementsType = "TextField";
export type FormElement = {
 type: ElementsType;
 construct: (id: string) => formElementsIstance;
 designerButtonElement: {
  icon: React.ElementType;
  label: string;
 }
 designerComponent: React.FC;
 formComponent: React.FC;
 propertiesComponent: React.FC;
}

export type formElementsIstance = {
 id: string;
 type: ElementsType;
 extraAttributes: Record<string, any>
}

type FormElementsType = {
 [key in ElementsType]: FormElement
}

export const FormElements:FormElementsType = {
 TextField: TextFieldFormElement
}