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

export interface IRimObject {
  rimId: string;
  name: string;
  image: string;
  diameter: string[];
  price: number[];
}

export interface IRimDetailedData {
  name: string;
  width: string[];
  diameter: string[];
  mountingHoles: string[];
  price: number;
  images: string[];
}
