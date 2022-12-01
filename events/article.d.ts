import { DataLayerPage, PageType } from "./page";

export enum ArticleLength {
  VeryShort = "bardzo krotki",
  Short = "krotki",
  Medium = "sredni",
  Long = "dlugi",
  VeryLong = "bardzo dlugi",
}

export enum ArticleType {
  Post = "text",
  Video = "video",
  Podcast = "podcast",
  Gallery = "galeria",
  LivePost = "na zywo",
}

export enum ArticleAvailability {
  Restricted = "zablokowany",
  Open = "otwarty",
}

export interface DataLayerArticle extends DataLayerPage<PageType.Article> {
  login_status: boolean;
  article_topic: string;
  article_topics: string[];
  article_tags: string[];
  article_category: string;
  article_categories: string[];
  article_author: string;
  article_authors: string[];
  article_type: ArticleType;
  article_date: string;
  article_availability: ArticleAvailability;
  article_length: ArticleLength;
  article_length_value: number;
  article_average_reading_time: number;
}
