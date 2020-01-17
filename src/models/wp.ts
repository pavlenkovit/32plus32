export interface IPost {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  },
  excerpt: any;
  date: any;
  modified: any;
  fimg_url: string;
  _embedded: any;
  meta: any;
}

export interface ICategory {
  name: string;
  slug: string;
}

export interface IUser {
  name: string;
  slug: string;
}
