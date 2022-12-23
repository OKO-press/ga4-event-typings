/**
 * Type of banner
 */
export type BannerType =
  | "main-site-big"
  | "main-site-newest"
  | "main-site-section-divider"
  | "article-after-text"
  | "article-after-lead"
  | "article-inner-text";

interface BannerItem {
  /**
   * The type of payment method.
   */
  item_id: string;

  /**
   * The current campaign type with prefix.
   * 
   * @example "wesprzyj-cykliczna"
   */
  item_list_id: string;

  /**
   * The unique name of banner in slug case.
   * 
   * @example "this-is-example-banner"
   */
  creative_name: string;

  /**
   * The type of banner based on `BannerType`
   * 
   * @type BannerType
   * @example "main-site-newest"
   */
  creative_slot: string;
}

export interface DataLayerBanner {
  event: "view_promotion";
  ecommerce: {
    items: BannerItem[];
  }
}