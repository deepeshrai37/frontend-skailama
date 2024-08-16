import './fileUpload.css'
const FileUpload = () => {
  return (
    <div className="file-upload">
      <div className="upload-icon">
        <img src="/assets/cloud_upload.png" alt="Upload" height="128px" width="128px"/>
      </div>
      <p className='type'>Select a file or drag and drop here (Podcast Media or Transcription Text)</p>
      <p className="file-formats">MP4, MOV, MP3, WAV, PDF, DOCX or TXT file</p>
      <button className="select-file-btn">Select File</button>
    </div>
  );
};

export default FileUpload;