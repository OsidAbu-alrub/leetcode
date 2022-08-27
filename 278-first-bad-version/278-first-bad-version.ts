/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {
    return function(n: number): number {
      let start = 1;
      let end = n;
      let firstBadVersion = 1;
      while(start <= end){
          const mid = Math.floor((start + (end - start) / 2));
          const isBadVersionAtMid = isBadVersion(mid);
        if(isBadVersionAtMid){
          firstBadVersion = mid;
          end = mid - 1;
        }
        else 
          start = mid + 1;
      }
      return firstBadVersion;
    };
};

