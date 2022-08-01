function canVisitAllRooms(rooms: number[][]): boolean {
    const startRoom = 0;
    const visited = new Set<number>();
    dfs(startRoom, rooms, visited);
    return visited.size === rooms.length
};

function dfs(room: number, rooms: number[][], visited: Set<number>){
    visited.add(room);
    for(const neighbor of rooms[room])
        if(!visited.has(neighbor))
            dfs(neighbor, rooms, visited);
}