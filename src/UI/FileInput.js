import { getBase64 } from "../utils/getBase64";


const FileInput = props => {
    const { setImages, images } = props;

    const handleChange = (event) => {
        const files = event.target.files;
        for (const file of files) {
            getBase64(file).then(result => {
                setImages((prev) => [...prev, result]);
            }
            ).catch(e => console.log(e));

        }



    }
    return <>
        <input type={"file"} multiple={true} onChange={(event) => handleChange(event)} />
        <div className="overflow-auto">
            {images && images.map((img, index) => <img key={index} src={img} alt={"Current choosed images"} />)}

        </div>

    </>
}


export default FileInput;