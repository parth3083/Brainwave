import React from 'react'
import ButtonSvg from '../assets/svg/ButtonSvg'

const Button = ({ className, href, px, children, white, onClick }) => {
    const classes = `button relative infline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${px || 'px-7'} ${white ? 'text-n-8':'text-n-1'} ${className || ""} `

    const spanClasses = "relative z-10"
    
    const renderButton = () => {
       return <button className={classes}>
            <span className={spanClasses} onClick={onClick}>{children}</span>
            {ButtonSvg(white)}
        </button>
    }
    const renderLink = () => {
        return <a href={href} className={classes}>
            <span className={spanClasses}>{children}</span>
            {ButtonSvg(white)}
        </a>
     }

    return href ? renderLink() : renderButton();
}

export default Button