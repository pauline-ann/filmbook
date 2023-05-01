interface ModalProps {
    children?: React.ReactNode
    show?: boolean
}

const Modal = ({ children, show = true }: ModalProps) => {

    if (!show) {
        return null
    }

    return (
        <div>
            {children}
        </div>
    )
}

export default Modal