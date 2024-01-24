import Image from "next/image"
import Link from "next/link"

const Logo = () => {
    return (
        <>
            <Link href={'/'} className="flex justify-center items-center">
                <Image
                    src={'/logo.svg'}
                    width={118}
                    height={18}
                    className="object-contain"
                    alt="Centro de coche logo"
                />
            </Link>
        </>
    )
}

export default Logo
