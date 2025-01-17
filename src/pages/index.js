import * as React from "react";
import MainContent from "../components/main-content";
import Highlights from "../components/highlights";
import Twitter from "../components/twitter";

import Dates from "../components/dates";
import Layout from "../components/layout";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <div className="flex flex-col space-y-5 md:mx-30 lg:mx-52 mx-5">
        <MainContent />
        <Highlights />
        <h3 className="font-bold text-xl md:text-2xl md:text-left text-center">Important Dates (AoE)</h3>
        <div className="md:flex md:flex-row place-content-between gap-x-5 lg:gap-y-0 gap-y-5">
          <Dates />
          <Twitter />
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
