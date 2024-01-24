import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit",
  textStyles?: string,
  rightIcon?: string,
  isDisabled?: boolean,
}


export interface SearchManuFacturerProps {
  selected: string;
  setSelected: (manufacturer: string) => void;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface CarWithId extends CarProps {
  id: number;
}

type Translations = {
  [K in keyof CarProps]: string;
};

export const translations: Translations = {
  city_mpg: "Consumo en Ciudad",
  class: "Clase",
  combination_mpg: "Consumo Combinado",
  cylinders: "Cilindros",
  displacement: "Desplazamiento",
  drive: "Tracción",
  fuel_type: "Tipo de Combustible",
  highway_mpg: "Consumo en Carretera",
  make: "Marca",
  model: "Modelo",
  transmission: "Transmisión",
  year: "Año",
};

export interface FilterProps {
  manufacturer: string,
  year: string,
  fuel: string,
  limit: number,
  model: string
}

export interface OptionsProps {
  title: string
  value: string
}

export interface CustomFilterProps {
  title: string;
  options: OptionsProps[]
  setFilter: (value: string ) => void;
}

export interface ShowMoreProps {
  pageNumber: number;
  isNextPage: boolean;
  setLimit: (value: number) => void;
}

export interface SearchBarProps {
  setManufacturer: (value: string) => void;
  setModel: (value: string) => void;
}