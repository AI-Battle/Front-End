import React, { Fragment, useState } from 'react';
import axios from 'axios';

function FileUpload() {
    const [file, setFile] = useState('');
    const [fileName, setFileName] = useState('انتخاب عکس');
    const [uploadedFile, setUploadedFile] = useState({})

    const handleChange = e => {
        setFile(e.target.files[0])
        setFileName(e.target.files[0].name)
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file)

        try {
            const res = await axios.post('/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })

            const { fileName, filePath } = res.data;
            setUploadedFile({ fileName, filePath })
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit} className='mt-4'>
                <div className="custom-file">
                    <input type="file" className="custom-file-input" id="customFile" onChange={handleChange} />
                    <label className="custom-file-label" htmlFor="customFile">{fileName}</label>
                </div>

                <input type='submit' value='upload' className='btn btn-block mt-4' style={{backgroundColor: '#3f51b5', color: 'white'}} />
            </form> 
        </Fragment>
    )
}

export default FileUpload;