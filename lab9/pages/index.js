import Head from 'next/head';
import Link from 'next/link';
import styles from '../components/example.module.css';

class App extends React.Component {
  render() {
    return(
      <div className={styles.body}>
        <Head>
          <title>Pokemon Search</title>
        </Head>

        <div className={styles.homelinks}>
          <Link href="/id">
            <a className={styles.links}>ID Search</a>
          </Link>
        </div>

        <div className={styles.homelinks}>
          <Link href="/name">
            <a className={styles.links}>Name Search</a>
          </Link>
        </div>

        <div className={styles.homelinks}>
          <Link href="/type">
            <a className={styles.links}>Type Search</a>
          </Link>
        </div>
      </div>
    );
  }
}

export default App;