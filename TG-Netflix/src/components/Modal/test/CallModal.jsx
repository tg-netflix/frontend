import React, { useRef, useEffect, useState } from "React";
import { Child } from "../test/CallModal.styled";

import CallSmallModal from "./CallSmallModal";
import CallBigModal from "./CallBigModal";

function CallModal(props) {

  const forwardRefSmallModal = useRef();
  const forwardRefBigModal = useRef();
  const [coords, setCoords] = useState();

  // useEffect(()=>{
  //   forwardRefSmallModal.current.style.left = props.coords.left +'px'
  //   forwardRefSmallModal.current.style.top = props.coords.top +'px'
  //   forwardRefSmallModal.current.style.width = props.coords.width +'px'
  //   forwardRefSmallModal.current.style.height = props.coords.height +'px'
  // },[])

  // useEffect(() => {
  //   const currentForwardRefSmallModal = forwardRefSmallModal.current;
  //   currentForwardRefSmallModal.addEventListener("click", () => {
  //     const parentDiv = currentForwardRefSmallModal.parentNode;
  //     const xCoord = parentDiv.getBoundingClientRect().left;
  //     const yCoord = parentDiv.getBoundingClientRect().top;
  //     setCoords({ xCoord, yCoord });
      
  //     forwardRefBigModal.current.children[0].style.transformOrigin =
  //       xCoord + "px " + yCoord + "px";
  //     forwardRefBigModal.current.style.display = "block";
  //   });
  // }, [coords]);

  return (
    <Child>
      <CallSmallModal {...props} ref={forwardRefSmallModal} />
      <CallBigModal {...props} ref={forwardRefBigModal} />
    </Child>
  );
}

export default CallModal;
