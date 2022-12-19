/**
 * The type of payment method
 */
export type PaymentMethod = "cykliczna" | "jednorazowa"

interface SupportLinkItem {
   /**
   * The type of payment method based on `PaymentMethod`
   */
    item_id: PaymentMethod;

   /**
   * The unique name of link in slug case.
   *
   * @example "this-is-example-popup"
   */
    creative_name: string;

   /**
   * The type of link.
   * @example "common"
   */
    creative_slot: string;

}

export interface DataLayerCommonLink {
  event: "click";
  /**
   * Name of component connected with link
   */
  friendly_component_name?: string;
  /**
   * Slug of the site
   */
  slug: string;
  href: string;
}

export interface DataLayerSupportLink {
  event: "select_promotion";
  ecommerce: {
    items: SupportLinkItem[];
  }
  /**
   * Name of component connected with link
   */
  friendly_component_name?: string;
}