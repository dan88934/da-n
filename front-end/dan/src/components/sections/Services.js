import { Fragment } from "react";

const data = [
  {
    icon: "fa fa-code",
    title: "Fullstack Development",
    desc: "Building comprehensive, tailor-made websites that meet your business requirements. Experienced with both front-end (React JS) and back-end (Python and Go) development.",
  },
  {
    icon: "fa fa-server",
    title: "DevOps / Linux Administration ",
    desc: "Deploying and maintaining your infrastructure using tools such as Docker, Kubernetes, and NGINX. Experienced with Linux and cloud platforms such as DigitalOcean and AWS.",
  },
  {
    icon: "fa fa-robot",
    title: "Chatbot Development",
    desc: "Creating bots on platforms such as Telegram, Slack, Discord, and WhatsApp, integrating AI tools into these where beneficial. ",
  },
  {
    icon: "fa fa-file-code",
    title: "Scripting",
    desc: "Crafting custom scripts in Python and Bash to automate your tasks efficiently and effectively.",
  },
];

const Services = ({ serviceList }) => {
  const services = serviceList ? serviceList : data;
  return (
    <Fragment>
      <div className="content services">
        {/* title */}
        <div className="title">
          <span className="first-word">My</span> Services
        </div>
        {/* content */}
        <div className="row service-items border-line-v">
          {/* service item */}
          {services.map((service, i) => (
            <div key={i} className="col col-d-6 col-t-6 col-m-12 border-line-h">
              <div className="service-item">
                <div className="icon">
                  <span className={service.icon} />
                </div>
                <div className="name">
                  <span>{service.title}</span>
                </div>
                <div className="desc">
                  <div>
                    <p>{service.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="clear" />
      </div>
    </Fragment>
  );
};
export default Services;

export const ServicesClassic = () => {
  return (
    <div className="content services">
      {/* title */}
      <div className="title">My Services</div>
      {/* content */}
      <div className="row service-items border-line-v">
        {/* service item */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-h">
          <div className="service-item">
            <div className="icon">
              <span className="ion ion-code" />
            </div>
            <div className="name">Web Development</div>
            <p>
              Modern and mobile-ready website that will help you reach all of
              your marketing.
            </p>
          </div>
        </div>
        {/* service item */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-h">
          <div className="service-item">
            <div className="icon">
              <span className="ion ion-music-note" />
            </div>
            <div className="name">Music Writing</div>
            <p>
              Music copying, transcription, arranging and composition services.
            </p>
          </div>
        </div>
        {/* service item */}
        <div className="col col-d-6 col-t-6 col-m-12">
          <div className="service-item">
            <div className="icon">
              <span className="ion ion-speakerphone" />
            </div>
            <div className="name">Advetising</div>
            <p>
              Advertising services include television, radio, print, mail and
              web.
            </p>
          </div>
        </div>
        {/* service item */}
        <div className="col col-d-6 col-t-6 col-m-12">
          <div className="service-item">
            <div className="icon">
              <span className="ion ion-ios-game-controller-b" />
            </div>
            <div className="name">Game Development</div>
            <p>Developing memorable and unique mobile android, ios games.</p>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
