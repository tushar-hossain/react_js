import Faqs from "./Faqs";
import { faqsData } from "./data.jsx";
import style from "./faq.module.css";

const Faq = () => {
  return (
    <main className={style.faq}>
      <section>
        
        <Faqs faqs={faqsData} />
      </section>
    </main>
  );
};

export default Faq;
