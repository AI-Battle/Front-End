import img3 from '../../images/3.jpg'
import img4 from '../../images/4.jpg'
import img5 from '../../images/7.jpg'
import img6 from '../../images/2.jpg'

const SomeStuff = [
    {
        id: 1,
        name: 'علی باغبان',
        latinName: '',
        role: 'دبیر بک اند',
        linkedInAccount: '',
        githubAccount: 'http://Github.com/Arghun-dev',
        imgSrc: img6
    },

    {
        id: 2,
        name: 'ارغون موسی نژاد',
        latinName: 'Arghun Mousanezhad',
        job: 'Senior Front-end & React Developer',
        role: 'دبیر فرانت اند',
        linkedInAccount: 'http://linkedin.com/in/arghun-mousanezhad-06575618a',
        githubAccount: 'http://Github.com/Arghun-dev',
        imgSrc: img3
    },

    {
        id: 3,
        name: 'علی صدفی',
        role: 'سر دبیر',
        linkedInAccount: '',
        githubAccount: 'http://Github.com/Arghun-dev',
        imgSrc: img4
    },

    {
        id: 4,
        name: 'علی حسین مردی',
        role: 'دبیر بازی و گرافیک',
        linkedInAccount: '',
        githubAccount: 'http://Github.com/Arghun-dev',
        imgSrc: img5
    }
]

export const SomeStuffReducer = (state = SomeStuff, action) => {
    return state
}