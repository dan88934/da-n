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
          <div className="icon">
            <i className="fa-brands fa-whatsapp" />
          </div>
          <div className="name">WhatsApp</div>
        </div>
      </div>
      {/* Telegram */}
      <div className="col col-d-6 col-t-6 col-m-12 border-line-v" >
        <div className="resume-title border-line-h">
          <div className="icon">
            <i className="fa-brands fa-telegram" />
          </div>
          <div className="name">Telegram</div>
        </div>
      </div>
      <div className="clear" />
   
  <div className="clear" />
</div>
    </div>
  );
};
export default ContactInfo;
