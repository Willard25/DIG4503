import Head from 'next/head';
import Link from 'next/link';
import styles from '../components/example.module.css';
import IdSearch from '../components/IdSearch';

class App extends React.Component {
    render() {
      return(
        <div className={styles.body}>
            <Head>
                <title>Pokemon Search</title>
            </Head>

            <div className={styles.homelinks}>
                <Link href="/">
                    <a className={styles.links}>Home</a>
                </Link>
            </div>

            <div className={styles.current}>Search ID</div>
            <IdSearch />
            <div className={styles.current}>Result</div>
            <div id="reportingArea" className={styles.report}></div>
            
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