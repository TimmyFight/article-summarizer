interface HeadingsProperties {
  children?: JSX.Element;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  customClass?: string;
}

const Headings = ({ children, level, customClass }: HeadingsProperties) => {
  const HeadTag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <HeadTag data-testid="heading" className={customClass}>
      {children}
    </HeadTag>
  );
};

Headings.defaultProps = {
  children: "",
  level: 1,
  customClass: "head_text",
};

export default Headings;
