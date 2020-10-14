from collections import defaultdict

class Solution:
    def minWindow(self, s: str, t: str):

        # 所需字符数量，标示位
        need_str = len(t)
        # 存入所遍历字符，并记录所遇次数
        need_dict = defaultdict(lambda : None)

        # 初始化目标字符需要的个数
        for i in t:
            need_dict[i] += 1
        
        # 左指针字符位
        left_point = 0

        for index, val in enumerate(s):

            if need_dict[val] > 0:
                # 说明是需要字符, 则将标志位数减1
                need_str -= 1
            
            if  need_dict[val]:
                # 遇到字符，则字典内次数减1
                need_dict[val] -= 1
            
            # 如果所需要的字符总数已经为 0 了，表示已经包含了所有目标字符，则将左指针右移一位，知道窗口数据不符合要求为止
            if need_str == 0:

                # 如果所需字符数始终为0，则不会跳出循环
                while True:
                    # 当前左指针所指示数
                    val = s[left_point]
                    # 如果此字符是所需字符，说明左指针不能移动，否则不符合要求，要跳出循环
                    if need_dict[val] == 0
                        break
                    need_dict[val] += 1
                    # 左指针右移一位，继续循环
                    left_point += 1
                
                # 记录当前窗口位置
                
                
                

                





                    


