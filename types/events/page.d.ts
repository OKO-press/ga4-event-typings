import {PageType} from "../../src/enums";

export interface DataLayerPage<T extends PageType> {
  page_type: T
}