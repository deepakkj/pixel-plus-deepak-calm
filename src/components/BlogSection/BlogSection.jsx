'use client';
import HomepageCarousel from '../HomepageCarousel/HomepageCarousel';
import styles from './BlogSection.module.scss';

import { blogPosts } from './blogPosts';

const BlogFeed = () => {
  const visiblePosts = blogPosts.filter((_, i) => i < 20);

  if (visiblePosts.length === 0) return null;

  return (
    <div className={styles.blogsection_background}>
    <section className={styles.blogsection_wrapper}>
      <div className={styles.blogsection_contentwrapper}>
        <h2 className={styles.blogsection_heading}>Check out our blog for more meditation, sleep, stress, and mental health resources.</h2>
        <HomepageCarousel
          carouselClassName={styles.blogsection_carousel}
          carouselNavClassName={styles.blogsection_carousel_nav}
          slideItems={visiblePosts.map(post => ({
            key: post.id,
            Slide: ({ isActive }) => (
              <article className={styles.blogsection_post}>
                <a className={styles.blogsection_postlink} href={post.link} tabIndex={isActive ? 0 : -1}>
                  <img className={styles.blogsection_thumbnail} loading="lazy" src={post.assetUrl} alt={`Thumbnail for ${post.title}`} />
                  <div className={styles.blogsection_copy}>
                    <p className={styles.blogsection_categories}>{post.caption}</p>
                    <h3 className={styles.blogsection_posttitle} dangerouslySetInnerHTML={{ __html: post.title }} />
                  </div>
                </a>
              </article>
            ),
          }))}
          numSlides={{
            desktopLarge: 2,
            desktop: 2,
            tablet: 2,
            mobile: 1,
          }}
          slideGap={{
            desktopLarge: 48,
            desktop: 36,
            tablet: 16,
            mobile: 8,
          }}
        />
        <a className={styles.blogsection_cta} href="https://calm.com/blog">
          See all blogs
        </a>
      </div>
    </section>
    </div>
  );
};

export default BlogFeed;
