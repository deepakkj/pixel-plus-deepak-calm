import { Fragment } from 'react';
import CustomAccordion from '../Accordian/Accordian';
import styles from './FAQSection.module.scss';

import { faqData } from './faqData';

const FAQ = () => {

  const Answer = ({answer}) => { return (<div
    className="faq-answer"
    dangerouslySetInnerHTML={{ __html: answer }}
  />) };
  return (
    <div className={styles.faq_background}>
    <section className={styles.faq_wrapper}>
      <h2 className={styles.faq_header} id="faq-heading">Frequently Asked Questions</h2>
      <div className={styles.faqlist} aria-labelledby="faq-heading">
        {faqData.map((section, index) => 
        (<Fragment key={index}>
        <h2 className={styles.faq_section_title}>{section.title.toUpperCase()}</h2>
        <CustomAccordion key={index} section={section} />
        </Fragment>)
        )}
      </div>
    </section>
    </div>
  );
};

export default FAQ;
