import type { AnatomySystem, Sex } from './types';

const structure = (id: string, nameEn: string, nameAr: string, systemId: string, appliesTo: 'all' | Sex = 'all') => ({
  id, nameEn, nameAr, systemId, appliesTo, status: 'unverified' as const,
  descriptionEn: 'Placeholder entry. Add camel-specific evidence and expert review before verification.',
  descriptionAr: 'مدخل أولي تجريبي. يلزم إرفاق مرجع خاص بالإبل ومراجعة مختص قبل التوثيق.',
  sources: []
});

export const anatomySystems: AnatomySystem[] = [
  { id: 'skeletal', nameEn: 'Skeletal system', nameAr: 'الجهاز الهيكلي', structures: [
    structure('skull', 'Skull', 'الجمجمة', 'skeletal'), structure('vertebral-column', 'Vertebral column', 'العمود الفقري', 'skeletal'),
    structure('ribs-sternum', 'Ribs and sternum', 'الأضلاع وعظم القص', 'skeletal'), structure('pelvis', 'Pelvis', 'الحوض', 'skeletal'),
    structure('forelimb-skeleton', 'Forelimb skeleton', 'عظام الطرف الأمامي', 'skeletal'), structure('hindlimb-skeleton', 'Hindlimb skeleton', 'عظام الطرف الخلفي', 'skeletal')
  ]},
  { id: 'muscular', nameEn: 'Muscular system', nameAr: 'الجهاز العضلي', structures: [structure('major-muscle-groups', 'Major muscle groups', 'المجموعات العضلية الرئيسية', 'muscular')] },
  { id: 'digestive', nameEn: 'Digestive system', nameAr: 'الجهاز الهضمي', structures: [
    structure('oral-cavity', 'Oral cavity and oesophagus', 'التجويف الفموي والمريء', 'digestive'), structure('forestomachs', 'Camel forestomachs (C1–C3)', 'مقدمات معدة الإبل (C1–C3)', 'digestive'),
    structure('liver', 'Liver', 'الكبد', 'digestive'), structure('intestines', 'Intestines', 'الأمعاء', 'digestive')
  ]},
  { id: 'respiratory', nameEn: 'Respiratory system', nameAr: 'الجهاز التنفسي', structures: [structure('airways', 'Upper and lower airways', 'الممرات التنفسية العليا والسفلى', 'respiratory'), structure('lungs', 'Lungs and diaphragm', 'الرئتان والحجاب الحاجز', 'respiratory')] },
  { id: 'cardiovascular', nameEn: 'Cardiovascular system', nameAr: 'الجهاز الدوري', structures: [structure('heart', 'Heart', 'القلب', 'cardiovascular'), structure('major-vessels', 'Major blood vessels', 'الأوعية الدموية الرئيسية', 'cardiovascular')] },
  { id: 'urinary', nameEn: 'Urinary system', nameAr: 'الجهاز البولي', structures: [structure('kidneys', 'Kidneys and ureters', 'الكليتان والحالبان', 'urinary'), structure('bladder-urethra', 'Bladder and urethra', 'المثانة والإحليل', 'urinary')] },
  { id: 'nervous', nameEn: 'Nervous system', nameAr: 'الجهاز العصبي', structures: [structure('brain', 'Brain', 'الدماغ', 'nervous'), structure('spinal-cord', 'Spinal cord', 'الحبل الشوكي', 'nervous'), structure('peripheral-nerves', 'Major peripheral nerves', 'الأعصاب الطرفية الرئيسية', 'nervous')] },
  { id: 'male-reproductive', nameEn: 'Male reproductive', nameAr: 'الجهاز التناسلي الذكري', structures: [
    structure('testes', 'Testes and epididymides', 'الخصيتان والبربخان', 'male-reproductive', 'male'), structure('male-tract', 'Male reproductive tract', 'القنوات التناسلية الذكرية', 'male-reproductive', 'male')
  ]},
  { id: 'female-reproductive', nameEn: 'Female reproductive', nameAr: 'الجهاز التناسلي الأنثوي', structures: [
    structure('ovaries', 'Ovaries and oviducts', 'المبيضان وقناتا البيض', 'female-reproductive', 'female'), structure('uterus', 'Uterus and cervix', 'الرحم وعنق الرحم', 'female-reproductive', 'female'),
    structure('mammary-gland', 'Mammary gland', 'الغدة اللبنية', 'female-reproductive', 'female')
  ]}
];

export const getVisibleSystems = (sex: Sex) => anatomySystems.filter(system =>
  system.id === 'male-reproductive' ? sex === 'male' :
  system.id === 'female-reproductive' ? sex === 'female' : true
);