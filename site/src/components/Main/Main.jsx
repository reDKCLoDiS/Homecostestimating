import styles from './Main.module.scss'

export function Main() {
    return (
        <>
            <div className={styles.content}>
                <h1 className={styles.title}> Заполните данные о квартире </h1>
                <div className={styles.component}>
                    <h3 className={styles.subtitle}>Регион :</h3>
                    <input className={styles.inp} />
                </div>
                <div className={styles.component}>
                    <h3 className={styles.subtitle}>Площадь, км² :</h3>
                    <input className={styles.inp} />
                </div>
                <div className={styles.component}>
                    <h3 className={styles.subtitle}>Кондиционер :</h3>
                    <input className={styles.inp} />
                </div>
                <div className={styles.component}>
                    <h3 className={styles.subtitle}>Статус мебели :</h3>
                    <input className={styles.inp} />
                </div>
                <div className={styles.component}>
                    <h3 className={styles.subtitle}>Парковка :</h3>
                    <input className={styles.inp} />
                </div>
                <h2 className={styles.title1}> Количество комнат </h2>
                <div className={styles.component}>
                    <h3 className={styles.subtitle}>Спальных :</h3>
                    <input className={styles.inp} />
                </div>
                <div className={styles.component}>
                    <h3 className={styles.subtitle}>Ванных :</h3>
                    <input className={styles.inp} />
                </div>
                <div className={styles.component}>
                    <h3 className={styles.subtitle}>Гостинниц :</h3>
                    <input className={styles.inp} />
                </div>
                <div className={styles.component}>
                    <h3 className={styles.subtitle}>Подвалов :</h3>
                    <input className={styles.inp} />
                </div>
                <div className={styles.component}>
                    <h3 className={styles.subtitle}>Введите площадь квартиры :</h3>
                    <input className={styles.inp} />
                </div>
                <button className={styles.butt}   onClick={() => {
                    location.reload()
                    }}>Отправить</button>
            </div>
        </>
    )
}