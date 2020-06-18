import React, { useCallback } from 'react';
import { Pagination } from 'semantic-ui-react';

export default ({ offset, limit, total, onChange }) => {
  const totalPages = Math.ceil(total / limit);
  const onPageChange = useCallback((e, { activePage }) => {
    onChange({
      offset: (activePage - 1) * limit,
      limit
    });
  },[limit, onChange]);

  return <Pagination totalPages={totalPages} activePage={(offset / limit) + 1} onPageChange={onPageChange} />;
};