import React from 'react';

type skillItemType = {
    title: string
    subTitle: string
    barPorcent: "nenhum" | "baixo" | "medio" | "alto" | "profissional"
    icon: string
    active?: boolean
    onClick: () => any
}

export const SkillItem: React.FC<skillItemType> = (props) => {
    const bar = () => {
        switch (props.barPorcent) {
            case "nenhum":
                return "w-0"
            case "baixo":
                return "w-[25%]"
            case "medio":
                return "w-[50%]"
            case "alto":
                return "w-[75%]"
            case "profissional":
                return "w-full"
        }
    }

    return (
        <div
            onClick={props.onClick}
            className={`snap-center min-w-full cursor-pointer flex-col mb-4 p-5 bg-white dark:bg-dark-blue md:rounded-l-[12px] rounded-[12px] border-[1px] md:border-r-0 
            ${props.active ? "border-gray-200" : "border-white dark:border-transparent"} `}>
            <div className='mb-2 flex space-x-4'>
                <img src={props.icon} className="w-[42px] h-[42px] object-contain" />
                <div>
                    <strong className='font-bold text-sm text-dark-blue dark:text-white'>{props.title}</strong>
                    <p className='text-sm text-dark-blue dark:text-white'>{props.subTitle}</p>
                </div>
            </div>
            <div className='relative '>
                <div className='h-[10px] rounded-full w-full bg-slate-100 dark:bg-white/10' />
                <div className={`h-[10px] absolute top-0 rounded-full ${bar()} bg-green`} />
            </div>
        </div>
    )
}