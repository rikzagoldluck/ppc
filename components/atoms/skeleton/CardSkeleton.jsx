import ContentLoader from "react-content-loader";

const CardSkeleton = () => {
  return (
    <ContentLoader
      backgroundColor="#343a40"
      foregroundColor="#656b72"
      className="mb-3 rounded-lg"
    >
      <rect x="0" y="0" width="100%" height="100%" />
    </ContentLoader>
  );
};

export default CardSkeleton;
