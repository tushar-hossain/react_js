import Toggle from "./Toggle";
import style from "./faqs.module.css";
const Faqs = ({ faqs }) => {
  return (
    <div className={style.faqs}>
      <h1>FAQS</h1>
      {faqs.map((faq) => (
        <Toggle key={faq.id} {...faq} />
      ))}
    </div>
  );
};

export default Faqs;
