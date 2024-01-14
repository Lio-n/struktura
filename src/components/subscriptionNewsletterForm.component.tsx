import ArrowIcon from "../ui/atoms/arrowIcon.atom";
import Input from "../ui/atoms/input.atom";
import Body from "../ui/atoms/typographies/body.atom";

// This is only for mock usage...
const SubscriptionNewsletterForm = () => {
  return (
    <form className="border-b-2 border-gray-800">
      <Body textColor="white" className="mb-6">
        Stay informed with our newsletter
      </Body>
      <div className="flex">
        <Input placeholder="Type your email address" type="email" />
        <div className="cursor-pointer">
          <ArrowIcon className="inline ml-2" />
        </div>
      </div>
    </form>
  );
};

export default SubscriptionNewsletterForm;
