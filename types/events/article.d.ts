import { DataLayerPage } from "./page";
import {ArticleAvailability, ArticleLength, ArticleType} from "../../src/enums";
import {PageType} from "../../src/enums";

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