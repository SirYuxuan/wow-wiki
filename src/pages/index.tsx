import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={`${styles.decorCircle} ${styles.decorCircle1}`}></div>
      <div className={`${styles.decorCircle} ${styles.decorCircle2}`}></div>
      <div className={`${styles.decorCircle} ${styles.decorCircle3}`}></div>
      <div className={`${styles.decorDot} ${styles.dot1}`}></div>
      <div className={`${styles.decorDot} ${styles.dot2}`}></div>
      <div className={`${styles.decorDot} ${styles.dot3}`}></div>
      <div className={`${styles.decorDot} ${styles.dot4}`}></div>
      <div className={clsx('container', styles.heroContent)}>
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={clsx('button button--secondary button--lg', styles.button)}
            to="/docs/config/init-setup">
            快速安装
          </Link>
          <Link
            className={clsx('button button--outline button--lg', styles.buttonSecondary)}
            to="/docs/changelog">
            查看更新
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="雨轩魔兽整合包资料站，包含整合包介绍、快速安装、常见问题、界面展示与更新记录。">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
