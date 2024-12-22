export interface Article {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  publishedAt: string;
  source: string;
  url: string;
}

export interface UserPreferences {
  categories: string[];
  sources: string[];
}