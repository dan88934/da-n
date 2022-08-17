import zenmon_img1 from '../assets/Zenmon1.png'
import zenmon_img2 from '../assets/Zenmon2.png'
import zenmon_img3 from '../assets/Zenmon3.png'

const zenmon = 
  {id: 3, 
    image1: zenmon_img1, 
    image2: zenmon_img3, 
    title: 'Zenmon',
    description_text:'Flashcard creation and study app',
    long_description_text:'Zenmon is an application which allows users to create Japanese language flashcards. It is different from mainstream flashcard websites such as Cram and Quizlet in that it allows users to create flashcards with three sides. This is particularly useful for people studying Japanese as it allows them to have a side for Hiragana, Kanji and English.',
    long_description_text2:'The application features a CRUD interface (dashboard app) on which users can create flashcard sets. It also features an interactive study page with a flippable flashcard (study app).',
    long_description_text3:'The backend consists of Django with a Postgres DB. The interactive study page is written in Vue JS. There are unittests in the dashboard directory.',
    completed_date:'October 2021',
    stack_used:'Python (Django), Vue, Bootstrap',
    github: 'https://github.com/dan88934/zenmon',
    site: 'https://zenmon.app'
  }


export default zenmon