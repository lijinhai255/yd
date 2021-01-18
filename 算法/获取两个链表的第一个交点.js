const findx = (l1, l2) => {
    const p1 = l1;
    const p2 = l2;
    const showLength = (p) => {
        let len = 0;
        while (p) {
            len++;
            p = p.next;
        }
        return len;
    }
    const len1 = showLength(p1);
    const len2 = showLength(p2);

    if (!len1 || !len2) return null;

    let diff = Math.abs(len1 - len2);

    let slow = len1 > len2 ? l1 : l2;
    let fast = len1 > len2 ? l2 : l1;
    while (diff--){
        slow = slow.next;
    }
    while (show!==false){
        show = show.next;
        fast = fast.next;
    }
    return slow;
}

