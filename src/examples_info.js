let examples = {
    'if_else': {
        'title': 'If else conditions',
        'desc': 'Checks for a condition and executes code if true, otherwise executes different code',
        'code': `
        if 4 > 5:
            print('true')
        else:
            print('false')
        `
    },
    'for': {
        'title': 'For loop',
        'desc': 'Iterates through a sequence of elements, executing code for each element.',
        'code': `
        for i in range(5):
            print(i)
        `
    },
    'for_each': {
        'title': 'For each loop',
        'desc': 'Similar to for, but directly assigns the current element to a variable in the loop.',
        'code': `
        a = [1, 3, 5, 7, 9]
        for i in a:
            print(i)
        `
    },
    'while': {
        'title': 'While loop',
        'desc': 'Executes code repeatedly while a condition remains true.',
        'code': `
        a = 0
        while (a <= 5):
            a+=1
            print(a)
        `
    }
}

export default examples