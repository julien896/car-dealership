import { v4 as uuid } from 'uuid';
import { Brand } from '../../brands/entities/brand.entity';

export const BRANDS_SEED: Brand[] = [
  {
    id: uuid(),
    name: 'Renault',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Chery',
    createdAt: new Date().getTime(),
  },
];
