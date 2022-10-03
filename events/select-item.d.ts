import { Item } from "./item";

export interface DataLayerSelectItem {
  event: "select_item";
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
     * @example Related Products
     */
    item_list_name?: string;

    /**
     * The items for the event.
     *
     * The items array is expected to have a single element, representing the selected item. If multiple elements are provided, only the first element in items will be used.
     */
    items: Item[];
  };
}
