// import { forwardRef } from "react";
// import { utils } from "@mb";
// import { Skeleton, Spin } from "antd";
// import CustomScrollbars from "util/CustomScrollbars";
// import InfiniteScroll from "react-infinite-scroller";

export const InfiniteScroller = () => {}
// forwardRef(
//   (
//     {
//       loading,
//       onLoadMore,
//       pageInfo,
//       children,
//       initialPage = 1,
//       initialLoad = false,
//     },
//     ref
//   ) => {
//     return (
//       <CustomScrollbars className="mb-module-content-scroll">
//         <br />
//         {loading && utils.isEmpty(children) ? (
//           <div className="gx-loader-view">
//             {[...Array(3)].map((_, index) => (
//               <Skeleton active key={index} />
//             ))}
//           </div>
//         ) : (
//           <InfiniteScroll
//             ref={ref}
//             initialLoad={initialLoad}
//             pageStart={initialPage}
//             loadMore={onLoadMore}
//             hasMore={!loading && pageInfo?.HasNext}
//             useWindow={false}
//             loader={<Spin style={{ width: "100%" }} size="medium" />}
//           >
//             {children}
//           </InfiniteScroll>
//         )}
//       </CustomScrollbars>
//     );
//   }
// );

export default InfiniteScroller;
