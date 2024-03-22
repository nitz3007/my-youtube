import Button from "./Button";

const ButtonList = () => {
    const quickList = ['All', 'Sports', 'News', 'Podcasts', 'Plants', 'Interior Designs', 'Travel', 'Baking', 'Music', 'Paintins', 'Flute Lessons', 'Gardens', 'Meditation'];
    return <div>
        {quickList.map(item => <Button name={item}/>)}
    </div>
}

export default ButtonList;