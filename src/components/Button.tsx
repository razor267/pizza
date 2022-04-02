import React from 'react'
import classNames from 'classnames'

type PropsType = {
    outline?: boolean
    test?: boolean
    onClick?: () => void
    className?: string
}
export const Button: React.FC<PropsType> = ({ onClick, className, outline, children }) => {
    return (
        <button
            onClick={onClick}
            className={classNames('button', className, {
                'button--outline': outline
            })}
        >
            {children}
        </button>
    )
}