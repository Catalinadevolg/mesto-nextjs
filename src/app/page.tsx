import { Description, Intro, Services } from '@/widgets';
import styles from '@/styles/page.module.scss';

export default function Home() {
  return (
    <main className={styles.content}>
      <Intro />
      <Description />
      <Services />
    </main>
  );
}
