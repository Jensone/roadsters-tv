export default function Networks() {
    return (
    <a 
        href="https://linktr.ee/rodsterstv" 
        className="flex gap-4 mt-16 hover:scale-105 transition-transform duration-300 ease-in-out" 
        target="_blank" rel="noreferrer"
    >
        <img 
            className="w-20 h-20 rounded-full"
            src="https://d2homsd77vx6d2.cloudfront.net/avatars/2025/02/03/logo-chaine-fr.XY0CLjywUw.jpg" 
            alt="Rodolpho"
        />
        <div className="flex flex-col gap-2">
            <p className="text-xs">Suivez-moi sur les réseaux</p>
            <ul className="flex flex-col gap-1">
                <li className="flex gap-2 items-center">
                    <img src="https://api.iconify.design/bxl:youtube.svg?color=%23feffff" alt="" className="text-red-600" />
                    <p className="text-xs">45 000 <span className="text-slate-500">abonnés</span></p>
                </li>
                <li className="flex gap-2 items-center">
                    <img src="https://api.iconify.design/bxl:tiktok.svg?color=%23feffff" alt="" className="" />
                    <p className="text-xs">186 000 <span className="text-slate-500">abonnés</span></p>
                </li>
                <li className="flex gap-2 items-center">
                    <img src="https://api.iconify.design/bxl:instagram.svg?color=%23feffff" alt="" className="" />
                    <p className="text-xs">39 000 <span className="text-slate-500">abonnés</span></p>
                </li>
            </ul>
        </div>
    </a>
    )
}