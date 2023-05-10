import { useEffect, useState } from "react";

type HelloProps = {
  name: string;
  age: number;
  isLogin: boolean;
};

export const Hello = (props: HelloProps) => {
  const [name, setName] = useState("Home");
  useEffect(() => {
    //props thay đổi render lại component
  }, [props]);
  return (
    <div>
      {props.isLogin
        ? `  Hello, Tôi là ${props.name} ! Năm nay ${props.age} tuổi`
        : `Hello ${name}`}
    </div>
  );
};
