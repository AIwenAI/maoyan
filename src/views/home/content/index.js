import React,{Fragment} from 'react';
import {
  Flex,
  InputItem,
  Button
} from 'antd-mobile';

class Content extends React.Component {
  render() {
    return (
      <Fragment>
        <Flex>
          <Flex.Item><InputItem /></Flex.Item>
          <Flex.Item><Button>添加</Button></Flex.Item>
        </Flex>
      </Fragment>
    )
  }
}

export default Content;
