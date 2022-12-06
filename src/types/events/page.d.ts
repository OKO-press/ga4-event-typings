import {PageType} from "../../enums/page";

export interface DataLayerPage<T extends PageType> {
  page_type: T
}