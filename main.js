/*
1. Two Sum

Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]. 

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]


Ваша задача - вернуть индексы двух чисел, которые в сумме дают целевое число.

Вот шаги, которые мы будем следовать:

1. Создайте словарь для отслеживания пройденных чисел и их индексов.
2. Пройдите по каждому числу в массиве nums.
3. Проверьте, есть ли разница между целевым числом и текущим числом в словаре. Если да, верните индексы этих двух чисел.
4. Если нет, добавьте текущее число и его индекс в словарь.

Your task is to return the indices of the two numbers that add up to the target number.

Here are the steps we will follow:

1. Create a dictionary to track the passed numbers and their indices.
2. Go through each number in the nums array.
3. Check whether the difference between the target number and the current number is in the dictionary. If so, return the indices of these two numbers.
4. If not, add the current number and its index to the dictionary.

*/

function twoSum(nums, target) {
    // Создаем словарь для отслеживания пройденных чисел и их индексов
    // Create a dictionary to track the passed numbers and their indices
    let map = {};

    // Проходим по каждому числу в массиве nums
    // Go through each number in the nums array
    for (let i = 0; i < nums.length; i++) {
        // Проверяем, есть ли разница между целевым числом и текущим числом в словаре
        // Check whether the difference between the target number and the current number is in the dictionary
        let complement = target - nums[i];
        if (map[complement] !== undefined) {
            // Если да, возвращаем индексы этих двух чисел
            // If so, return the indices of these two numbers
            return [map[complement], i];
        }

        // Если нет, добавляем текущее число и его индекс в словарь
        // If not, add the current number and its index to the dictionary
        map[nums[i]] = i;
    }

    // Если мы прошли все числа в nums и не вернули индексы, возвращаем пустой массив
    // If we have gone through all numbers in nums and have not returned indices, return an empty array
    return [];
}
