import img1 from '../../images/1.jpg'
import img2 from '../../images/2.jpg'
import img3 from '../../images/3.jpg'
import img4 from '../../images/4.jpg'
import img5 from '../../images/5.jpg'
import img6 from '../../images/6.jpg'


const SomeStuff = [
    {
        id: 1,
        name: 'حسن مرادی ویشکایی',
        role: 'فرانت اند',
        imgSrc: img1
    },

    {
        id: 2,
        name: 'علی باغبان',
        role: 'بک اند',
        imgSrc: img2
    },

    {
        id: 3,
        name: 'ارغون موسی نژاد',
        role: 'دبیر فرانت اند',
        imgSrc: img3
    },

    {
        id: 4,
        name: 'علی صدفی',
        role: 'سر دبیر',
        imgSrc: img4
    },

    {
        id: 5,
        name: 'محمود ابدلی',
        role: 'بک اند',
        imgSrc: img5
    },

    {
        id: 6,
        name: 'سید امیر حسام موسوی ویری',
        role: 'مدیریت مالی',
        imgSrc: img6
    }
]

export const SomeStuffReducer = (state = SomeStuff, action) => {
    return state
}