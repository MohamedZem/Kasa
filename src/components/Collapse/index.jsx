import {useState} from "react";
import {Collapse} from "react-collapse";
import Arrow from "../../assets/arrow-back.svg";

const ALLOWED_TAGS = ["h3", "h4", "p", "span"];

function Collapsible({ title, content, as, contentRef, forcedHeight }) {
  const [isOpen, setIsOpen] = useState(false);
  const Tag = ALLOWED_TAGS.includes(as) ? as : "h3";
  
  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={`collapsible ${isOpen ? "collapsible--opened" : ""}`}>
      <button className="collapsible__button" onClick={toggle}>
        <Tag>{title}</Tag>
        <img
          className="collapsible__img"
          style={{ transform: `rotate(${isOpen ? -180 : 0}deg)` }}
          src={Arrow}
          alt="arrow"
        />
      </button>

      <Collapse 
        isOpened={isOpen} 
        theme={{ collapse: "collapsible__content"}}>
        <div ref={contentRef} 
        className="collapsible__inner" 
        style={{ height: isOpen && forcedHeight? `${forcedHeight}px` : "auto" }}>
        {content}
        </div>
      </Collapse>
    </div>
  );
};


export default Collapsible;