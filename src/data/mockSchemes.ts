/**
 * Mock scheme data - Simplified content + Indian language translations
 * USP: Every scheme is clear and available in multiple Indian languages
 */

import { Scheme } from "@/types";

const MYSCHEME_BASE = "https://www.myscheme.gov.in";

export const MOCK_SCHEMES: Scheme[] = [
  {
    id: "1",
    name: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
    description:
      "Income support scheme for all landholding farmer families across the country. Provides financial assistance of Rs. 6,000 per year in three equal installments.",
    eligibilitySummary: "Landholding farmers, Indian citizens, aged 18-40 years",
    simpleName: "PM-KISAN: Farmer Income Support",
    simpleDescription:
      "You get ₹6,000 per year if you are a small farmer with land. Money comes in 3 parts (₹2,000 each). Direct to your bank account—no middleman.",
    simpleEligibility: "Farmer with land, Indian citizen, 18–40 years",
    sourceUrl: MYSCHEME_BASE,
    translations: {
      hi: {
        name: "PM-KISAN: किसान आय सहायता",
        description: "अगर आप छोटे किसान हैं और जमीन है तो साल में ₹6,000 मिलेंगे। पैसा 3 बार (हर बार ₹2,000) आपके बैंक में सीधे जाएगा।",
        eligibilitySummary: "जमीन वाला किसान, भारतीय नागरिक, 18–40 वर्ष",
      },
      ta: {
        name: "PM-KISAN: விவசாயி வருமான உதவி",
        description: "நீங்கள் சிறிய விவசாயி மற்றும் நிலம் இருந்தால் ஆண்டுக்கு ₹6,000 கிடைக்கும். பணம் 3 முறை (ஒவ்வொன்றும் ₹2,000) உங்கள் வங்கியில் நேரடியாக வரும்.",
        eligibilitySummary: "நிலம் உள்ள விவசாயி, இந்திய குடிமகன், 18–40 வயது",
      },
      te: {
        name: "PM-KISAN: రైతు ఆదాయ సహాయం",
        description: "మీకు చిన్న రైతు మరియు భూమి ఉంటే సంవత్సరానికి ₹6,000 వస్తుంది. డబ్బు 3 సార్లు (ఒక్కొక్కటి ₹2,000) మీ బ్యాంకులో నేరుగా వస్తుంది.",
        eligibilitySummary: "భూమి ఉన్న రైతు, భారత పౌరుడు, 18–40 సంవత్సరాలు",
      },
      bn: {
        name: "PM-KISAN: কৃষক আয় সহায়তা",
        description: "আপনি যদি ছোট কৃষক হন এবং জমি থাকে তবে বছরে ₹6,000 পাবেন। টাকা ৩ বার (প্রতিবার ₹2,000) সরাসরি আপনার ব্যাঙ্কে আসবে।",
        eligibilitySummary: "জমি আছে এমন কৃষক, ভারতীয় নাগরিক, ১৮–৪০ বছর",
      },
      mr: {
        name: "PM-KISAN: शेतकरी उत्पन्न सहायता",
        description: "तुम्हाला लहान शेतकरी असून जमीन असेल तर दरवर्षी ₹6,000 मिळतील. पैसे 3 वेळा (प्रत्येकी ₹2,000) थेट तुमच्या बँकेत येतील.",
        eligibilitySummary: "जमीन असलेला शेतकरी, भारतीय नागरिक, 18–40 वर्ष",
      },
    },
  },
  {
    id: "2",
    name: "National Social Assistance Programme (NSAP)",
    description:
      "Centrally sponsored scheme providing social assistance benefits to the elderly, widows and persons with disabilities in the form of monthly pensions.",
    eligibilitySummary: "Senior citizens (60+), widows, persons with disability, BPL category",
    simpleName: "NSAP: Monthly Pension for Elderly & Disabled",
    simpleDescription:
      "Old people (60+), widows, and persons with disability get a monthly pension. You must be below poverty line (BPL). Apply at your local block office.",
    simpleEligibility: "60+ years / Widow / Disabled, BPL",
    sourceUrl: MYSCHEME_BASE,
    translations: {
      hi: {
        name: "NSAP: बुजुर्ग और विकलांगों को मासिक पेंशन",
        description: "60 से ऊपर बुजुर्ग, विधवा और विकलांग व्यक्तियों को महीने में पेंशन मिलती है। आप गरीबी रेखा से नीचे (BPL) होने चाहिए।",
        eligibilitySummary: "60+ वर्ष / विधवा / विकलांग, BPL",
      },
      ta: {
        name: "NSAP: முதியோர் மற்றும் ஊனமுற்றோருக்கு மாதாந்திர ஓய்வூதியம்",
        description: "60 வயதுக்கு மேற்பட்டவர்கள், விதவைகள் மற்றும் ஊனமுற்றோர் மாதாந்திர ஓய்வூதியம் பெறுவர். நீங்கள் BPL வகையில் இருக்க வேண்டும்.",
        eligibilitySummary: "60+ வயது / விதவை / ஊனமுற்றோர், BPL",
      },
      te: {
        name: "NSAP: ముసలి మరియు వికలాంగులకు నెలవారీ పెన్షన్",
        description: "60 సంవత్సరాల పైబడిన వృద్ధులు, విధవలు మరియు వికలాంగులు నెలవారీ పెన్షన్ పొందుతారు. మీరు BPL కావాలి.",
        eligibilitySummary: "60+ సంవత్సరాలు / విధవ / వికలాంగుడు, BPL",
      },
      bn: {
        name: "NSAP: বয়স্ক ও প্রতিবন্ধীদের মাসিক পেনশন",
        description: "৬০ বছরের বেশি বয়স্ক, বিধবা এবং প্রতিবন্ধী ব্যক্তিরা মাসিক পেনশন পাবেন। আপনাকে BPL হতে হবে।",
        eligibilitySummary: "৬০+ বছর / বিধবা / প্রতিবন্ধী, BPL",
      },
      mr: {
        name: "NSAP: वृद्ध आणि अपंगांना मासिक निवृत्तीवेतन",
        description: "60 वर्षांवरील वृद्ध, विधवा आणि अपंग व्यक्तींना मासिक निवृत्तीवेतन मिळते. तुम्हाला BPL असणे आवश्यक आहे.",
        eligibilitySummary: "60+ वर्ष / विधवा / अपंग, BPL",
      },
    },
  },
  {
    id: "3",
    name: "Post Matric Scholarship for OBC/SC/ST Students",
    description:
      "Financial assistance for students from backward classes to pursue higher education. Covers tuition fees, maintenance allowance, and other academic expenses.",
    eligibilitySummary: "OBC/SC/ST students, annual family income below Rs. 8 lakh",
    simpleName: "Scholarship for OBC/SC/ST College Students",
    simpleDescription:
      "OBC, SC, ST students get money for college fees and living. Your family income must be below ₹8 lakh per year. Apply online on National Scholarship Portal.",
    simpleEligibility: "OBC/SC/ST student, family income under ₹8 lakh",
    sourceUrl: MYSCHEME_BASE,
    translations: {
      hi: {
        name: "OBC/SC/ST छात्रों के लिए स्कॉलरशिप",
        description: "OBC, SC, ST छात्रों को कॉलेज फीस और रहने के लिए पैसे मिलते हैं। परिवार की सालाना आय ₹8 लाख से कम होनी चाहिए।",
        eligibilitySummary: "OBC/SC/ST छात्र, परिवार की आय ₹8 लाख से कम",
      },
      ta: {
        name: "OBC/SC/ST மாணவர்களுக்கான உதவித்தொகை",
        description: "OBC, SC, ST மாணவர்களுக்கு கல்லூரி கட்டணம் மற்றும் வாழ்க்கைக்கு பணம் கிடைக்கும். உங்கள் குடும்ப வருமானம் ஆண்டுக்கு ₹8 லட்சத்திற்கு குறைவாக இருக்க வேண்டும்.",
        eligibilitySummary: "OBC/SC/ST மாணவர், குடும்ப வருமானம் ₹8 லட்சத்திற்கு குறைவு",
      },
      te: {
        name: "OBC/SC/ST విద్యార్థులకు స్కాలర్షిప్",
        description: "OBC, SC, ST విద్యార్థులకు కళాశాల రుసుము మరియు జీవనానికి డబ్బు వస్తుంది. మీ కుటుంబ ఆదాయం సంవత్సరానికి ₹8 లక్షల కంటే తక్కువ ఉండాలి.",
        eligibilitySummary: "OBC/SC/ST విద్యార్థి, కుటుంబ ఆదాయం ₹8 లక్షల కంటే తక్కువ",
      },
      bn: {
        name: "OBC/SC/ST ছাত্রদের বৃত্তি",
        description: "OBC, SC, ST ছাত্রদের কলেজ ফি এবং থাকার জন্য টাকা দেওয়া হয়। পরিবারের বার্ষিক আয় ₹৮ লক্ষের কম হতে হবে।",
        eligibilitySummary: "OBC/SC/ST ছাত্র, পরিবারের আয় ₹৮ লক্ষের কম",
      },
      mr: {
        name: "OBC/SC/ST विद्यार्थ्यांसाठी शिष्यवृत्ती",
        description: "OBC, SC, ST विद्यार्थ्यांना महाविद्यालयीन फी आणि राहण्यासाठी पैसे मिळतात. कुटुंबाचे वार्षिक उत्पन्न ₹8 लाखांपेक्षा कमी असणे आवश्यक आहे.",
        eligibilitySummary: "OBC/SC/ST विद्यार्थी, कुटुंब उत्पन्न ₹8 लाखांपेक्षा कमी",
      },
    },
  },
];
