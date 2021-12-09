import React from 'react';

function Sections(props) {

  return (
    <section
      className={"snap-scroll-section " +
        "max-w-screen min-h-screen " +
        props.className}
    >
      <div className={"mx-auto"}>
        {props.children}
      </div>
    </section>
  );
}

export default Sections;