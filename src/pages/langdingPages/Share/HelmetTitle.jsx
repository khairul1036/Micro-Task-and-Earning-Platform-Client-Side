import { Helmet } from "react-helmet-async";

const HelmetTitle = ({favTitle}) => {
  return (
    <Helmet>
      <title>{favTitle}</title>
    </Helmet>
  );
};

export default HelmetTitle;
