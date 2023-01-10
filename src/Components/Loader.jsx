import { Load } from "../Components/styles";

const Loader = () => {
    return (
        <div style={{backgroundColor:"black"}}>
        <Load>
            <span>&#123;</span>
            <span>&#125;</span>
        </Load>
        </div>
    );
};

export default Loader;