"use client";

import { DefaultSeo } from "next-seo";
import { usePathname } from "next/navigation";

export function DefaultSeoClient({ title, description, locale }) {
  const pathname = usePathname();
  const url = `https://arsy-studio.com${pathname}`;

  return (
    <DefaultSeo
      title={title}
      description={description}
      defaultTitle={title}
      additionalMetaTags={[
        {
          name: "theme-color",
          content: "#0f0f10",
        },
      ]}
      openGraph={{
        type: "website",
        locale,
        url,
        siteName: "Arsy Studio",
        title,
        description,
        images: [
          {
            url: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=1200",
            width: 1200,
            height: 630,
            alt: "Arsy Studio bespoke web build",
          },
        ],
      }}
      twitter={{
        cardType: "summary_large_image",
        handle: "@arsy_studio",
        site: "@arsy_studio",
      }}
    />
  );
}
