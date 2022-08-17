import courier_app_img1 from '../assets/CourierApp1.png'
import courier_app_img2 from '../assets/CourierApp2.png'

const courier_app = 
  {id: 3, 
    image1: courier_app_img1, 
    image2: courier_app_img2, 
    title: 'Courier App',
    description_text:'Application which takes orders and calculates insurance charges for a fictional courier company',
    long_description_text:'This application receives orders and calculates the cost of insurance for the customers of a fictional courier company.',
    long_description_text2:'The application allows users to add orders to the database by filling in a form. Users are then given an order reference number. They can use this number to search for their order and see details about it on the search page.',
    long_description_text3:'I completed this small project as part of a coding chalenge. This was my first experience sending a JSON based request to an API. There are frontend and backend tests included, utilizing Selenium and Unittest. These can be ran from the main directory with \'python -m unittest\'.',
    completed_date:'November 2021',
    stack_used:'Python (Flask), Javascript',
    github: 'https://github.com/dan88934/heiki',
    site: 'https://heiki.da-n.co'
  }


export default courier_app