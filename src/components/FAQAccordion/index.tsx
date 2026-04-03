import type { PropsWithChildren, ReactNode } from 'react';
import { Children, isValidElement, useId, useState } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FAQItemProps = PropsWithChildren<{
    question: string;
}>;

type FAQAccordionProps = {
    children: ReactNode;
    allowMultiple?: boolean;
    defaultOpenIndex?: number;
};

type FAQItemElement = React.ReactElement<FAQItemProps>;

export function FAQItem({ children }: FAQItemProps): JSX.Element {
    return <>{children}</>;
}

export default function FAQAccordion({
    children,
    allowMultiple = false,
    defaultOpenIndex = 0,
}: FAQAccordionProps): JSX.Element {
    const accordionId = useId();
    const items = Children.toArray(children).filter(isValidElement) as FAQItemElement[];
    const [openIndexes, setOpenIndexes] = useState<number[]>(
        items[defaultOpenIndex] ? [defaultOpenIndex] : [],
    );

    function toggleItem(index: number) {
        setOpenIndexes((currentIndexes) => {
            const isOpen = currentIndexes.includes(index);

            if (isOpen) {
                return currentIndexes.filter((currentIndex) => currentIndex !== index);
            }

            if (allowMultiple) {
                return [...currentIndexes, index];
            }

            return [index];
        });
    }

    return (
        <div className={styles.accordion}>
            {items.map((item, index) => {
                const isOpen = openIndexes.includes(index);
                const itemId = `${accordionId}-${index}`;
                const buttonId = `${itemId}-button`;
                const panelId = `${itemId}-panel`;

                return (
                    <section key={itemId} className={clsx(styles.item, isOpen && styles.itemOpen)}>
                        <h2 className={styles.heading}>
                            <button
                                id={buttonId}
                                type="button"
                                className={styles.trigger}
                                aria-expanded={isOpen}
                                aria-controls={panelId}
                                onClick={() => toggleItem(index)}>
                                <span className={styles.question}>{item.props.question}</span>
                                <span className={styles.icon} aria-hidden="true">
                                    {isOpen ? '−' : '+'}
                                </span>
                            </button>
                        </h2>
                        <div
                            id={panelId}
                            role="region"
                            aria-labelledby={buttonId}
                            className={clsx(styles.panel, isOpen && styles.panelOpen)}
                            hidden={!isOpen}>
                            <div className={styles.answer}>{item.props.children}</div>
                        </div>
                    </section>
                );
            })}
        </div>
    );
}