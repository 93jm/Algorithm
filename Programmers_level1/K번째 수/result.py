def solution(array, commands):
    result = []
    for i in commands:
        helper = array[i[0]-1:i[1]]
        helper.sort()
        result.append(helper[i[2]-1])
    return result
