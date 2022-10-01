import styles from '../../styles/Articles.module.css';
import ArticleItem from './ArticleItem';


export default function ArticleList({ posts }) {
    return (
        <div className={styles.grid}>
            {posts.map((post, i) => <ArticleItem key={i} post={post} />)}
        </div>
    )
}

