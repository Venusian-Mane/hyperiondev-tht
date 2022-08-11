# Correctness
# Please make sure you use the correct indentation for your function definition in line 2. Python is sensitive to white space as it uses that to distinguish code blocks
# Your codes syntax is correct and mostly well structured.
# When using the sorted function like you have in line 5, at least one argument is required which is any iterable value to be sorted.

# Efficiency and Style
# The code is quite efficient and applies OOP principles well by creating class instances which is the better style of programming.

# Documentation
# Remember to add comments to your code to clarify what it does and its purpose



# Code Correction

# create new Solution class
class Solution:

    def groupAnagrams(self, strs):
        result = {}
        for i in strs:
            x = ''.join(sorted(i))

            # separate and group words with similar letters into dictionary
            if x in result:
                result[x].append(i)
            else:
                result[x] = [i]
        return list(result.values())

# create instance, call method and output grouped anagrams.
ob1 = Solution()
print(ob1.groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))