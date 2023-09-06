import { Sora } from 'next/font/google'
interface Props {
    imageUrl: string,
    title: string,
    info: string
}

const sora = Sora({
    variable: '--font-sora',
    subsets: ['latin'],
})


export default function Card({imageUrl, title, info}: Props) {
    return(
        <div className={`${sora.variable} font-sora mb-7`}>
            <img src={imageUrl} alt="" className="w-[469px] h-[709px]" />
            <div className="flex flex-col max-w-[469px] mt-5">
                <h1 className="text-2xl">{title}</h1>
                <p className="mt-2 font-thin">{info}</p>
            </div>
        </div>
    )
}