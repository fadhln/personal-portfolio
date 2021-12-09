import React from 'react';

function Sections(props) {

  return (
    <section
      className={"snap-scroll-section " +
        "w-screen min-h-screen " +
        props.className}
    >
      <div className={"container mx-auto"}>
        {props.children}
      </div>
    </section>
  );
}

export default Sections;