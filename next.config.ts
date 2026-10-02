import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep the same addresses as the old WordPress site (/about-us/ etc.).
  trailingSlash: true,

  async redirects() {
    return [
      // The ProHayat 180 page used to live at /prodrive-180/.
      { source: "/prodrive-180", destination: "/prohayat-180/", permanent: true },
      // Old WordPress addresses that people or Google may still have.
      { source: "/our-services", destination: "/our-service/", permanent: true },
      { source: "/contact", destination: "/contact-us/", permanent: true },
      { source: "/about", destination: "/about-us/", permanent: true },
      { source: "/wp-admin/:path*", destination: "/", permanent: false },
      { source: "/wp-login.php", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
