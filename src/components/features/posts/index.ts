export interface Owner {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
}

export interface Post {
  id: string;
  image: string;
  likes: number;
  tags: string[];
  text: string;
  publishDate: string;
  owner: Owner;
}
