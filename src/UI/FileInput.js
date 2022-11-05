

const FileInput = props => {
    const reader = new FileReader();
    const {setImages, images} = props;
    
    const handleChange = (event) => {
        console.log(event.target.files);
        const files = event.target.files;
        console.log(files.length)
        for( const file of files){
            let image =URL.createObjectURL(file);
            console.log(image, "" ,images)
            setImages((prev) => [...prev, image]);
        }
        

        
    }
    console.log(images)
    return <> 
    <input type={"file"} multiple={true} onChange={ (event) => handleChange(event)} />
    {images && images.map((img, index) => <img key={index} src={img} alt={"Current choosed images"} />)}
    
    </>
}


export default FileInput;