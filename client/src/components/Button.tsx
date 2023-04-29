import React from 'react'

interface ButtonProps {
    onClick: () => void
    children?: React.ReactNode
    isRound?: boolean
    width?: string
    height?: string
    color?: string
}

const Button = ({ onClick, children, isRound, width = '50px', height = '50px', color = 'bg-gray-300' }: ButtonProps) => {

    const buttonHeight = isRound ? width : height

    return (
        <button onClick={onClick} className={`${isRound && 'rounded-full'} ${color} flex justify-center items-center`} style={{ width, height: buttonHeight }}>
            {children}
        </button>
    )
}

export default Button