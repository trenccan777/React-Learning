import React from "react";
import Card from "./Card"
export default function MainContent() {
  let name = "Marek";

  return (
    //javascript variable inside JSX can be use with curly braces {}
    <main>
      <p>My name is {name}.</p>
    {/*CSS inline style or className*/}
      <p className='paragraph'>I have been <span style={{color: 'red', fontWeight:'700'}}>30</span> years old.</p>
      <p style={paragraphStyle}>I'm learning React inline styling with variable inside component.</p>
      {/* Props */}
      <Card  cardinfo="This is car info is passed as a props"/>
    </main>
  );
}

const paragraphStyle = {
    fontStyle: 'italic'
}