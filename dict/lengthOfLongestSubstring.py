class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        # 子串初始位置指针
        point = 0
        # 子串最长数
        max_len = 0
        # 字典
        temp_dict = {}

        for index, value in enumerate(s):
            if value in temp_dict:
                # 更新指针
                point = max(temp_dict[value] + 1, point)

            temp_dict[value] = index
            max_len = max(index - point + 1, max_len)
        
        return max_len
                
        

sss = Solution()

print(sss.lengthOfLongestSubstring('abcabcbb'))