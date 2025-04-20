import { useMemo } from 'react';

import styles from './Footer.module.scss';

export const getFooterNavItems = () => [
  {
    title: 'Company',
    items: [
      {
        href: `/blog/about`,
        name: 'About',
      },
      {
        href: `/careers`,
        name: 'Careers',
      },
      {
        href: `/blog/press`,
        name: 'Press',
      },
      {
        href: `/mindfulness-tips`,
        name: 'Blog',
      },
      {
        href: `/blog/tamara-levitt`,
        name: 'Tamara Levitt',
      },
      {
        href: `/science`,
        name: 'Calm Science',
      },
    ],
  },
  {
    title: 'Offers',
    items: [
      {
        href: `/gift`,
        name: 'Gift',
      },
      {
        href: `/redeem`,
        name: 'Redeem',
      },
      {
        href: '/family',
        name: 'Family Plan',
      },
      {
        href: 'https://health.calm.com/',
        name: 'Calm Health',
      },
      {
        href: 'https://health.calm.com/self-serve-checkout/',
        name: 'Calm for Organizations',
      },
    ],
  },
  {
    title: 'Help',
    items: [
      {
        href: `/faq/web`,
        name: 'FAQ',
      },
      {
        href: 'https://support.calm.com/hc/en-us/requests/new',
        name: 'Contact Us',
      },
      {
        href: `/terms`,
        name: 'Terms',
      },
      {
        href: '/privacy-policy',
        name: 'Privacy Policy',
      },
      {
        href: '/privacy-policy#information-for-california-residents',
        name: 'CCPA Notice',
      },
      {
        name: 'Opt Out of Targeted Ads',
        isOptOutModal: true,
      },
      {
        href: '/optout',
        name: 'Cookies',
        isPrivacyChoices: true,
      },
      {
        href: `/en/accessibility-statement`,
        name: 'Accessibility Statement'
      },
    ],
  },
];

export const socials = [
  {
    name: 'Facebook',
    href: `https://www.facebook.com/calm`,
    iconPath: '/facebook-icon.svg'
  },
  {
    name: 'Instagram',
    href: `https://www.instagram.com/calm`,
    iconPath: '/instagram-icon.svg'
  },
  {
    name: 'Twitter',
    href: `https://www.calm.com/twitter`,
    iconPath: '/twitter-icon.svg'
  },
];

const Footer = () => {
  const footerNavItems = useMemo(() => {
    return getFooterNavItems();
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_columnGrid} allowOverflow gridEl="ul">
        <ul className={styles.footer_columnGridItems}>
          {footerNavItems.map((section, idx) => (
            <li className={styles.footer_column} key={idx}>
              <h2 className={styles.footer_column_title}>{section.title}</h2>
              <ul className={styles.footer_column_items}>
                {section.items
                  .map((item, ulidx) => {
                    return (
                      <li key={`${item.href}_${ulidx}`} className={styles.footer_column_child_item}>
                        <a
                          className={styles.footer_list_item_cta}
                          href={item.href}
                          target='_blank'
                        >
                          {item.name}
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </li>
          ))}
          <li>
            <ul className={styles.footer_socialIconsColumn}>
              {socials.map((socialItem, idx) => (
                <li key={`social_${socialItem.name}_${idx}`} className={styles.footer_socialIcon_item}>
                  <a
                    aria-label="Link to Social Media"
                    tabIndex={0}
                    role="link"
                    target='_blank'
                    className={styles.footer_socialIcon_item_cta}
                    href={socialItem.href}
                  >
                    {<img src={socialItem.iconPath} alt={socialItem.name} className={styles.footer_socialIcon_item_icon} />}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
      <div className={styles.copyright}>Copyright © 2025 Calm. All rights reserved</div>
    </footer>
  );
};

export default Footer;
