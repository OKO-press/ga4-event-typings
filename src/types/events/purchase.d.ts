import { AllOrNone } from "../supporting-types";
import { Item } from "./item";

export interface DataLayerPurchase {
  event: "purchase";
  ecommerce: AllOrNone<{
    /**
     * Currency of the items associated with the event, in 3-letter ISO 4217 format.
     *
     * If set, item-level currency is ignored.
     * If not set, currency from the first item in items is used.
     *
     * If you set value then currency is required for revenue metrics to be computed accurately.
     * @example USD
     */
    currency: string;

    /**
     * The monetary value of the event.
     *
     * value is typically required for meaningful reporting. If you mark the event as a conversion then it's recommended you set value.
     * currency is required if you set value.
     * @example 7.77
     */
    value: number;
  }> & {
    /**
     * The unique identifier of a transaction.
     *
     * The transaction_id parameter helps you avoid getting duplicate events for a purchase.
     *
     * @example T_12345
     */
    transaction_id: string;

    /**
     * A product affiliation to designate a supplying company or brick and mortar store location.
     *
     * Event-level and item-level affiliation parameters are independent.
     *
     * @example Google Store
     */
    affiliation?: string;

    /**
     * The coupon name/code associated with the event.
     *
     * Event-level and item-level coupon parameters are independent.
     *
     * @example SUMMER_FUN
     */
    coupon?: string;

    /**
     * Shipping cost associated with a transaction.
     *
     * @example 3.33
     */
    shipping?: number;

    /**
     * Tax cost associated with a transaction.
     *
     * @example 1.11
     */
    tax?: number;

    /**
     * The items for the event.
     */
    items: Item[];
  };
}
