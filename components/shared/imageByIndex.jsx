import image1 from '@/assets/icons/Images/slide-1.jpg'
import image2 from '@/assets/icons/Images/slide-2.jpg'
import image3 from '@/assets/icons/Images/slide-3.jpg'
import image4 from '@/assets/icons/Images/slide-4.jpg'

export const images = [image1, image2, image3, image4]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex
