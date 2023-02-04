import style from './container.module.css'

const Container = ({children}) => {
    return (
        <div className={style.flex}>
            {children}
        </div>
    )
}

export default Container;