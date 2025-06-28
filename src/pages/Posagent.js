import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Posagent = () => {
  return (
    <>
      <body class="page-template page-template-elementor_header_footer page page-id-623 ehf-template-hello-elementor ehf-stylesheet-hello-elementor jkit-color-scheme elementor-default elementor-template-full-width elementor-kit-3 elementor-page elementor-page-623">
        <div id="page" class="jkit-template  site">
          <Navbar />
          <div
            data-elementor-type="wp-page"
            data-elementor-id="948"
            class="elementor elementor-948"
          >
            <section
              class="elementor-section elementor-top-section elementor-element elementor-element-d2a4987 elementor-section-content-middle elementor-reverse-tablet elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default"
              data-id="d2a4987"
              data-element_type="section"
              data-settings='{"background_background":"classic"}'
            >
              <div class="elementor-background-overlay"></div>
              <div class="elementor-container elementor-column-gap-default">
                <div
                  class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-7c0d3ed"
                  data-id="7c0d3ed"
                  data-element_type="column"
                >
                  <div class="elementor-widget-wrap elementor-element-populated">
                    <div
                      class="elementor-element elementor-element-7435d9b elementor-widget elementor-widget-heading"
                      data-id="7435d9b"
                      data-element_type="widget"
                      data-widget_type="heading.default"
                    >
                      <div class="elementor-widget-container">
                        <h2 class="elementor-heading-title elementor-size-default">
                          Coming soon
                        </h2>{" "}
                      </div>
                    </div>
                    <div
                      class="elementor-element elementor-element-eff82bc elementor-icon-list--layout-inline elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                      data-id="eff82bc"
                      data-element_type="widget"
                      data-widget_type="icon-list.default"
                    ></div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <Footer />
        </div>
      </body>
    </>
  );
};

export default Posagent;
