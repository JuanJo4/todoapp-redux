import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const TaskList = styled.div`
  background: #ffff;
  box-shadow: 0px 5px 20px 2px rgba(0, 0, 0, 0.5);
`;

export const FiltersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  font-size: 14px;

  button {
    padding: 5px;
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
