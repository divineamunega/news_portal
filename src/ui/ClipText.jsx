const ClipText = ({ limit, children, className }) => {
  return (
    <p className={className}>
      {children
        .split("")
        .filter((word, i) => i < limit)
        .join("")}
      ...
    </p>
  );
};

export default ClipText;
