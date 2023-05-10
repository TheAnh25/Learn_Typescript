type PersonProps = {
  name: {
    first: string;
    last: string;
  };
};

export const Person = (props: PersonProps) => {
  return (
    <div>
      <p className="text-red-500">
        Hello {props.name.last} {props.name.first} Person
      </p>
    </div>
  );
};
