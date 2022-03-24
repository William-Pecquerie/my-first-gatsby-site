// Step 1: Import React
import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';

// Step 2: Define your component
function IndexPage() {
  return (
    <Layout pageTitle="Home Page">
      <p>I&apos;m making this by following the Gatsby Tutorial on index.</p>
      {// Adding image from web
      }
      <StaticImage
        alt="Roronoa Zoro Oni-Giri pose"
        src="https://preview.redd.it/llvhem2yvjp71.jpg?width=960&crop=smart&auto=webp&s=e4d4b140df89badbad56d41985975fd62759182d"
      />
      {/* Adding image from Desktop */}
      <StaticImage
        alt="Roronoa Zoro Oni-Giri pose"
        src="../../../../../dragon_image_fond_ecran_0027_resize.jpg"
      />
    </Layout>
  );
}

// Step 3: Export your component
export default IndexPage;
