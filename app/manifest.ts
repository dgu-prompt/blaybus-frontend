import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "두더디",
    short_name: "두더디",
    description:
      "Gamified app for tracking and visualizing performance growth and achievements at DoHands.",
    start_url: "/home",
    display: "standalone",
    // icons: [
    //   {
    //     src: "/icon-192x192.png",
    //     sizes: "192x192",
    //     type: "image/png",
    //   },
    //   {
    //     src: "/icon-512x512.png",
    //     sizes: "512x512",
    //     type: "image/png",
    //   },
    // ],
  };
}
