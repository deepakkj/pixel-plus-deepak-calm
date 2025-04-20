'use client';

import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion';
import chevronDown from '../../../public/chevron-down.svg';
import styles from './Accordian.module.scss';

const AccordionItem = ({ header, children }) => (
  <Item
    header={
      <p className={styles.itemBtn}>
        {header}
        <img className={styles.chevron} src={chevronDown} alt="▼" />
      </p>
    }
    className={styles.item}
    contentProps={{ className: styles.itemContent }}
    panelProps={{ className: styles.itemPanel }}
  >
    {children}
  </Item>
);

export default function CustomAccordion({ section }) {
  return (
    <div className={styles.accordion}>
      <Accordion allowMultiple transition transitionTimeout={250}>
        {section.items.map((item, i) => (
          <AccordionItem key={i} header={item.question}>
            <div
              className={styles.answer}
              dangerouslySetInnerHTML={{ __html: item.answer }}
            />
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
