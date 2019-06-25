import { VNode } from "vue";

export interface DataItem {
  icon?: any;
  text?: any;
  [key: string]: any;
}

export interface GridPropsType {
  dataSource?: Array<DataItem | undefined>;
  hasLine?: boolean;
  columnNum?: number;
  isCarousel?: boolean;
  carouselMaxRow?: number;
  nativeClick?: (dataItem: DataItem | undefined, itemIndex: number) => void;
  renderItem?: (dataItem: DataItem | undefined, itemIndex: number) => any;
}
