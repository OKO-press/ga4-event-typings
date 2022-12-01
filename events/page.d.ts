export enum PageType {
  Article = "Artykuł"
}

export interface DataLayerPage<T extends PageType> {
  page_type: T
}