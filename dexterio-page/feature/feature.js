

const Feature = ({title,text}) => {
  return   <div className="landing__features-container__feature">
    <div className="landing__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="landing__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
};

export default Feature;
