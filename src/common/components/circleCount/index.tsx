import s from './styles.module.css'

const CircleCount = ({value, top, left, right}: { value: number, top?: number, left?: number, right?: number }) => {
    const iOS =
        typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);


    const styles: any = {}
    if (top) styles.top = top
    if (left) styles.left = left
    if (right) styles.right = right
    return (
        <div className={s.circle} style={{...styles}}>
            <p style={{marginTop: iOS ? '3px' : ''}}>
                {value}
            </p>
        </div>
    );
};

export default CircleCount;