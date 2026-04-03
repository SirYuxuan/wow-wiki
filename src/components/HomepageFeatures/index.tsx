import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '整合包介绍',
    description: (
      <>
        快速了解整合包定位、适用版本、核心特色以及推荐使用方式。
      </>
    ),
  },
  {
    title: '插件列表',
    description: (
      <>
        集中查看当前整合包内的插件清单、用途说明和功能定位。
      </>
    ),
  },
  {
    title: '快速安装',
    description: (
      <>
        从清理旧配置到导入分享码，再到安装后的基础检查，按步骤即可完成上手。
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <h3 className={styles.featureTitle}>{title}</h3>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeading}>
          <Heading as="h2">一站式整合包资料站</Heading>
          <p>从首次安装到日常使用，把最常查的内容集中整理。</p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
