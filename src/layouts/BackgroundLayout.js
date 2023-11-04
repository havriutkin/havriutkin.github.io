import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";

import Arrow from "../components/Arrow";
import Circle from "../components/Circle";

function BackgroundLayout(){
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1.5]);
    const scaleReverse = useTransform(scrollYProgress, [0, 1], [1.5, 0.5]);

    const arrowPositions = [
        {x: 6.888499508335744, y: 53.485266826597396},
        {x: 37.96877826045184, y: 90.85726743931113},
        {x: 22.36324178897069, y: 73.70363981640607},
        {x: 58.22521525545559, y: 30.408673196624214},
        {x: 48.99068650488505, y: 44.35621803849816},
        {x: 91.39062040813172, y: 49.59537864453161},
        {x: 20.923932016726244, y: 39.222147271882626},
        {x: 71.44943359619744, y: 19.281457544567516},
        {x: 72.59607605765383, y: 76.36586781513674}
    ];

    const circlePositions = [
        {x: 10.3498173640592, y: 78.9401936788321},
        {x: 45.2374615097315, y: 56.7261348975210},
        {x: 63.7815693459303, y: 10.41178627913492},
        {x: 20.9458652914524, y: 62.3170837249021},
        {x: 90.1256039487346, y: 23.8706547559653}
    ];

    return (
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden">
            {arrowPositions.map((pos, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    style={{ position: 'absolute', top: `${pos.y}vh`, left: `${pos.x}vw`}}
                >
                    <motion.div
                        style={{ scale: scaleReverse }}
                    >
                        <Arrow width="50" height="50" stroke="#b9d2fa"/>
                    </motion.div>
                </motion.div>
            ))}
            {circlePositions.map((pos, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    style={{ position: 'absolute', top: `${pos.y}vh`, left: `${pos.x}vw`}}
                >
                    <motion.div
                        style={{ scale }}
                    >
                        <Circle radius="10" stroke="#b9d2fa"/>
                    </motion.div>
                </motion.div>
            ))}
        </div>
    );
}

export default BackgroundLayout;