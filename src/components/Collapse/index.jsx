import { useState, useRef } from "react";
import Arrow from "../../assets/arrow-back.svg";


function Collapsible({ title, content, as: Tag = "h2", forcedHeight, contentRef }) {
  const [isOpen, setIsOpen] = useState(false);
  const internalRef = useRef(null);

  const ref = contentRef || internalRef;

  const toggle = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className="collapsible">
      <button className="collapsible__button" onClick={toggle}>
        <Tag>{title}</Tag>
        <img
          className="collapsible__img"
          style={{ transform: `rotate(${isOpen ? -180 : 0}deg)` }}
          src={Arrow}
          alt="arrow"
        />
      </button>

      <div
        ref={ref}
        className={`collapsible__content ${isOpen ? "open" : ""}`}
        style={{
          height: isOpen
            ? forcedHeight
              ? `${forcedHeight}px`
              : `${ref.current?.scrollHeight}px`
            : "0px",
        }}
      >
        <div className="collapsible__inner">
          {content}
        </div>
      </div>
    </div>
  );
}

export default Collapsible;