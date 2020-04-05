const ScientificEducations = [
    {
        id: 1,
        heading: 'Search',
        text: 'اولین متن',
        link: 'http://google.com'
    },

    {
        id: 2,
        heading: 'MinMax',
        text: 'دومین متن',
        link: 'http://github.com'
    },

    {
        id: 3,
        heading: 'Marcov Decision Processes',
        text: 'سومین متن',
        link: 'http://github.com'
    },

    {
        id: 4,
        heading: 'Reinforcement Learning',
        text: 'چهارمین متن',
        link: 'http://github.com'
    }
]

export const ScientificEducationsReducer = (state = ScientificEducations, action) => {
    return state
}