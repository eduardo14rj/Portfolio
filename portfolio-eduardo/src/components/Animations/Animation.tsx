import { AnimationProps, MotionConfig, MotionStyle } from 'framer-motion';
import React from 'react';
import { InView } from 'react-intersection-observer';
import { motion } from 'framer-motion'
type AnimationsType = {
    animate?: AnimationProps["animate"],
    transition?: AnimationProps["transition"]
    style?: MotionStyle
    children: (tete: boolean) => React.ReactNode
}

const Animations: React.FC<AnimationsType> = (prop) => {
    return (
        <InView>
            {
                ({ ref, inView }) => (
                    <motion.div ref={ref}
                        style={prop.style}
                        animate={inView && prop.animate}
                        transition={prop.transition}
                    >
                        {prop.children(inView)}
                    </motion.div>
                )
            }
        </InView>
    );
}

export default Animations;