import React from "react";
import PropTypes from "prop-types";
import { Center } from "@chakra-ui/react";
// import "./my-node.css";

const propTypes = {
  nodeData: PropTypes.object.isRequired
};

const MyNode = ({ nodeData }) => {
  const selectNode = () => {
    alert("Hi All. I'm " + nodeData.name);
  };

  return (
    <div onClick={selectNode}>
      {/* <div className="position">{nodeData.title}</div> */}
      <Center className="position">{nodeData.name}</Center>
    </div>
  );
};

MyNode.propTypes = propTypes;

export default MyNode;
