import { useState, useRef, useEffect } from "react";
import Arrow from "../../assets/arrow-back.svg";

const ALLOWED_TAGS = ["h3", "h4", "p", "span"];

function Collapsible({ title, content, as, forcedHeight, contentRef }) {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const innerRef = useRef(null);
  const Tag = ALLOWED_TAGS.includes(as) ? as : "h3";

  const setInnerRefs = (node) => {
    innerRef.current = node;

    if (!contentRef) {
      return;
    }

    if (typeof contentRef === "function") {
      contentRef(node);
      return;
    }

    contentRef.current = node;
  };

  const measureHeight = () => {
    if (!innerRef.current) {
      return;
    }

    setContentHeight(innerRef.current.scrollHeight);
  };

  const effectiveHeight =
    typeof forcedHeight === "number" && forcedHeight > 0
      ? forcedHeight
      : contentHeight;

  useEffect(() => {
    if (isOpen) {
      measureHeight();
    }
  }, [isOpen, content]);

  useEffect(() => {
    if (!innerRef.current) {
      return;
    }

    const observer = new ResizeObserver(() => {
      if (isOpen) {
        measureHeight();
      }
    });

    observer.observe(innerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [isOpen]);
  
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
        className={`collapsible__content ${isOpen ? "open" : ""}`}
        style={{
          height: isOpen ? `${effectiveHeight}px` : "0px",
        }}
      >
        <div ref={setInnerRefs} className="collapsible__inner">
          {content}
        </div>
      </div>
    </div>
  );
}

export default Collapsible;