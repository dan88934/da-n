const ContactInfo = () => {
  return (
    <div className="content contacts">
      {/* title */}
      <div className="title">Get in Touch</div>
      {/* content */}
    <div className="row">
      {/* Whatsapp */}
      <div className="col col-d-6 col-t-6 col-m-12 border-line-v" >
        <div className="resume-title border-line-h">
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/d-hughes96/">
            <div className="icon">
              <i className="fa-brands fa-linkedin" />
            </div>
            <div className="name">LinkedIn</div>
          </a>
        </div>
      </div>
      {/* Telegram */}
      <div className="col col-d-6 col-t-6 col-m-12 border-line-v" >
        <div className="resume-title border-line-h">
        <a target="_blank" rel="noreferrer" href="https://t.me/a2k27">
          <div className="icon">
            <i className="fa-brands fa-telegram" />
          </div>
          <div className="name">Telegram</div>
        </a>
        </div>
      </div>
      <div className="clear" />
   
  <div className="clear" />
</div>
    </div>
  );
};
export default ContactInfo;
