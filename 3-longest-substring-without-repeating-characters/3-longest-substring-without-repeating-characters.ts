function lengthOfLongestSubstring(s: string): number {
	const charFrequency = {};
	let ans = 0;
	let windowStart = 0;
	for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
		const char = s[windowEnd];
		if (!(char in charFrequency)) charFrequency[char] = 0;
		charFrequency[char] += 1;
		while (charFrequency[char] > 1) {
			const shrinkChar = s[windowStart];
			charFrequency[shrinkChar] -= 1;
			windowStart++;
		}
		ans = Math.max(ans, windowEnd - windowStart + 1);
	}
  
	return ans;
};