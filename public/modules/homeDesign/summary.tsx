import React from 'react'
import classes from './summary.module.css'
function Summary() {
    return (
        <div className={classes.contaienr} >

            <div>
                <h2>Ｈｅａｒｔ ｎｏｔｅ</h2>
                <h3>Ｏｎｃｅ ｔｈｅ ｅｆｆｅｃｔ ｏｆ ｔｈｅ ｔｏｐ ｎｏｔｅ ｃｌｅａｒｓ ｏｆｆ， ｙｏｕ ｃａｎ ｓｍｅｌｌ ｔｈｅ ｈｅａｒｔ ｏｆ ｔｈｅ ｐｅｒｆｕｍｅ， ｗｈｉｃｈ ｉｓ ｉｔｓ ｍａｉｎ ｅｓｓｅｎｃｅ． Ｔｈｅｓｅ ｎｏｔｅｓ ｗｉｌｌ ｓｔａｒｔ ｔｏ ｅｍａｎａｔｅ ａｒｏｕｎｄ ｈａｌｆ ａｎ ｈｏｕｒ ａｆｔｅｒ ｙｏｕ ｓｐｒａｙ ｏｎ ｔｈｅ ｐｅｒｆｕｍｅ， ａｎｄ ｌａｓｔ ｆｏｒ ａｒｏｕｎｄ ｆｏｕｒ ｈｏｕｒｓ． Ｔｈｅ ｍｏｓｔ ｃｏｍｍｏｎ ｈｅａｒｔ ｎｏｔｅｓ ｔｅｎｄ ｔｏ ｂｅ ｈｅａｖｙ ｆｌｏｒａｌｓ， ａｓ ｔｈｅｓｅ ｇｉｖｅ ｔｈｅ ｆｒａｇｒａｎｃｅ ｔｈｅ ｍｏｓｔ ｄｉｓｔｉｎｃｔｉｖｅ ｓｍｅｌｌ ｗｈｅｎ ｔｈｅｙ ａｓｓｏｃｉａｔｅ ｗｉｔｈ ｙｏｕｒ ｓｋｉｎ ｃｈｅｍｉｓｔｒｙ．</h3></div>
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