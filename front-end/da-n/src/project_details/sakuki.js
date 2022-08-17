import sakuki_img1 from '../assets/Sakuki1.png'
import sakuki_img2 from '../assets/Sakuki2.png'

const sakuki = 
    {id: 1, 
    image1: sakuki_img1, 
    image2: sakuki_img2, 
    title: 'Sakuki',
    description_text:'Japanese business translation app',
    long_description_text:'Sakuki is a business Japanese language translator. It initially uses Google translate\'s API to translate the string in question to Japanese. It then filters the translation which it receives from the API, removing certain inapropriate words which Google translate tends to put in translations and replacing those with the appropriate words.',
    long_description_text2:'I used REGEX to remove the following terms from the translated string: 1. やあ - Produced when Google translate sees "Hi". Replaced with "こんにちは". 2. おい - Produced when Google translate sees "Hey". Replaced with "こんにちは". 3. あなた - Produced when Google translate sees "you". Replaced with "お客様".',
    long_description_text3:'I created a CI and CD workflow for Sakuki with Semaphore. There are currently tests for all the main Go functions, these can be found in main_test.go. If the code which has been pushed successfully passes the pipeline, then it is pulled to the server (Digital Ocean VPS) via Semaphore executing the deploy.sh script on the server.',
    completed_date:'July 2022',
    stack_used:'GO (Gin), Javascript (React), CSS (Styled Components)',
    //Add description here, pass it into the map and template below
    github: 'https://github.com/dan88934/sakuki',
    site: 'https://sakuki.da-n.co'
  }


export default sakuki