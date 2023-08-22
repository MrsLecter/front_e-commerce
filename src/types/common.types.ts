export interface INewsFeedItem {
  pubDate: string;
  link: string;
  title: string;
  sourceName: string;
}

export interface IModalProps {
  managementObject: {
    isAppearing: boolean;
    isActive: (modalID: number) => boolean;
    activateHandler: (modalID: number) => void;
    closeHandler: () => void;
  };
}

export interface IRimConfig {
  width: string;
  offset: number;
  diameter: string;
  boltPattern: string;
  centralBore: number;
  price: number;
}

export interface IRimConfigBody extends IRimConfig {
  rimId: string;
}

export interface IRimObject {
  rimId: string;
  brand: string;
  name: string;
  image: string;
  config: IRimConfig[];
  diameters?: string[];
  minPrice?: number[];
}

export interface IRimResponse {
  rimList: IRimObject[];
  diameters: string[];
}

export interface IRimDetailedInfo {
  rimId: string;
  brand: string;
  name: string;
  images: string[];
  config: IRimConfig[];
}

export interface IRimsConfigsByCar {
  pcd: string;
  rims: {
    width: string;
    diameter: string;
  }[];
}
