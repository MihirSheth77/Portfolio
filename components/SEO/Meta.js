import React from 'react'
import Head from 'next/head';

export default function Meta() {
    return (
        <Head>
            {/* Primary Meta Tags */}
            <title>Mihir Sheth - Software Engineer & Co-founder</title>
            <meta charSet="utf-8" />
            <meta name="title" content="Mihir Sheth - Software Engineer & Co-founder" />
            <meta name="description"
                content="Mihir Sheth's Personal Portfolio Website. Software Engineer & Co-founder showcasing projects and experience." />
            <meta name="author" content="Mihir Sheth" />
            <meta name="keywords"
                content="mihir sheth, mihir sheth portfolio, software engineer, northeastern university, cloud computing, devops, full stack developer" />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#E95420" />

            {/* Search Engine */}
            <meta name="image" content="images/logos/favicon.png" />
            {/* Schema.org for Google */}
            <meta itemProp="name" content="Mihir Sheth - Software Engineer & Co-founder" />
            <meta itemProp="description"
                content="Mihir Sheth's Personal Portfolio Website. Software Engineer & Co-founder showcasing projects and experience." />
            <meta itemProp="image" content="images/logos/favicon.png" />
            {/* Twitter */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="Mihir Sheth - Software Engineer & Co-founder" />
            <meta name="twitter:description"
                content="Mihir Sheth's Personal Portfolio Website. Software Engineer & Co-founder showcasing projects and experience." />
            <meta name="twitter:site" content="MihirSheth77" />
            <meta name="twitter:creator" content="MihirSheth77" />
            <meta name="twitter:image:src" content="images/logos/logo_1024.png" />
            {/* Open Graph general (Facebook, Pinterest & Google+) */}
            <meta name="og:title" content="Mihir Sheth - Software Engineer & Co-founder" />
            <meta name="og:description"
                content="Mihir Sheth's Personal Portfolio Website. Software Engineer & Co-founder showcasing projects and experience." />
            <meta name="og:image" content="images/logos/logo_1200.png" />
            <meta name="og:url" content="https://github.com/MihirSheth77" />
            <meta name="og:site_name" content="Mihir Sheth Portfolio" />
            <meta name="og:locale" content="en_US" />
            <meta name="og:type" content="website" />

            <link rel="icon" href="images/logos/favicon.svg" />
            <link rel="apple-touch-icon" href="images/logos/logo.png" />
            <link rel="preload" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" as="style" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
        </Head>
    )
}
