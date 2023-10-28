const Error = () => {
  return (
    <p
      className="font-inter font-bold text-black text-center"
      data-testid="error">
      The page cannot be summarized.
      <br />
      The page should contain text blocks.
      <br />
      Please try again later or try with another article.
    </p>
  );
};

export default Error;
