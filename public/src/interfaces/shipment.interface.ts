export interface IShipment {
  id: string;
  name: string;
  cargo: ICargo[];
  mode: string;
  type: string;
  destination: string;
  origin: string;
  services: IService[];
  total: string;
  status: string;
  userId: string;
}

export interface ICargo {
  type: string;
  description: string;
  volume: string;
}

export interface IService {
  type: string;
  value?: string;
}
