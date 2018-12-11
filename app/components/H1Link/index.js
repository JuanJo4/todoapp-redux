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
  display: block;

  h1 {
    margin: 0;
    padding: 0;
  }
`;

function H1Link(props) {
  const { title, url, className } = props;
  return (
    <A href={url} className={className}>
      <h1>{title}</h1>
    </A>
  );
}

H1Link.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  className: PropTypes.string,
};

H1Link.defaultProps = {
  title: '[Title Here]',
  url: '#',
  className: '',
};

export default H1Link;
