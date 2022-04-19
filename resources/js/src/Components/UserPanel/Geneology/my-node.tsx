import React from "react";
import PropTypes from "prop-types";
import { Flex, Text } from "@chakra-ui/react";
// import "./my-node.css";

const propTypes = {
  nodeData: PropTypes.object.isRequired
};

const MyNode = ({ nodeData }) => {
  const selectNode = () => {
    // alert('Ref ID: '+nodeData.ref_id);
    window.location.href = `/admin/user/${nodeData.id}`
  };

  return (
    <div onClick={selectNode}>
      {/* <div className="position">{nodeData.title}</div> */}
      <Flex direction='column' justify="center" className="position">
        <Text fontSize="sm" fontWeight="bold">{nodeData.name}</Text>
        <Text fontSize="xs">$0</Text>
      </Flex>
    </div>
  );
};

MyNode.propTypes = propTypes;

export default MyNode;
