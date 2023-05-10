type ChildrenProps = {
  children: React.ReactNode;
};

export const ChildrenProps = (props: ChildrenProps) => {
  return <div>{props.children}</div>;
};
