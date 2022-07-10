type Tuple = [number,number]
function kClosest(points: number[][], k: number): number[][] {
    const sortedPointsBasedOnDistance = 
          points.sort((a,b) => calculateDistance(a as Tuple) - calculateDistance(b as Tuple))
    
    const closestPoints = new Array<[number,number]>(k);
    for(let i = 0 ; i < k ; i++)
        closestPoints[i] = sortedPointsBasedOnDistance[i] as Tuple;
        
    return closestPoints
};

function calculateDistance([x,y]:[number,number]){
    return Math.sqrt(x * x + y * y)
}