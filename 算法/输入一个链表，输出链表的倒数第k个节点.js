const findK = (head, k) => {
    let p = head, q = head;
    let i = 0;
    while (p) {
        if (i >= k) q = q.next;
        p = p.next;
        i++;
    }
    return i < k ? null : q;
}