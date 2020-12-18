export interface CarImageDTO {
  name: string;
  image_url: string;
}

export interface SpecDTO {
  name: string;
  description: string;
  icon: string;
}

export default interface CarDTO {
  id: string;
  name: string;
  brand: string;
  daily_value: number;
  CarImage: CarImageDTO[];
  specs: SpecDTO[];
}
