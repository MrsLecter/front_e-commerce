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

export interface IRimObject {
  rimId: string;
  brand: string;
  name: string;
  image: string;
  config: IRimConfig[];
  diameters?: string[];
  price?: number[];
  // rimId: string;
  // name: string;
  // image: string;
  // diameter: string[];
  // price: number[];
}

// export interface IRimDetailedData {
//   name: string;
//   width: string[];
//   diameter: string[];
//   mountingHoles: string[];
//   price: number[];
//   images: string[];
// }

export interface IRimDetailedInfo {
  rimId: string;
  brand: string;
  name: string;
  images: string[];
  config: IRimConfig[];
}

// export interface IRimParams {
//   width: string;
//   diameter: string;
//   mountingHoles: string;
//   price: number;
// }

// export interface IRimsConfigs {
//   pcd: string;
//   rims: IRimConfigs[];
// }

export interface IRimsConfigsByCar {
  pcd: string;
  rims: {
    width: string;
    diameter: string;
  }[];
}
