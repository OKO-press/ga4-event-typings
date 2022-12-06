export type PageType = "Artykuł"

export interface DataLayerPage<T extends PageType> {
  page_type: T
}