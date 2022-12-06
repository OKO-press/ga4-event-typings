import { RequireAtLeastOne } from "../supporting-types";

interface ItemFields {
  /**
   * The ID of the item.
   *
   * @example SKU_12345
   */
  item_id?: string;

  /**
   * The name of the item.
   *
   * @example Stan and Friends Tee
   */
  item_name?: string;

  /**
   * A product affiliation to designate a supplying company or brick and mortar store location.
   *
   * Event-level and item-level affiliation parameters are independent.
   *
   * @example Google Store
   */
  affiliation?: string;

  /**
   * The coupon name/code associated with the item.
   *
   * Event-level and item-level coupon parameters are independent.
   *
   * @example SUMMER_FUN
   */
  coupon?: string;

  /**
   * The currency, in 3-letter ISO 4217 format.
   *
   * If set, event-level currency is ignored.
   * Multiple currencies per event is not supported. Each item should set the same currency.
   *
   * @example USD
   */
  currency?: string;

  /**
   * The monetary discount value associated with the item.
   *
   * @example 2.22
   */
  discount?: number;

  /**
   * The index/position of the item in a list
   *
   * @example 5
   */
  index?: number;

  /**
   * The brand of the item.
   *
   * @example Google
   */
  item_brand?: string;

  /**
   * The category of the item. If used as part of a category hierarchy or taxonomy then this will be the first category.
   *
   * @example Apparel
   */
  item_category?: string;

  /**
   * The second category hierarchy or additional taxonomy for the item.
   *
   * @example Adult
   */
  item_category2?: string;

  /**
   * The third category hierarchy or additional taxonomy for the item.
   *
   * @example Shirts
   */
  item_category3?: string;

  /**
   * The fourth category hierarchy or additional taxonomy for the item.
   *
   * @example Crew
   */
  item_category4?: string;

  /**
   * The fifth category hierarchy or additional taxonomy for the item.
   *
   * @example Short sleeve
   */
  item_category5?: string;

  /**
   * The ID of the list in which the item was presented to the user.
   *
   * If set, event-level item_list_id is ignored.
   * If not set, event-level item_list_id is used, if present.
   *
   * @example related_products
   */
  item_list_id?: string;

  /**
   * The name of the list in which the item was presented to the user.
   *
   * If set, event-level item_list_name is ignored.
   * If not set, event-level item_list_name is used, if present.
   *
   * @example Related products
   */
  item_list_name?: string;

  /**
   * The item variant or unique code or description for additional item details/options.
   *
   * @example green
   */
  item_variant?: string;

  /**
   * The physical location associated with the item (e.g. the physical store location).
   *
   * It's recommended to use the Google Place ID that corresponds to the associated item. A custom location ID can also be used.
   *
   * If set, event-level location_id is ignored.
   * If not set, event-level location_id is used, if present.
   *
   * @example ChIJIQBpAG2ahYAR_6128GcTUEo (the Google Place ID for San Francisco)
   */
  location_id?: string;

  /**
   * The monetary price of the item, in units of the specified currency parameter.
   *
   * @example 9.99
   */
  price?: number;

  /**
   * Item quantity.
   *
   * If not set, quantity is set to 1.
   *
   * @example 1
   */
  quantity?: number;
}

export type Item = RequireAtLeastOne<ItemFields, "item_id" | "item_name">;
