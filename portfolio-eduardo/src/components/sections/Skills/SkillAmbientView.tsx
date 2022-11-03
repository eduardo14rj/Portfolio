import React from 'react';
import Animations from '../../Animations/Animation';
import AutoTyping from '../../AutoTyping/Index';

type SkillAmbientViewType = {
    text: string
    textCode: string
    showAmbient: boolean
    speedCodeText?: number
}

export const SkillAmbientView: React.FC<SkillAmbientViewType> = (prop) => {
    if (prop.showAmbient) {
        return (
            <Animations style={{ opacity: 0 }} animate={{ opacity: 1 }} >
                {(view) => (
                    <>
                        <p className='text-right text-white'>
                            {prop.text}
                        </p>

                        <div className="h-[420px] rounded-tl-xl overflow-auto p-4 absolute w-[80%] bg-dark-blue bottom-0 right-0">
                            <AutoTyping
                                text={prop.textCode}
                                initType={view}
                                speed={prop.speedCodeText}
                            />
                        </div>
                    </>
                )}
            </Animations>
        )
    } else {
        return <></>;
    }
}
