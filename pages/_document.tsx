import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
      <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet"/>
       <meta name="" content="MERN stack developer looking for a job"/>
      <meta name="keywords" content="Full Stack Web Developer,Freelancer,MERN developer" /> 
      <body className='bg-gradient-to-r from-bluext to-greenxt dark:from-dark-500 dark:to-dark-700 dark:text-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}