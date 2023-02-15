import { DataLayerBaseValue } from "./core";

/**
 * Page type
 */
export type PageType = "Artykul" | "Glowna" | "Autor" | "Kategoria" | "Temat" | "Tag" | "Osoba" | "Instytucja" | "Media" | "Logowanie" | "Konto" | "Archive" | "StaticPage"

/**
 * Login status
 */
export type LoginStatus = "yes" | "no"

/**
 * Base interface for DataLayerPageView
 */
export interface DataLayerPageView2Base<TPageType extends PageType> {
/**
   * Page type
   * @example "Artykul"
   */
page_type: TPageType
/**
 * Login status
 */
login_status: LoginStatus;
/**
 * Is article
 * @example 1
 */
is_article: 1 | 0;
/**
 * User account status
 * @example "ok"
 */
user_account_status?: string;
/**
 * Auth0 user ID
 */
user_id?: string;
}

/**
 * Custom page view event
 */
export type DataLayerPageView2<TPageType extends PageType, TCustomValue extends Record<string, any>> = DataLayerPageView2Base<TPageType> & TCustomValue

/**
 * Type of the article
 */
export type ArticleType = "Artykul" | "Video" | "Podcast" | "Galeria" | "Na zywo";

/**
 * Article length in words
 */
export type ArticleLength = "bardzo krotki" | "krotki" | "sredni" | "dlugi" | "bardzo dlugi";

/**
 * Availability of the article
 */
export type ArticleAvailability = "yes" | "no";

/**
 * Article page data layer
 */
export interface DataLayerArticle {
  /**
   * Main topic of the article
   * @example "Ekologia"
   */
  article_topic: string;
  /**
   * All topics of the article
   * @example ["Ekologia", "Gospodarka"]
   */
  article_topics: string[];
  /**
   * Main category of the article
   * @example "Analiza"
   */
  article_category: string;
  /**
   * Tags of the article
   * @example ["kot", "pies", "krowa"]
   */
  article_tags: string[];
  /**
   * Type of the article
   * @example "Artykul"
   */
  article_type: ArticleType;
  /**
   * Full name of the main author of the article
   * @example "Jan Kowalski"
   */
  article_author: string;
  /**
   * All full names of the authors of the article
   * @example ["Jan Kowalski", "Janina Kowalska"]
   */
  article_additional_authors: string[];
  /**
   * Length of the article
   * @example "bardzo krotki"
   */
  article_length: ArticleLength;
  /**
   * Date of the article publication
   * Format: DD.MM.YYYY
   * @example 01.01.2020
   */
  article_date: string;
  /**
   * Availability of the article
   * @example "yes"
   */
  article_availability: ArticleAvailability;
  /**
   * Number of words in the article
   * @example 457
   */
  article_length_param: number;
  /**
   * Average reading time of the article in seconds
   * @example 3000
   */
  article_est_read_time: number;
}

/**
 * Category page data layer
 */
export interface DataLayerCategory {
  /**
   * Category name
   */
  category_name: string;
}

/**
 * Topic page data layer
 */
export interface DataLayerTopic {
  /**
   * Topic name
   */
  topic_name: string;
}