import {useMemo} from 'react'

export const DOTS= "...";

export const usePagintion = ({ siblingCount= 1, currentPage, totalPageCount}) => {
   const pagintionRang = useMemo(()=> {
   // our core logic goes here
   const totalPageNumbers = siblingCount + 5;

   // state 1 : if the number of pages is less than the page numbers
   if(totalPageNumbers >= totalPageCount){
      return range(1, totalPageCount);
   }

   // calculating the left and right sibling index
   const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
   const rightSilingIndex = Math.min(currentPage + siblingCount, totalPageCount);

   const shoudShowLeftDots = leftSiblingIndex > 2;
   const shoudShowRightDits = rightSilingIndex < totalPageCount - 2;

   const firstPageIndex = 1;
   const lastPageIndex = totalPageCount;

   if(!shoudShowLeftDots && shoudShowRightDits){
      let leftItemCount = 3 + 2 * siblingCount;
      let leftrang = range(1, leftItemCount);

      return [...leftrang, DOTS, totalPageCount];
   }

   if(shoudShowLeftDots && !shoudShowRightDits){
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);

      return [firstPageIndex, DOTS, ...rightRange]
   }

   if(shoudShowLeftDots && shoudShowRightDits){
       let middleRange = range(leftSiblingIndex, rightSilingIndex);
       return [firstPageIndex, DOTS, middleRange, DOTS, lastPageIndex]
   }

   },
    [
    siblingCount,
    currentPage,
    totalPageCount,
   ]);

   return pagintionRang;
};

function range(start, end){
   const length = end - start + 1;

   return Array.from({length}, (value, index) => index + start);  // [undefined, undefined, undefined, undefined, undefined]
}