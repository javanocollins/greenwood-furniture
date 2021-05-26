import "./collection-preview.styles.scss";

// Style Imports
import "../../assets/styles/_button.scss";

// Component imports
import CollectionItem from "../collection-item/collection-item.component";

import { withRouter } from "react-router-dom";

const CollectinPreview = ({ title, routeName, items, history, match }) => {
    // const [productTitle, setProductTitle] = useState("");
    const pushUrl = () => {
        history.push(routeName.toLowerCase());
    };
    console.log(items);
    return (
        <div className="collection-preview container">
            {}
            <h2 className="itemTitle">{title}</h2>
            <div className="preview">
                {/* Render 4 items from shop.data.js */}
                {items.slice(0, 4).map((item, index) => (
                    <CollectionItem key={index} items={items} item={item} />
                ))}
            </div>
            <button onClick={pushUrl} className="CollectionPreview-btn">
                View All {title}
            </button>
        </div>
    );
};

export default withRouter(CollectinPreview);
