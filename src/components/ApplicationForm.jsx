import React, { useState } from 'react';
import { X } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '../emailConfig';

const ApplicationForm = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        countryCode: '+91',
        education: '',
        currentProfile: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const currentProfiles = [
        'Working in Non IT Industry',
        'Working in IT Industry',
        'Students',
        'Graduated and Looking For a Career'
    ];

    const languages = [
        'English',
        'Hindi',
        'Tamil',
        'Telugu',
        'Kannada',
        'Malayalam',
        'Bengali',
        'Marathi',
        'Gujarati',
        'Punjabi',
        'Urdu',
        'Odia',
        'Other'
    ];

    // Indian States and Union Territories
    const states = [
        'Andhra Pradesh',
        'Arunachal Pradesh',
        'Assam',
        'Bihar',
        'Chhattisgarh',
        'Goa',
        'Gujarat',
        'Haryana',
        'Himachal Pradesh',
        'Jharkhand',
        'Karnataka',
        'Kerala',
        'Madhya Pradesh',
        'Maharashtra',
        'Manipur',
        'Meghalaya',
        'Mizoram',
        'Nagaland',
        'Odisha',
        'Punjab',
        'Rajasthan',
        'Sikkim',
        'Tamil Nadu',
        'Telangana',
        'Tripura',
        'Uttar Pradesh',
        'Uttarakhand',
        'West Bengal',
        'Andaman and Nicobar Islands',
        'Chandigarh',
        'Dadra and Nagar Haveli and Daman and Diu',
        'Delhi',
        'Jammu and Kashmir',
        'Ladakh',
        'Lakshadweep',
        'Puducherry'
    ];

    // Districts by state (sample - you can expand this)
    const districtsByState = {
        'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem', 'Tirunelveli', 'Tiruppur', 'Erode', 'Vellore', 'Thoothukudi', 'Dindigul', 'Thanjavur', 'Ranipet', 'Sivaganga', 'Karur', 'Ramanathapuram', 'Virudhunagar', 'Cuddalore', 'Kanchipuram', 'Villupuram', 'Nagapattinam', 'Namakkal', 'Dharmapuri', 'Krishnagiri', 'Ariyalur', 'Perambalur', 'Pudukkottai', 'Nilgiris', 'Theni', 'Kanyakumari', 'Tiruvannamalai', 'Tiruvallur', 'Chengalpattu', 'Tenkasi', 'Tirupattur', 'Mayiladuthurai', 'Kallakurichi'],
        'Karnataka': ['Bengaluru Urban', 'Bengaluru Rural', 'Mysuru', 'Mangaluru', 'Hubballi', 'Belagavi', 'Kalaburagi', 'Ballari', 'Vijayapura', 'Shivamogga', 'Tumakuru', 'Raichur', 'Bidar', 'Dharwad', 'Hassan', 'Mandya', 'Chitradurga', 'Davangere', 'Udupi', 'Chikkamagaluru', 'Kolar', 'Bagalkot', 'Gadag', 'Haveri', 'Koppal', 'Uttara Kannada', 'Yadgir', 'Chamarajanagar', 'Chikkaballapur', 'Dakshina Kannada', 'Kodagu', 'Ramanagara', 'Vijayanagara'],
        'Maharashtra': ['Mumbai', 'Pune', 'Nagpur', 'Thane', 'Nashik', 'Aurangabad', 'Solapur', 'Kolhapur', 'Amravati', 'Nanded', 'Sangli', 'Jalgaon', 'Akola', 'Latur', 'Ahmednagar', 'Dhule', 'Chandrapur', 'Parbhani', 'Jalna', 'Bhiwandi', 'Navi Mumbai', 'Raigad', 'Satara', 'Yavatmal', 'Beed', 'Osmanabad', 'Buldhana', 'Wardha', 'Gondia', 'Washim', 'Hingoli', 'Gadchiroli', 'Ratnagiri', 'Sindhudurg', 'Palghar'],
        'Delhi': ['Central Delhi', 'East Delhi', 'New Delhi', 'North Delhi', 'North East Delhi', 'North West Delhi', 'Shahdara', 'South Delhi', 'South East Delhi', 'South West Delhi', 'West Delhi'],
        'Kerala': ['Thiruvananthapuram', 'Kollam', 'Pathanamthitta', 'Alappuzha', 'Kottayam', 'Idukki', 'Ernakulam', 'Thrissur', 'Palakkad', 'Malappuram', 'Kozhikode', 'Wayanad', 'Kannur', 'Kasaragod'],
        'Telangana': ['Hyderabad', 'Warangal', 'Nizamabad', 'Khammam', 'Karimnagar', 'Ramagundam', 'Mahbubnagar', 'Nalgonda', 'Adilabad', 'Suryapet', 'Siddipet', 'Miryalaguda', 'Jagtial', 'Mancherial', 'Nirmal', 'Sangareddy', 'Kamareddy', 'Bhongir', 'Palwancha', 'Kothagudem', 'Bodhan', 'Gadwal', 'Wanaparthy', 'Nagarkurnool', 'Medak', 'Vikarabad', 'Jangaon', 'Mahabubabad', 'Jayashankar', 'Peddapalli', 'Rajanna Sircilla', 'Medchal-Malkajgiri', 'Rangareddy', 'Yadadri Bhuvanagiri'],
        'Andhra Pradesh': ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Nellore', 'Kurnool', 'Rajahmundry', 'Tirupati', 'Kadapa', 'Kakinada', 'Anantapur', 'Vizianagaram', 'Eluru', 'Ongole', 'Nandyal', 'Machilipatnam', 'Adoni', 'Tenali', 'Chittoor', 'Hindupur', 'Proddatur', 'Bhimavaram', 'Madanapalle', 'Guntakal', 'Dharmavaram', 'Gudivada', 'Srikakulam', 'Narasaraopet', 'Rajampet', 'Tadpatri', 'Tadepalligudem', 'Chilakaluripet', 'Yemmiganur', 'Kadiri', 'Chirala', 'Anakapalle', 'Kavali', 'Palacole', 'Sullurpeta'],
        'Gujarat': ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Jamnagar', 'Junagadh', 'Gandhinagar', 'Anand', 'Navsari', 'Morbi', 'Nadiad', 'Surendranagar', 'Bharuch', 'Mehsana', 'Bhuj', 'Porbandar', 'Palanpur', 'Valsad', 'Vapi', 'Gondal', 'Veraval', 'Godhra', 'Patan', 'Kalol', 'Dahod', 'Botad', 'Amreli', 'Deesa', 'Jetpur'],
        'Rajasthan': ['Jaipur', 'Jodhpur', 'Kota', 'Bikaner', 'Ajmer', 'Udaipur', 'Bhilwara', 'Alwar', 'Bharatpur', 'Sikar', 'Pali', 'Sri Ganganagar', 'Kishangarh', 'Tonk', 'Beawar', 'Hanumangarh'],
        'Uttar Pradesh': ['Lucknow', 'Kanpur', 'Ghaziabad', 'Agra', 'Varanasi', 'Meerut', 'Prayagraj', 'Bareilly', 'Aligarh', 'Moradabad', 'Saharanpur', 'Gorakhpur', 'Noida', 'Firozabad', 'Jhansi', 'Muzaffarnagar', 'Mathura', 'Rampur', 'Shahjahanpur', 'Farrukhabad', 'Mau', 'Hapur', 'Ayodhya', 'Etawah', 'Mirzapur', 'Bulandshahr', 'Sambhal', 'Amroha', 'Hardoi', 'Fatehpur', 'Raebareli', 'Orai', 'Sitapur', 'Bahraich', 'Modinagar', 'Unnao', 'Jaunpur', 'Lakhimpur', 'Hathras', 'Banda', 'Pilibhit', 'Barabanki', 'Khurja', 'Gonda', 'Mainpuri', 'Lalitpur', 'Etah', 'Deoria', 'Ujhani', 'Ghazipur', 'Sultanpur', 'Azamgarh', 'Bijnor', 'Sahaswan', 'Basti', 'Chandausi', 'Akbarpur', 'Ballia', 'Tanda', 'Greater Noida', 'Shikohabad', 'Shamli', 'Awagarh', 'Kasganj'],
        'West Bengal': ['Kolkata', 'Howrah', 'Durgapur', 'Asansol', 'Siliguri', 'Bardhaman', 'Malda', 'Baharampur', 'Habra', 'Kharagpur', 'Shantipur', 'Dankuni', 'Dhulian', 'Ranaghat', 'Haldia', 'Raiganj', 'Krishnanagar', 'Nabadwip', 'Medinipur', 'Jalpaiguri', 'Balurghat', 'Basirhat', 'Bankura', 'Chakdaha', 'Darjeeling', 'Alipurduar', 'Purulia', 'Jangipur'],
        'Madhya Pradesh': ['Indore', 'Bhopal', 'Jabalpur', 'Gwalior', 'Ujjain', 'Sagar', 'Dewas', 'Satna', 'Ratlam', 'Rewa', 'Murwara', 'Singrauli', 'Burhanpur', 'Khandwa', 'Bhind', 'Chhindwara', 'Guna', 'Shivpuri', 'Vidisha', 'Chhatarpur', 'Damoh', 'Mandsaur', 'Khargone', 'Neemuch', 'Pithampur', 'Hoshangabad', 'Itarsi', 'Sehore', 'Betul', 'Seoni', 'Datia', 'Nagda'],
        'Punjab': ['Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala', 'Bathinda', 'Mohali', 'Pathankot', 'Hoshiarpur', 'Batala', 'Moga', 'Malerkotla', 'Khanna', 'Phagwara', 'Muktsar', 'Barnala', 'Rajpura', 'Firozpur', 'Kapurthala', 'Faridkot', 'Sunam'],
        'Haryana': ['Faridabad', 'Gurgaon', 'Hisar', 'Rohtak', 'Panipat', 'Karnal', 'Sonipat', 'Yamunanagar', 'Panchkula', 'Bhiwani', 'Bahadurgarh', 'Jind', 'Sirsa', 'Thanesar', 'Kaithal', 'Palwal', 'Rewari', 'Hansi', 'Narnaul', 'Fatehabad', 'Gohana', 'Tohana', 'Narwana'],
        'Bihar': ['Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur', 'Darbhanga', 'Arrah', 'Begusarai', 'Chhapra', 'Katihar', 'Munger', 'Purnia', 'Saharsa', 'Sasaram', 'Hajipur', 'Dehri', 'Siwan', 'Motihari', 'Nawada', 'Bagaha', 'Buxar', 'Kishanganj', 'Sitamarhi', 'Jamalpur', 'Jehanabad', 'Aurangabad'],
        'Jharkhand': ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Deoghar', 'Phusro', 'Hazaribagh', 'Giridih', 'Ramgarh', 'Medininagar', 'Chirkunda'],
        'Odisha': ['Bhubaneswar', 'Cuttack', 'Rourkela', 'Berhampur', 'Sambalpur', 'Puri', 'Balasore', 'Bhadrak', 'Baripada', 'Jharsuguda'],
        'Assam': ['Guwahati', 'Silchar', 'Dibrugarh', 'Jorhat', 'Nagaon', 'Tinsukia', 'Tezpur', 'Bongaigaon', 'Diphu', 'Dhubri', 'North Lakhimpur'],
        'Chhattisgarh': ['Raipur', 'Bhilai', 'Bilaspur', 'Korba', 'Durg', 'Rajnandgaon', 'Jagdalpur', 'Raigarh', 'Ambikapur', 'Mahasamund', 'Dhamtari'],
        'Uttarakhand': ['Dehradun', 'Haridwar', 'Roorkee', 'Haldwani', 'Rudrapur', 'Kashipur', 'Rishikesh', 'Pithoragarh'],
        'Himachal Pradesh': ['Shimla', 'Mandi', 'Solan', 'Nahan', 'Sundernagar', 'Palampur'],
        'Goa': ['Panaji', 'Margao', 'Vasco da Gama', 'Mapusa', 'Ponda', 'Bicholim'],
        'Puducherry': ['Puducherry', 'Karaikal', 'Yanam', 'Mahe'],
        'Chandigarh': ['Chandigarh'],
        'Jammu and Kashmir': ['Srinagar', 'Jammu', 'Anantnag', 'Baramulla', 'Sopore', 'Kathua', 'Udhampur'],
        'Ladakh': ['Leh', 'Kargil'],
        'Tripura': ['Agartala', 'Dharmanagar', 'Udaipur', 'Kailasahar', 'Belonia'],
        'Meghalaya': ['Shillong', 'Tura', 'Nongstoin'],
        'Manipur': ['Imphal', 'Thoubal', 'Churachandpur'],
        'Nagaland': ['Kohima', 'Dimapur', 'Mokokchung'],
        'Mizoram': ['Aizawl', 'Lunglei', 'Saiha'],
        'Arunachal Pradesh': ['Itanagar', 'Naharlagun', 'Pasighat'],
        'Sikkim': ['Gangtok', 'Namchi', 'Gyalshing', 'Mangan']
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const requests = [];

            // Only send email if EmailJS is configured
            if (EMAIL_CONFIG.SERVICE_ID && EMAIL_CONFIG.SERVICE_ID !== 'YOUR_SERVICE_ID') {
                const templateParams = {
                    from_name: formData.name,
                    from_email: formData.email,
                    phone: `${formData.countryCode} ${formData.phone}`,
                    education: formData.education,
                    current_profile: formData.currentProfile,
                    to_email: 'your-email@example.com'
                };

                requests.push(
                    emailjs.send(
                        EMAIL_CONFIG.SERVICE_ID,
                        EMAIL_CONFIG.APPLICATION_TEMPLATE_ID,
                        templateParams,
                        EMAIL_CONFIG.PUBLIC_KEY
                    )
                );
            }

            // Send to Google Sheets
            const sheetsData = {
                formType: 'application',
                name: formData.name,
                email: formData.email,
                phone: `${formData.countryCode} ${formData.phone}`,
                education: formData.education,
                currentProfile: formData.currentProfile
            };

            requests.push(
                fetch(EMAIL_CONFIG.GOOGLE_SHEETS_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(sheetsData)
                })
            );

            // Send all requests in parallel
            await Promise.all(requests);

            console.log('Application form submitted:', formData);

            // Show success message
            alert('Application submitted successfully! Your syllabus will download now. We will contact you soon.');

            // Trigger syllabus download
            const link = document.createElement('a');
            link.href = `${import.meta.env.BASE_URL}syllabus.pdf`;
            link.download = 'Terv-Full-Stack-Syllabus.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Reset form and close
            setFormData({
                name: '',
                email: '',
                phone: '',
                countryCode: '+91',
                education: '',
                currentProfile: ''
            });
            onClose();
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error submitting your application. Please try again or contact us directly.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px',
            overflowY: 'auto'
        }}
            onClick={onClose}
        >
            <div style={{
                backgroundColor: 'white',
                borderRadius: 'var(--radius-lg)',
                maxWidth: '600px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                position: 'relative'
            }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div style={{
                    padding: '24px',
                    borderBottom: '1px solid #e5e7eb',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    position: 'sticky',
                    top: 0,
                    backgroundColor: 'white',
                    zIndex: 1
                }}>
                    <h2 style={{ margin: 0, fontSize: '1.5rem', color: 'var(--color-secondary)' }}>Apply Now</h2>
                    <button
                        onClick={onClose}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <X size={24} color="#666" />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} style={{ padding: '24px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        {/* Name */}
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--color-text-main)' }}>
                                Name <span style={{ color: 'red' }}>*</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    borderRadius: 'var(--radius-sm)',
                                    border: '1px solid #d1d5db',
                                    fontSize: '1rem'
                                }}
                                placeholder="Enter your full name"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--color-text-main)' }}>
                                Email ID <span style={{ color: 'red' }}>*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    borderRadius: 'var(--radius-sm)',
                                    border: '1px solid #d1d5db',
                                    fontSize: '1rem'
                                }}
                                placeholder="your.email@example.com"
                            />
                        </div>

                        {/* Phone Number with Country Code */}
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--color-text-main)' }}>
                                Phone Number <span style={{ color: 'red' }}>*</span>
                            </label>
                            <div style={{ display: 'flex', gap: '8px' }}>
                                <select
                                    name="countryCode"
                                    value={formData.countryCode}
                                    onChange={handleChange}
                                    style={{
                                        padding: '12px',
                                        borderRadius: 'var(--radius-sm)',
                                        border: '1px solid #d1d5db',
                                        fontSize: '1rem',
                                        width: '100px'
                                    }}
                                >
                                    <option value="+91">+91</option>
                                    <option value="+1">+1</option>
                                    <option value="+44">+44</option>
                                    <option value="+971">+971</option>
                                    <option value="+65">+65</option>
                                </select>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    pattern="[0-9]{10}"
                                    style={{
                                        flex: 1,
                                        padding: '12px',
                                        borderRadius: 'var(--radius-sm)',
                                        border: '1px solid #d1d5db',
                                        fontSize: '1rem'
                                    }}
                                    placeholder="10-digit mobile number"
                                />
                            </div>
                        </div>

                        {/* Educational Qualification */}
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--color-text-main)' }}>
                                Educational Qualification <span style={{ color: 'red' }}>*</span>
                            </label>
                            <input
                                type="text"
                                name="education"
                                required
                                value={formData.education}
                                onChange={handleChange}
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    borderRadius: 'var(--radius-sm)',
                                    border: '1px solid #d1d5db',
                                    fontSize: '1rem'
                                }}
                                placeholder="e.g., B.Tech, BCA, MCA, etc."
                            />
                        </div>

                        {/* Current Profile */}
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--color-text-main)' }}>
                                Current Profile <span style={{ color: 'red' }}>*</span>
                            </label>
                            <select
                                name="currentProfile"
                                required
                                value={formData.currentProfile}
                                onChange={handleChange}
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    borderRadius: 'var(--radius-sm)',
                                    border: '1px solid #d1d5db',
                                    fontSize: '1rem'
                                }}
                            >
                                <option value="">Select your current profile</option>
                                {currentProfiles.map((profile) => (
                                    <option key={profile} value={profile}>{profile}</option>
                                ))}
                            </select>
                        </div>



                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={isSubmitting}
                            style={{
                                width: '100%',
                                padding: '14px',
                                fontSize: '1.1rem',
                                marginTop: '8px',
                                opacity: isSubmitting ? 0.7 : 1,
                                cursor: isSubmitting ? 'not-allowed' : 'pointer'
                            }}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit Application'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ApplicationForm;
