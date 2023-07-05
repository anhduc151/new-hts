import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> */}
      <link href="https://fonts.googleapis.com/css2?family=Inter&family=Josefin+Sans:ital,wght@0,400;1,300&family=Prompt:wght@600&family=Roboto&family=Sigmar+One&family=Titan+One&display=swap" rel="stylesheet" />
      </Head>
      
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
