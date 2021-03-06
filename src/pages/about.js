// Step 1: Import React
import * as React from 'react';
import Layout from '../components/layout';

// Step 2: Define your component
function AboutPage() {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I&apos;m the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  );
}

// Step 3: Export your component
export default AboutPage;
