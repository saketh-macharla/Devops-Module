import React from 'react'



//This is a Functional Component with props of type Props
//It just renders a h1 tag with content Hi props.text

interface Person{
    fname:string,
    lname:string;
}

interface Props {
    text:string;
    ok?:boolean;
    i?:number;
    fn?:(bob:string) => string;
    person?:Person;
}

const TextFiled:React.FC<Props> = (props) => {
  return (
    <div>
      <h1>hi {props.text}</h1>
    </div>
  )
}
export default TextFiled
