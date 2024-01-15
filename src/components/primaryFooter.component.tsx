import SubHeading from "../ui/atoms/typographies/subHeading.atom";
import Brand from "../ui/molecules/brand.molecule";
import SubscriptionNewsletterForm from "./subscriptionNewsletterForm.component";
import FooterNavegation from "./footerNavegation.component";
import ScrollReveal from "../lib/scrollReveal.lib";
import { useEffect } from "react";

const PrimaryFooter = () => {
  useEffect(() => {
    ScrollReveal.reveal("#footerContent");
  }, []);

  return (
    <div className={`w-full bg-darkGreen px-8 py-12`}>
      <div id="footerContent">
        <div className="mb-12">
          <Brand intent="primary" />
          <SubHeading textColor="white" className="mt-8">
            Building Your Vision with Precision
          </SubHeading>
        </div>
        <SubscriptionNewsletterForm />
      </div>
      <FooterNavegation id="footerContent" />
    </div>
  );
};

export default PrimaryFooter;
