const ScientificEducations = [
    {
        id: 1,
        heading: 'Search',
        persianHeading: 'جست و جو',
        text: 'اولین متن',
        link: 'http://google.com'
    },

    {
        id: 2,
        heading: 'MinMax',
        persianHeading: 'مین مکس',
        text: 'دومین متن',
        link: 'http://github.com'
    },

    {
        id: 3,
        heading: 'Marcov Decision Processes',
        persianHeading: 'فرایند تصمیم گیری مارکوف',
        text: 'سومین متن',
        link: 'http://github.com'
    },

    {
        id: 4,
        heading: 'Reinforcement Learning',
        persianHeading: 'یادگیری تقویتی',
        text: 'چهارمین متن',
        link: 'http://github.com'
    }
]

export const ScientificEducationsReducer = (state = ScientificEducations, action) => {
    return state
}