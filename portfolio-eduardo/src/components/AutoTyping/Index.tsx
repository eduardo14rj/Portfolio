import React, { useEffect, useState, useCallback } from 'react';

type autoTypingType = {
    speed?: number
    text: string
    initType?: boolean
}

const AutoTyping: React.FC<autoTypingType> = (props) => {
    const [text, setText] = useState<string>("");


    const StructureText = useCallback(() => {
        const textSplit = text.split(/\n/);
        return (
            <>
                {textSplit.map((e, i) => {
                    const finish = e === props.text.split(/\n/)[i];
                    return (
                        <div>
                            <div key={i} className='inline-block w-auto relative items-center'>
                                <div className='flex'>
                                    <code className=" text-fuchsia-500 mr-3">{i}</code>
                                    <p>{e}</p>
                                </div>
                                {
                                    !finish && <div className='absolute right-0 top-0 bg-white w-[2px] h-full animate-pulseTyping' />
                                }
                            </div>
                        </div>
                    )
                })}
            </>
        )
    }, [text])

    useEffect(() => {
        if (props.initType) {
            const timerText = setTimeout(() => {
                setText(props.text.slice(0, text.length + 1));
            }, props.speed ?? 120);

            return () => clearTimeout(timerText);
        }

    }, [text, props.initType])

    return (
        <div className='relative'>
            <div>
                <div className='relative text-white inline-block'>
                    <StructureText />

                </div>
            </div>
        </div>
    );
}

export default AutoTyping;