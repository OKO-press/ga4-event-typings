import { AllOrNone } from "../supporting-types";
import { Item } from "./item";

export interface DataLayerAddPaymentInfo {
  event: "add_payment_info";
  ecommerce: AllOrNone<{
    /**
     * Currency of the items associated with the event, in 3-letter ISO 4217 format.
     *
     * If set, item-level currency is ignored.
     * If not set, currency from the first item in items is used.
     *
     * If you set value then currency is required for revenue metrics to be computed accurately.
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
     * The coupon name/code associated with the event.
     *
     * Event-level and item-level coupon parameters are independent.
     *
     * @example SUMMER_FUN
     */
    coupon?: string;

    /**
     * The chosen method of payment.
     *
     * @example Credit Card
     */
    payment_type?: string;

    /**
     * 	The items for the event.
     */
    items: Item[];
  };
}
