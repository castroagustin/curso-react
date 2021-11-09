import './itemList.scss'

const ItemList = () => {
    return (
        <section className='itemList'>
            <h2 className='itemList__title'>Lista de Libros:</h2>
            <ul className='itemList__container'>
                <li>Harry Potter and the Deathly Hallows</li>
                <li>Harry Potter and the Goblet of Fire</li>
                <li>Fifty Shades of Grey</li>
                <li>Life of Pi</li>
                <li>Lord of the Rings</li>
                <li>Da Vinci Code</li>
            </ul>
        </section>
    );
}

export default ItemList;