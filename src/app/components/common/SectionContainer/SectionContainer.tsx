// types
import type { ReactNode } from 'react';
// styles
import styles from './SectionContainer.module.scss';

interface SectionContainerProps {
    children: ReactNode;
}

const SectionContainer = ({ children }: SectionContainerProps) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
};

export default SectionContainer;