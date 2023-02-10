/**
 * Type of popup
 */
export type PopupType =
    | "support-popup"
    | "exit-popup"
    | "text-popup";

interface PopupItem {
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
     * @example "this-is-example-popup"
     */
    creative_name: string;

    /**
     * The type of popup based on `PopupType`
     *
     * @type PopupType
     * @example "support-popup"
     */
    creative_slot: string;
}

export interface DataLayerPopup {
    event: "view_promotion";
    ecommerce: {
        items: PopupItem[];
    }
}