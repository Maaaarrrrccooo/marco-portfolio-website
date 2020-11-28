import React from "react";
import Navigation from "../components/Nav";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

const IndexPage = () => {
  return (
    <Layout>
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <CallToAction />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
