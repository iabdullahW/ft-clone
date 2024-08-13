import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Present Your Work in Style",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Anna Watson",
      image: "/images/blog/author-01.png",
      designation: "Podcast",
    },
    tags: ["Podcast"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "6 Tools for Designing",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Anna Watson",
      image: "/images/blog/author-01.png",
      designation: "Podcast",
    },
    tags: ["Podcast"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Who Owns WordPress?",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Anna Watson",
      image: "/images/blog/author-01.png",
      designation: "Podcast",
    },
    tags: ["Podcast"],
    publishDate: "2025",
  },
];
export default blogData;
