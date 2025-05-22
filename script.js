// script.js

const defaultData = {
  TikTok: [
    { name: "1000 متابع", description: "زيادة المتابعين بجودة عالية", price: "$5" },
    { name: "5000 متابع", description: "زيادة كبيرة للمستخدمين", price: "$20" },
    { name: "10000 متابع", description: "نتائج فورية وفعالة", price: "$35" },
    { name: "1000 مشاهدة فيديو", description: "مشاهدات طبيعية", price: "$3" },
    { name: "1000 لايك", description: "إعجابات حقيقية", price: "$2.5" }
  ],
  Instagram: [
    { name: "1000 متابع", description: "متابعين حقيقيين آمنين", price: "$6" },
    { name: "5000 متابع", description: "زيادة كبيرة للمستخدمين", price: "$25" },
    { name: "10000 متابع", description: "نتائج مضمونة", price: "$45" },
    { name: "1000 لايك", description: "إعجابات حقيقية", price: "$3" },
    { name: "1000 مشاهدة ستوري", description: "مشاهدات فورية للستوري", price: "$2.5" }
  ],
  Facebook: [
    { name: "1000 متابع", description: "زيادة عضويات الصفحة", price: "$5.5" },
    { name: "5000 متابع", description: "زيادة كبيرة للمستخدمين", price: "$22" },
    { name: "10000 متابع", description: "زيادة كبيرة للمستخدمين", price: "$40" },
    { name: "1000 لايك", description: "إعجابات حقيقية", price: "$3" },
    { name: "1000 مشاركة", description: "مشاركات نشطة وفاعلة", price: "$4" }
  ],
  Telegram: [
    { name: "1000 مشترك", description: "مشتركين حقيقيين", price: "$4" },
    { name: "5000 مشترك", description: "زيادة كبيرة للمستخدمين", price: "$18" },
    { name: "10000 مشترك", description: "زيادة كبيرة للمستخدمين", price: "$32" },
    { name: "1000 مشاهدة", description: "مشاهدات فيديو", price: "$2" },
    { name: "1000 تعليق", description: "تعليقات حقيقية", price: "$3.5" }
  ]
};

function saveData(data) {
  localStorage.setItem("serviceData", JSON.stringify(data));
}

function loadData() {
  const saved = localStorage.getItem("serviceData");
  return saved ? JSON.parse(saved) : defaultData;
}