export interface IPost {
  id: number;
  slug: string;
  title: {
    rendered: any;
  };
  content: {
    rendered: any;
  },
  excerpt: any;
  date: any;
  modified: any;
  fimg_url: string;
  _embedded: any;
  meta: any;
}
