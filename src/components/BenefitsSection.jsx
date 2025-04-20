import styles from './BenefitsSection.module.scss';

export default function Benefits() {
    const items = [
      {
        icon: '/stress.svg',
        title: 'Stress less.',
        description: 'Get in-the-moment relief for stress and anxiety so you can get back to living.',
        linkText: 'Learn More',
      },
      {
        icon: '/sleep.svg',
        title: 'Sleep more.',
        description: 'Fall asleep (and stay asleep) naturally and peacefully.',
        linkText: 'Learn More',
      },
      {
        icon: '/mindful.svg',
        title: 'Live mindfully.',
        description: 'Navigate life\'s ups and downs with resilience, confidence and guided support.',
        linkText: 'Learn More',
      },
    ];
  
    return (
      <section className={styles.benefitsSection}>
          <h2 className={styles.benefitsSection__title}>
            We're here to help you feel better.
          </h2>
          <ul className={styles.benefitsSection__items}>
            {items.map((item, idx) => (
              <li key={idx} className={styles.benefitsSection__item}>
                <button className={styles.benefitsSection__button}>
                  <img src={item.icon} alt={item.title} className={styles.benefitsSection_item_icon} />
                  <h3 className={styles.benefitsSection_item_title}>{item.title}</h3>
                  <p className={styles.benefitsSection_item_description}>{item.description}</p>
                  <span className={styles.benefitsSection_item_link}>
                    {item.linkText}
                  </span>
                </button>
              </li>
            ))}
          </ul>
      </section>
    );
  }