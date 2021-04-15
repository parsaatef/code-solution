
import Link from 'next/link';

function NewsPage() {
    return (
        <section>
            <h1>
                Welcome to News Page T
            </h1>
            <ul>
                <li>
                    <Link href="/news/next-js-is-really-great-framework">
                        Next JS is a really great framework
                    </Link>
                </li>
            </ul>
        </section>
    );
}

//export function getServerSideProps(context){const {req, res} = context;}
//export function getStaticProps(){}

export default NewsPage;