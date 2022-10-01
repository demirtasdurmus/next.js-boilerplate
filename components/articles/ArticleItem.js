import styles from '../../styles/Articles.module.css';
import Link from 'next/link';

export default function ArticleItem({ post }) {
    return (
        <Link href={`/post/${post.id}`} as={`/post/${post.id}`}>
            <a className={styles.card}>
                <h3>{post.title} $rarr;</h3>
                <p>{post.body}</p>
            </a>
        </Link>
    )
}
