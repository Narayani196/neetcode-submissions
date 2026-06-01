class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        difference = 0
        for i in range(1, len(prices)) :
            least = min(prices[0:i])
            highest = prices[i]
            curr_difference = highest - least
            if curr_difference > difference :
                difference = curr_difference
        return difference
        



        