function findJudge(n: number, trust: number[][]): number {
  if(trust.length === 0 && n > 1) return -1;
  if(trust.length === 0) return 1;
  const trustMap = {};
  
  for(const [truster, trustee] of trust){
    if(!(truster in trustMap))
      trustMap[truster] = [0, 0];
    trustMap[truster][1] += 1;
    if(!(trustee in trustMap))
      trustMap[trustee] = [0, 0];
    trustMap[trustee][0] += 1;
  }
  
  for(const [person, tuple] of Object.entries(trustMap))
    if(tuple[0] === n - 1 && tuple[1] === 0)
      return Number(person);
  
  return -1;
};

/*
  the town judge trusts nobody
  everyone trusts the town judge
  there's exactly one judge

  trust = [[1,3], [2,3], [1,2], [2, 1]]
  [2, 1]
  n = 3
  n - 1 = 2
  trustMap = {
    1: [1, 2]
    3: [2, 0]
    2: [1, 2]
  }
  
  
  label: (num people who trust this person, num people who this person trust)
  trustMap = {
      
  };
  
  constraints:
  1- n - 1
  2- this person trusts nobody (0)
  3- There must exist only one judge
  
  - for each element in trust array
      if element[0] is not in map
        initialize it with [0, 0]
      then increment the index one of trustMap[element[0]]
      if element[1] is not in map
        initialize it with [0, 0]
      then increment index zero of trustMap[element[1]]
  - for each [key, value] in trustMap
      if value[0] === n - 1 && value[1] === 0
        return key
  - return -1
  
  trust array = [[1, 2], [3, 4]] = 2
  n is the number of keys in the map
  m length of trust array
  O(m)
  O(m)
*/