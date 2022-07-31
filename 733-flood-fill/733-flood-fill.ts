let BASE_COLOR = 0;
function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    BASE_COLOR = image[sr][sc]; 
    const visited = new Set<string>();
    dfs(sr,sc,color,image, visited);
    return image;
};

function dfs(i:number, j:number, color:number, image: number[][], visited: Set<string>){
    if(!check(i, j, image, visited)) return;
    visited.add(getKey(i, j));
    image[i][j] = color;
    dfs(i - 1, j, color, image, visited);
    dfs(i + 1, j, color, image, visited);
    dfs(i, j + 1, color, image, visited);
    dfs(i, j - 1, color, image, visited);

}
    
function check(i:number, j:number ,image: number[][], visited: Set<string>){
    if(visited.has(getKey(i, j))) return false;
    try{
        if(image[i][j] === undefined) return false;
        return image[i][j] === BASE_COLOR; 
    }
    catch(e){
        return false;
    }
}

function getKey(i:number, j:number){
    return `${i}-${j}`;
}