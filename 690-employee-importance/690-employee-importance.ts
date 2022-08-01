/**
 * Definition for Employee.
 * class Employee {
 *     id: number
 *     importance: number
 *     subordinates: number[]
 *     constructor(id: number, importance: number, subordinates: number[]) {
 *         this.id = (id === undefined) ? 0 : id;
 *         this.importance = (importance === undefined) ? 0 : importance;
 *         this.subordinates = (subordinates === undefined) ? [] : subordinates;
 *     }
 * }
 */

function getImportance(employees: Employee[], id: number): number {
    const employee = employees.find(emp => emp.id === id);
    const mapOfEmployees = new Map<number, Employee>();
    for(const emp of employees)
        mapOfEmployees.set(emp.id, emp);
    let totalImportance = 0;
    let currentLevel = [employee];
    const visited = new Set<number>([id]);
    while(currentLevel.length){
        const current = currentLevel.shift();
        totalImportance += current.importance;
        for(const employeeId of current.subordinates){
            if(!visited.has(employeeId)){
                visited.add(employeeId);
                currentLevel.push(mapOfEmployees.get(employeeId));
            }
        }
    }
    return totalImportance; 
};