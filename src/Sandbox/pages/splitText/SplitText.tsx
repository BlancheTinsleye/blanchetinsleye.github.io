import { useEffect } from 'react'
import './splittextStyle.css'

import { initTextAnimation } from './script'

const SplitText = () => {
    useEffect(() => {
        initTextAnimation();
    }, []);

    return (
        <>
            <div className="large centered grid square-grid" id='splittexCont'>
                <p className="text-xl">
                    All-in-one text splitter<br />
                    テキストスプリッター
                </p>
            </div>
                <p id='animate-mae'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores deleniti similique dolor obcaecati aperiam facilis! Libero, alias ipsa? Corporis rerum eveniet totam? Laborum voluptatum veniam corrupti! Eveniet in officia maiores?</p>
        </>
    )
}

export default SplitText
