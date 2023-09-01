import Image from 'next/image'
import {Inter} from 'next/font/google'
import {log} from "util";

const inter = Inter({subsets: ['latin']})

export default function Home() {

    async function toggleLight(state: string) {
        try {
            const response = await fetch(`http://192.168.178.24/turn${state}`);
            const movies = await response.json();
        } catch (e) {

        }
    }

    return (
        <main
            className={`flex min-h-screen w-full items-center justify-between p-24 ${inter.className}`}
        >
            <div className={'w-full flex flex-col items-center space-y-4'}>
                <button
                    onClick={() => toggleLight('on')}
                    className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    Turn On
                </button>

                <button
                    onClick={() => toggleLight('off')}
                    className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    Turn Off
                </button>
            </div>
        </main>
    )
}
