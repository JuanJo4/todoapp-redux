import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const TaskList = styled.div`
  background: #ffff;
  border: 1px solid rgba(0, 0, 0, 0.15);
`;

export const FiltersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  font-size: 14px;
  border-bottom: 2px solid #f5f5f5;

  button {
    padding: 5px;
    margin: 0 2px;
    cursor: pointer;
    outline: none;

    &.active,
    :hover {
      outline: 1px solid #e07578;
    }
  }

  .items-left,
  .filters,
  .clear-completed {
    width: 33.33%;
  }
  .filters {
    text-align: center;
  }

  .clear-completed {
    text-align: right;
  }

  ${breakpoint('tablet')`
    font-size: 16px;
  `};
`;

export const BottomBorder = styled.div`
  margin: 0 auto;
  height: 5px;
  box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.15);

  &.before-last {
    width: 89%;

    ${breakpoint('tablet')`
      width: 69%;
    `};

    ${breakpoint('desktop')`
      width: 59%;
    `};
  }

  &.last {
    width: 88%;

    ${breakpoint('tablet')`
      width: 68%;
    `};

    ${breakpoint('desktop')`
      width: 58%;
    `};
  }
`;
