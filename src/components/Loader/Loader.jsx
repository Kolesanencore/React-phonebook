import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

const MyLoader = props => (
  <ThreeDots
    height="80"
    width="80"
    radius="9"
    color="#2184ed"
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClassName=""
    visible={true}
  />
);

export default MyLoader;
