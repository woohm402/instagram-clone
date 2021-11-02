export interface MainPostItem {
  id: string;
  author: {
    profile_img: string;
    name: string;
  };
  images: string[];
  like: number;
  content: string;
  created_at: string; // iso string
  comment_count: number;
}
