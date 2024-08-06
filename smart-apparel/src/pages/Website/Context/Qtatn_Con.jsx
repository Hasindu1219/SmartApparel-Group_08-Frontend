import { useState, useEffect, useRef } from "react";
import './Qtatn_Con.css';
import design1 from '../../../Assets/WebAssets/WAssets/frontView.jpg';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { app } from "../../../components/Website/firebase";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import WNavbar from '../../../components/Website/Navbar/WNavbar';
import Footer from '../../../components/Website/Footer/Footer';

const Qtatn_Con = () => {
  
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    contactNo: '',
    clothType: 'Tshirts',
    smallSize: 0,
    mediumSize: 0,
    largeSize: 0,
    xtraLargeSize: 0
  });
  const navigate = useNavigate();
  const [clothItems, setClothItems] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState({});
  const [fileUploadError, setFileUploadError] = useState(false);
  const [uploadedImages, setUploadedImages] = useState({
    imageOne: null,
    imageTwo: null,
    imageThree: null
  });

  const imageOneRef = useRef(null);
  const imageTwoRef = useRef(null);
  const imageThreeRef = useRef(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({...prev, [id]: value}));
  };

  const handleAddNewCloth = (e) => {
    e.preventDefault();
    const { username, email, contactNo, ...clothData } = formData;
    const newClothItem = {
      ...clothData,
      images: { ...uploadedImages }
    };
    setClothItems(prev => [...prev, newClothItem]);
    
    // Reset clothing-related fields and images
    setFormData(prev => ({
      ...prev,
      clothType: 'Tshirts',
      smallSize: 0,
      mediumSize: 0,
      largeSize: 0,
      xtraLargeSize: 0,
    }));
    setUploadedImages({
      imageOne: null,
      imageTwo: null,
      imageThree: null
    });
    setImageFiles([]);
  };

  const handleFileChange = (e, fileType) => {
    const file = e.target.files[0];
    if (file) {
      setImageFiles(prev => [...prev, { file, type: fileType }]);
    }
  };

  useEffect(() => {
    imageFiles.forEach(fileObj => {
      handleFileUpload(fileObj.file, fileObj.type);
    });
  }, [imageFiles]);

  const handleFileUpload = (file, fileType) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(prev => ({ ...prev, [file.name]: Math.round(progress) }));
      },
      (error) => {
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadURL) => {
            setUploadedImages(prev => ({ ...prev, [fileType]: downloadURL }));
          });
      });
  };

  const handleSubmitBtn = async (e) => {
    e.preventDefault();
    
    const submissionData = {
      userInfo: {
        username: formData.username,
        email: formData.email,
        contactNo: formData.contactNo
      },
      clothItems: clothItems.map(item => ({
        ...item,
        images: item.images // This includes the uploaded image URLs for each cloth item
      }))
    };

    try {
      const result = await axios.post('http://localhost:8080/smart-apperal/api/quotation', submissionData);
      if (result.success === false) {
        alert('error');
        return;
      }
      alert("Quotation Successfully Created");
      
      console.log(submissionData);
    } catch (error) {
      alert(error.message);
    }
    //console.log("Submission Data:", submissionData);
  };


  const handleClearBtn = () => {
    setFormData({
      username: '',
      email: '',
      contactNo: '',
      clothType: 'Tshirts',
      smallSize: 0,
      mediumSize: 0,
      largeSize: 0,
      xtraLargeSize: 0
    });
    setClothItems([]);
    setUploadedImages({
      imageOne: null,
      imageTwo: null,
      imageThree: null
    });
    setImageFiles([]);
    setFileUploadError(false);
    setUploadProgress({});
  };

  return (
    <div>
      <WNavbar />
      <div className="quotationContainer">
        <h1>Quotation Form</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="quotationFormContainer">
            <div className="quotationForm">
              <input type="text" placeholder="Enter your name" id="username" value={formData.username} onChange={handleChange} />
              <input type="email" placeholder="Enter your email" id="email" value={formData.email} onChange={handleChange} />
              <input type="tel" placeholder="Enter your contact number" id="contactNo" value={formData.contactNo} onChange={handleChange} />
              <select id="clothType" className="clothSelector" value={formData.clothType} onChange={handleChange}>
                
                <option value="Tshirts">Tshirts</option>
                <option value="Blouses">Blouses</option>
                <option value="Frocks">Frocks</option>
                <option value="Skirts">Skirts</option>
              </select>
              <div style={{ display: 'flex', gap: "10px" }}>
                {['small', 'medium', 'large', 'xtraLarge'].map((size) => (
                  <div key={size} className="sizesContainer">
                    <p style={{ color: 'white' }}>({size.charAt(0).toUpperCase()})</p> {/* Updated color to white */}
                    <input
                      type="number"
                      id={`${size}Size`}
                      className="sizesInput"
                      value={formData[`${size}Size`]}
                      onChange={handleChange}
                      min="0"
                    />
                  </div>
                ))}
              </div>
              <div className="designImagesContainerView">
                {["Front", "Back", "Side"].map((view) => (
                  <p key={view}>{view}</p>
                ))}
              </div>
              <div className="designImagesContainer">
                {['One', 'Two', 'Three'].map((num) => (
                  <div key={num}>
                    <input
                      type="file"
                      hidden
                      ref={eval(`image${num}Ref`)}
                      accept="image/*"
                      onChange={(e) => handleFileChange(e, `image${num}`)}
                    />
                    <img
                      src={uploadedImages[`image${num}`] || design1}
                      alt={`Design ${num}`}
                      className="designImages"
                      onClick={() => eval(`image${num}Ref`).current.click()}
                    />
                  </div>
                ))}
              </div>
              <button className="newQuotationBtn" onClick={handleAddNewCloth}>Add another cloth</button>
              <button className="submitQuotationBtn" onClick={handleSubmitBtn}>Submit quotation</button>
              <button className="clearQuotationBtn" onClick={handleClearBtn}>Clear</button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Qtatn_Con;
