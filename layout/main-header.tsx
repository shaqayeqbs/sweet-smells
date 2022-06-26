import Link from 'next/link'
import React from 'react'
import classes from './main-header.module.css';
import Search from '../icons/search'
import User from '../icons/user'
import ShoppingBag from '../icons/shopping-bag';
import { useSession, signOut } from 'next-auth/client';
import Logout from '../icons/logout'



const Mainheader = () => {
    const [session] = useSession();
    console.log(session);
    const username = session?.user?.name;
    ////
    const logoutHandler = () => {
        signOut();
    }
    return (
        <header className={classes.container}>
            <div className={classes.flex}>
                <h1 className={classes.title}>
                    <Link href='/' passHref><a>𝓢𝔀𝓮𝓮𝓽 𝓢𝓶𝓮𝓵𝓵𝓼</a></Link>

                </h1>
                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <Link href='/perfumes' passHref>COLEECTION</Link>
                        </li>
                        <li>
                            <Link href='/women' passHref>WOMEN</Link>
                        </li>
                        <li>
                            <Link href='/men' passHref>MEN</Link>
                        </li>

                    </ul>
                </nav>
            </div>
            <div className={classes.icons}>

                <Link href='/' passHref><a><Search /></a></Link>
                {!session && <Link href='/auth' passHref><a><User /></a></Link>}
                {session && <div className={classes.profile}><Link href='/profile' passHref>
                    <a className={classes.center}>
                        <span><User /></span>
                        <span className={classes.name}>{username} </span>
                    </a></Link></div>}

                {session && <Link href='/men' passHref><a><ShoppingBag /></a></Link>}
                {session && <button onClick={logoutHandler}> <Logout /></button>}
            </div>
        </header>
    )
}

export default Mainheader