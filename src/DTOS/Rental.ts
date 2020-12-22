import CarDTO from './Car';

export default interface RentalDTO {
  id: string;
  start_date: Date;
  end_date: Date;
  car: CarDTO;
}
