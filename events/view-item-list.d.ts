import { Item } from "./item";

export interface DataLayerViewItemList {
  event: "view_item_list";
  ecommerce: {
    /**
     * The ID of the list in which the item was presented to the user.
     *
     * Ignored if set at the item-level.
     *
     * @example related_products
     */
    item_list_id?: string;

    /**
     * The name of the list in which the item was presented to the user.
     *
     * Ignored if set at the item-level.
     *
     * @example 	Related products
     */
    item_list_name?: string;

    /**
     * 	The items for the event.
     */
    items: Item[];
  };
}
