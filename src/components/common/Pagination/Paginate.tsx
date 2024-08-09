import ReactPaginate from "react-paginate";
import "./styles.modules.css";
type Props = {
  //   pageCount
  //   categories: RelumeButtonProps[];
};

export type BlogsGridProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

const Pagination = (props: BlogsGridProps) => {
  const {} = {} as Props;
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=""
      onPageChange={() => {}}
      pageRangeDisplayed={2}
      pageCount={99}
      previousLabel=""
      renderOnZeroPageCount={null}
      className="flex flex-row gap-5 pagination-navbar flex-wrap justify-center"
    />
  );
};

export default Pagination;
