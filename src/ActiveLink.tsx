import {useRouter} from 'next/router'

function ActiveLink({children, href}) {
    const router = useRouter()
    const [loading, setLoading] = useState<boolean>(false);
    const style = {
        marginRight: 10,
        color: router.asPath === href ? 'red' : 'black',
    }

    const movePageClick = e => {
        e.preventDefault()
        setLoading(true);
        router
            .push(href)
            .then(() => {
                setLoading(false);
            });
    }

    return (
        {loading && <PageLoading />}
        <a href={href} onClick={movePageClick}>
            {children}
        </a>
    )
}

export default ActiveLink

//https://velog.io/@khy226/Next.js-Router-%EC%A0%95%EB%A6%AC