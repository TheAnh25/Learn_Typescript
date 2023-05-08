type PersonListProps = {
  names: {
    first: string;
    last: string;
  }[];
};

export const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name) => (
        <h2 key={name.first}>
          {name.last} {name.first}
        </h2>
      ))}
    </div>
  );
};
