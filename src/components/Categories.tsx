import React from 'react'

type PropsType = {
    items: string[]
}
export const Categories: React.FC<PropsType> = ({items}) => {

    const [activeItem, setActiveItem] = React.useState<number | null>(null)

    const onSelectItem = (index: number | null) => {
        setActiveItem(index)
    }

    return (
        <div className="categories">
            <ul>
                <li
                    className={activeItem === null ? 'active' : ''}
                    onClick={() => onSelectItem(null)}
                >
                    Все
                </li>
                {
                    items?.map((name: string, index: number) => (
                        <li
                            className={activeItem === index ? 'active' : ''}
                            onClick={() => onSelectItem(index)}
                            key={`${name}_${index}`}
                        >
                            {name}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}