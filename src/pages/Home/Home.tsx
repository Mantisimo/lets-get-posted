import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { Posts } from "@/components/features/posts/Posts";

interface HomeProps {}

const posts = [
  {
    id: "1",
    avatarSrc: "https://randomuser.me/api/portraits/men/1.jpg",
    author: "John Doe",
    datetime: "2024-06-15T08:30:00Z",
    date: "2024-06-15",
    rating: 4.5,
    content: "This product exceeded my expectations! Highly recommended.",
  },
  {
    id: "2",
    avatarSrc: "https://randomuser.me/api/portraits/women/2.jpg",
    author: "Jane Smith",
    datetime: "2024-06-14T10:45:00Z",
    date: "2024-06-14",
    rating: 3.0,
    content: "The product is decent, but I had some issues with the delivery.",
  },
  {
    id: "3",
    avatarSrc: "https://randomuser.me/api/portraits/men/3.jpg",
    author: "Mike Johnson",
    datetime: "2024-06-13T14:00:00Z",
    date: "2024-06-13",
    rating: 5.0,
    content: "Absolutely fantastic! Will buy again.",
  },
  {
    id: "4",
    avatarSrc: "https://randomuser.me/api/portraits/women/4.jpg",
    author: "Emily Davis",
    datetime: "2024-06-12T16:15:00Z",
    date: "2024-06-12",
    rating: 2.5,
    content: "Not as good as I expected. The quality could be better.",
  },
  {
    id: "5",
    avatarSrc: "https://randomuser.me/api/portraits/men/5.jpg",
    author: "Chris Lee",
    datetime: "2024-06-11T18:30:00Z",
    date: "2024-06-11",
    rating: 4.0,
    content: "Good product overall, but there are some minor issues.",
  },
  {
    id: "6",
    avatarSrc: "https://randomuser.me/api/portraits/women/6.jpg",
    author: "Anna Brown",
    datetime: "2024-06-10T20:45:00Z",
    date: "2024-06-10",
    rating: 4.8,
    content: "Great value for the price. Very satisfied with my purchase.",
  },
  {
    id: "7",
    avatarSrc: "https://randomuser.me/api/portraits/men/7.jpg",
    author: "James Wilson",
    datetime: "2024-06-09T22:00:00Z",
    date: "2024-06-09",
    rating: 3.5,
    content: "It's an average product, nothing special but it works.",
  },
  {
    id: "8",
    avatarSrc: "https://randomuser.me/api/portraits/women/8.jpg",
    author: "Linda Martinez",
    datetime: "2024-06-08T23:15:00Z",
    date: "2024-06-08",
    rating: 5.0,
    content: "Excellent! Exceeded all my expectations.",
  },
  {
    id: "9",
    avatarSrc: "https://randomuser.me/api/portraits/men/9.jpg",
    author: "Robert Anderson",
    datetime: "2024-06-07T06:30:00Z",
    date: "2024-06-07",
    rating: 4.2,
    content: "Pretty good product, but there's room for improvement.",
  },
  {
    id: "10",
    avatarSrc: "https://randomuser.me/api/portraits/women/10.jpg",
    author: "Patricia Taylor",
    datetime: "2024-06-06T08:45:00Z",
    date: "2024-06-06",
    rating: 2.0,
    content: "I was disappointed with the quality of the product.",
  },
];
//var a = {
//"id": "60d21b7f67d0d8992e610d2c",
//"image": "https://img.dummyapi.io/photo-1536809188428-e8ecf663d0be.jpg",
//"likes": 149,
//"tags": [
//"dog",
//"animal",
//"canine"
//],
//"text": "Sun Bathing adult gold golden retriever lying on f...",
//"publishDate": "2020-05-17T20:54:33.648Z",
//"owner": {
//"id": "60d0fe4f5311236168a10a10",
//"title": "mr",
//"firstName": "Nenad",
//"lastName": "Leroy",
//"picture": "https://randomuser.me/api/portraits/med/men/62.jpg"
//}
//}
export const HomeComponent: React.FunctionComponent<
  HomeProps
> = (): JSX.Element => {
  const [result, setResult] = useState([]);
  useEffect(() => {
    (async function () {
      try {
        const response = await fetch("/api/post?limit=10&page=2", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        const result = await response.json();

        console.log(result);

        setResult(result.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <>
      <Posts posts={result} />
    </>
  );
};
