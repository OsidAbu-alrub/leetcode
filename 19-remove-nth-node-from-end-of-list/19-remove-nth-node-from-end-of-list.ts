function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let current = head;
  let length = 0;
  
  while(current){
    current = current.next;
    length++;
  }
  
  if(n === length)
    return head.next;
  
  current = head;
  for(let i = 1 ; i < length - n ; i++)
    current = current.next;
  current.next = current.next.next;
  return head;
};