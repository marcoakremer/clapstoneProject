import CategoryItem from './../categoryContainer/category-item';
import './directory.style.scss'


const Directory = ({ categories }) => {

    return (
        <div className="categories-container">
        {categories.map((category) => <CategoryItem category={category} />)}
        
      </div>
    )
}

export default Directory