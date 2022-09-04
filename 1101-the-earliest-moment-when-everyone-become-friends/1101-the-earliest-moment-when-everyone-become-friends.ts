// this question can be rephrased to:
// When did the graph become connected
function earliestAcq(logs: number[][], n: number): number {
  logs.sort(([t1], [t2]) => t1 - t2);
  
  // this resembles the graph person: Array<[anotherPerson, timestamp]>
  const graph = new Map<number, Array<[number, number]>>();
  for(let i = 0 ; i < n ; i++)
    graph.set(i, []);
  for(const [timestamp, personA, personB] of logs){
    graph.get(personA).push([personB, timestamp]);
    graph.get(personB).push([personA, timestamp]);
  }
  
  // min heap to compare based on timestamp
  const heap = new MinPriorityQueue({priority: ([, timestamp]) => timestamp});
  heap.enqueue([logs[0][1], logs[0][0]]);
  
  // visited set to keep track of nodes that we've seen
  const visited = new Set<number>();
  let minTime = 0;
  while(!heap.isEmpty()){
    const [person, timestamp] = heap.dequeue().element;
    
    // if we've seen a person before 
    if(visited.has(person)) continue;
    
    visited.add(person);
    
    // now we take the max between current timmstamp and minTime
    // because there might exist a node that met another node at an earlier time
    // but our graph didn't represent that (like example one)
    minTime = Math.max(timestamp, minTime);
    
    // loop over the neighbors "friends" of this person
    for(const [neighbor, timestamp] of graph.get(person)){
      if(!visited.has(neighbor))
        heap.enqueue([neighbor, timestamp]);
    }
  }
  
  // if we exit the loop and we didn't loop over all 
  // the people, then we know that there exists some
  // people that don't have any relations with others (disconnected nodes/ graphs)
  return visited.size === n ? minTime : -1;  
};