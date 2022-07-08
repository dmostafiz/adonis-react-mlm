import React, { useEffect, useState } from "react";
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

  const [levelPercent, setPercent] = useState(0)

  useEffect(() => {

    nodeData.level == 1 ? setPercent(nodeData.package.level_one)
      : nodeData.level == 2 ? setPercent(nodeData.package.level_two)
        : nodeData.level == 3 ? setPercent(nodeData.package.level_three)
          : nodeData.level == 4 ? setPercent(nodeData.package.level_four)
            : nodeData.level == 5 ? setPercent(nodeData.package.level_five)
              : nodeData.level == 6 ? setPercent(nodeData.package.level_six)
                : nodeData.level == 7 && setPercent(nodeData.package.level_seven)

  }, [])

  return (
    <div onClick={selectNode}>
      {/* <div className="position">{nodeData.title}</div> */}
      <Flex direction='column' justify="center" className="position">
        <Text fontSize="sm" fontWeight="bold">{nodeData.name}</Text>
        <Text fontSize="xs">${nodeData.purchased * ( levelPercent / 100 ) }</Text>
      </Flex>
    </div>
  );
};

MyNode.propTypes = propTypes;

export default MyNode;
