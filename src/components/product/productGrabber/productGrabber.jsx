import "./productGrabber.css";

const Product = ({img,link}) => {
  return (
    <div className="pg">
      <div className="pg-browser">
        <div className="pg-circle"></div>
        <div className="pg-circle"></div>
        <div className="pg-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer" className="pg-link">
        <img src={img} alt="" className="pg-img"/>
      </a>
    </div>
  );
};

export default Product;