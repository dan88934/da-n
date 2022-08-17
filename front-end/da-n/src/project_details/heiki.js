import heiki_img1 from '../assets/Heiki1.png'
import heiki_img2 from '../assets/Heiki2.png'

const heiki = 
  {id: 3, 
    image1: heiki_img1, 
    image2: heiki_img2, 
    title: 'Heiki',
    description_text:'Vocabulary list creation app',
    long_description_text:'Heiki is a flask-based web app which allows users to generate Japanese language vocabulary lists from image(s) or document(s). The vocabulary list can be downloaded by the user, and will be in a Word document (.docx) format.',
    long_description_text2:'I created Heiki by combining various NLP Python packages for OCR and tokenization. I customized the Jamdict package (Japanese-to-English dictionary for Python), which is used in this app, to suit my use case.',
    long_description_text3:'There are some sample images and documents in the sample_files folder in the Github repository which can be used to test the application manually. Automated tests written using Unittest and Selenium.',
    completed_date:'March 2021',
    stack_used:'Python (Flask), HTML, Bootstrap',
    github: 'https://github.com/dan88934/heiki',
    site: 'https://heiki.da-n.co'
  }


export default heiki