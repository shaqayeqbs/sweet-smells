import React from 'react'
import classes from './summary.module.css'
import Link from 'next/link'
function Summary() {
    return (
        <div className={classes.contaienr} >




            <div className={classes.overflow}>
                <div>
                    <Link href='/perfumes'>
                        <a className={classes.moblink}>CheckOut Full Perfume List </a>
                    </Link>
                </div>

                <div>
                    <h2>Ｈｅａｒｔ ｎｏｔｅ</h2>
                    <h3>Ｏｎｃｅ ｔｈｅ ｅｆｆｅｃｔ ｏｆ ｔｈｅ ｔｏｐ ｎｏｔｅ ｃｌｅａｒｓ ｏｆｆ， ｙｏｕ ｃａｎ ｓｍｅｌｌ ｔｈｅ ｈｅａｒｔ ｏｆ ｔｈｅ ｐｅｒｆｕｍｅ， ｗｈｉｃｈ ｉｓ ｉｔｓ ｍａｉｎ ｅｓｓｅｎｃｅ． Ｔｈｅｓｅ ｎｏｔｅｓ ｗｉｌｌ ｓｔａｒｔ ｔｏ ｅｍａｎａｔｅ ａｒｏｕｎｄ ｈａｌｆ ａｎ ｈｏｕｒ ａｆｔｅｒ ｙｏｕ ｓｐｒａｙ ｏｎ ｔｈｅ ｐｅｒｆｕｍｅ， ａｎｄ ｌａｓｔ ｆｏｒ ａｒｏｕｎｄ ｆｏｕｒ ｈｏｕｒｓ． Ｔｈｅ ｍｏｓｔ ｃｏｍｍｏｎ ｈｅａｒｔ ｎｏｔｅｓ ｔｅｎｄ ｔｏ ｂｅ ｈｅａｖｙ ｆｌｏｒａｌｓ， ａｓ ｔｈｅｓｅ ｇｉｖｅ ｔｈｅ ｆｒａｇｒａｎｃｅ ｔｈｅ ｍｏｓｔ ｄｉｓｔｉｎｃｔｉｖｅ ｓｍｅｌｌ ｗｈｅｎ ｔｈｅｙ ａｓｓｏｃｉａｔｅ ｗｉｔｈ ｙｏｕｒ ｓｋｉｎ ｃｈｅｍｉｓｔｒｙ．</h3>

                </div>
            </div>


            <div className={classes.imgcontainer}>
                <div className={classes.img}><img
                    src="/images/backmake.jpg"

                    alt="image1"
                /></div>
            </div>

        </div>
    )
}

export default Summary