/**
 *
 * H1Link
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const A = styled.a`
  text-decoration: none;
`;

function H1Link(props) {
  const { title, url } = props;
  return (
    <A href={url}>
      <h1>{title}</h1>
    </A>
  );
}

H1Link.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
};

H1Link.defaultProps = {
  title: '[Title Here]',
  url: '#',
};

export default H1Link;
