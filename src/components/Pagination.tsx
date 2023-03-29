import styled from "styled-components";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const PaginationList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 20px 0;
  padding: 0;
`;

const PaginationListItem = styled.li`
  margin-right: 8px;
`;

const PaginationListItemButton = styled.button`
  padding: 12px 16px;
  font-size: 16px;
  border: 0px;
  border-radius: 4px;
  cursor: pointer;
`;

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <PaginationList>
        {pageNumbers.map((pageNumber) => (
          <PaginationListItem key={pageNumber}>
            <PaginationListItemButton onClick={() => onPageChange(pageNumber)}>
              {pageNumber}
            </PaginationListItemButton>
          </PaginationListItem>
        ))}
      </PaginationList>
    </nav>
  );
};

export default Pagination;
