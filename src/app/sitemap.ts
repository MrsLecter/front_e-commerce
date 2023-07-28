import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://front-e-commerce-six.vercel.app/",
      lastModified: new Date(),
    },
    {
      url: "https://front-e-commerce-six.vercel.app/about-us",
      lastModified: new Date(),
    },
    {
      url: "https://front-e-commerce-six.vercel.app/makers/all",
      lastModified: new Date(),
    },
    {
      url: "https://front-e-commerce-six.vercel.app/news",
      lastModified: new Date(),
    },
    {
      url: "https://front-e-commerce-six.vercel.app/rims",
      lastModified: new Date(),
    },
    {
      url: "https://front-e-commerce-six.vercel.app/rim",
      lastModified: new Date(),
    },
  ];
}
