import React from 'react'
// import CV from '../../assets/Daniel_Hughes_CV.docx' // This does not work with Webpack as it would need a docx loader

const CTA = () => {

  // const handleCVDownload = () => {
    // const response = await fetch("http://localhost:8080/download-cv/");
    // console.log(response)
    // const url = window.URL.createObjectURL(new Blob([response]));
    
    // const link = document.createElement("a");
    // link.href = url;
    // link.setAttribute("download", `daniel_hughes_cv.docx`);
    // document.body.appendChild(link);
    // link.click();

    // const url = '/download-cv'
    
    // const link = document.createElement("a");
    // link.href = url;
    // link.setAttribute("download", `daniel_hughes_cv.docx`);
    // document.body.appendChild(link);
    // link.click();
    // window.open('/download-cv')
    // };
    
  return (
    <div className='cta'>
        {/* <a href='../../../public/Daniel_Hughes_CV.docx' download className='btn'>Download CV</a> */}
        {/* <button className='btn btn-primary'
          onClick={handleCVDownload}
          >
          Download CV
        </button> */}
        <a href="/download-cv" download="proposed_file_name" className='btn btn-primary'>Download</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA