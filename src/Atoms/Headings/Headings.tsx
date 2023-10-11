interface HeadingsProperties {
  children?: JSX.Element;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const Headings = ({ children, level }: HeadingsProperties) => {
  const HeadTag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <HeadTag data-testid="heading" className="head_text">
      {children}
    </HeadTag>
  );
};

Headings.defaultProps = {
  children: "",
  level: 1,
};

export default Headings;
