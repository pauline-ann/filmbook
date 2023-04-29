interface ModalProps {
    children?: React.ReactNode
    show: boolean
}

const Modal = ({ children, show }: ModalProps) => {

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