import linux from '../../images/linux.png'
import windows from '../../images/windows.png'
import mac from '../../images/mac.png'
import server from '../../images/server.png'
import java from '../../images/java.png'
import python from '../../images/python.png'
import code from '../../images/code.png'
import download from '../../images/download (1).png'

const Resources = [
    {
        id: 1, 
        heading: 'مخزن بازی', 
        text: 'مستند بازی به همراه فایل‌های نقشه و سرور بازی در مخزن زیر قابل دسترسی هستند. برای شروع این مخزن را دریافت کنید و مستند را مطالعه کنید. برای نوشتن عامل هوشمند برای بازی علاوه بر محتویات این مخزن باید کلاینت زبان مورد نظر خود را نیز دریافت کنید.', 
        buttons: [{text: 'مشاهده و دریافت', icon: download}],
    },
    {
        id: 2, 
        heading: 'نمایشگر بازی', 
        text: 'برای مشاهده گرافیکی بازی نمایشگر مربوط به سیستم عامل خود را دریافت کنید.', 
        buttons: [{text: 'نسخه لینوکس', icon: linux}, {text: 'نسخه ویندوز', icon: windows}, {text: 'نسخه مک', icon: mac}]
    },
    {
        id: 3, 
        heading: 'سرور و کلاینت', 
        text: 'هموراه می‌توانید نسخه آخر سرور و کلاینت‌ها را از مخازن زیر دریافت کنید.', 
        buttons: [{text: 'سرور', icon: server}, {text: 'کلاینت java', icon: java}, {text: 'کلاینت python', icon: python}, {text: 'کلاینت ++c', icon: code}]
    }
]

export const ResourcesReducer = (state = Resources, action) => {
    return state
}