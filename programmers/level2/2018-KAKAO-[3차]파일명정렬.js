function solution(files) {
  return files.sort((fileA, fileB) => {
    const a = getPattern(fileA);
    const b = getPattern(fileB);

    const headA = a.head.toLowerCase();
    const headB = b.head.toLowerCase();

    // -1이면 a를 b보다 앞에
    // 1이면 a,b 그대로
    if (headA < headB) return -1;
    else if (headA > headB) return 1;
    else {
      const aNum = Number(a.number);
      const bNum = Number(b.number);

      if (aNum < bNum) return -1;
      else if (aNum > bNum) return 1;
      else return 1;
    }
  });
}

const getPattern = (file) => {
  const match = file.match(/([A-Za-z\.\-\s]+)([0-9]{1,5})(.*)/);
  return { head: match[1], number: match[2], tail: match[3] };
};
