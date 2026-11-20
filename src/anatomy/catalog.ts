import type { AnatomySystem, Sex } from './types';

const structure = (id: string, nameEn: string, nameAr: string, systemId: string, appliesTo: 'all' | Sex = 'all') => ({
  id, nameEn, nameAr, systemId, appliesTo, status: 'unverified' as const,
  descriptionEn: 'Catalogue entry only. Attach dromedary-specific evidence, specimen provenance and specialist review before verification.',
  descriptionAr: 'مدخل في الفهرس فقط. يجب إرفاق دليل خاص بالجمل العربي ومصدر العينة ومراجعة مختص قبل التوثيق.',
  sources: []
});

export const anatomySystems: AnatomySystem[] = [
  { id: 'skeletal', nameEn: 'Skeletal system', nameAr: 'الجهاز الهيكلي', structures: [
    structure('skull', 'Skull', 'الجمجمة', 'skeletal'),
    structure('nasal-bones', 'Nasal bones', 'العظام الأنفية', 'skeletal'),
    structure('maxilla-mandible', 'Maxilla and mandible', 'الفك العلوي والسفلي', 'skeletal'),
    structure('cervical-vertebrae', 'Cervical vertebrae', 'الفقرات العنقية', 'skeletal'),
    structure('thoracic-vertebrae', 'Thoracic vertebrae', 'الفقرات الصدرية', 'skeletal'),
    structure('lumbar-vertebrae', 'Lumbar vertebrae', 'الفقرات القطنية', 'skeletal'),
    structure('sacral-caudal-vertebrae', 'Sacral and caudal vertebrae', 'الفقرات العجزية والذيلية', 'skeletal'),
    structure('ribs-sternum', 'Ribs and sternum', 'الأضلاع وعظم القص', 'skeletal'),
    structure('scapula-humerus', 'Scapula and humerus', 'لوح الكتف وعظم العضد', 'skeletal'),
    structure('radius-ulna', 'Radius and ulna', 'الكعبرة والزند', 'skeletal'),
    structure('carpus-metacarpus', 'Carpus and metacarpus', 'الرسغ ومشط اليد', 'skeletal'),
    structure('forelimb-phalanges', 'Forelimb phalanges and sesamoids', 'سلاميات وعظام سمسمانية الطرف الأمامي', 'skeletal'),
    structure('pelvis', 'Pelvis', 'الحوض', 'skeletal'),
    structure('femur-patella', 'Femur and patella', 'عظم الفخذ والرضفة', 'skeletal'),
    structure('tibia-fibula', 'Tibia and fibula', 'الظنبوب والشظية', 'skeletal'),
    structure('tarsus', 'Tarsus', 'عظام الرصغ', 'skeletal'),
    structure('metatarsus', 'Metatarsus', 'عظام مشط القدم', 'skeletal'),
    structure('hindlimb-phalanges', 'Hindlimb phalanges and sesamoids', 'سلاميات وعظام سمسمانية الطرف الخلفي', 'skeletal')
  ]},
  { id: 'muscular', nameEn: 'Muscular system', nameAr: 'الجهاز العضلي', structures: [
    structure('head-muscles', 'Head and facial muscles', 'عضلات الرأس والوجه', 'muscular'),
    structure('neck-muscles', 'Neck muscles', 'عضلات الرقبة', 'muscular'),
    structure('epaxial-muscles', 'Epaxial and back muscles', 'عضلات الظهر', 'muscular'),
    structure('thoracic-limb-muscles', 'Thoracic limb muscles', 'عضلات الطرف الأمامي', 'muscular'),
    structure('pelvic-limb-muscles', 'Pelvic limb muscles', 'عضلات الطرف الخلفي', 'muscular'),
    structure('abdominal-wall', 'Abdominal wall muscles', 'عضلات جدار البطن', 'muscular'),
    structure('diaphragm', 'Diaphragm', 'الحجاب الحاجز', 'muscular'),
    structure('tendons-ligaments', 'Major tendons and ligaments', 'الأوتار والأربطة الرئيسية', 'muscular')
  ]},
  { id: 'digestive', nameEn: 'Digestive system', nameAr: 'الجهاز الهضمي', structures: [
    structure('oral-cavity', 'Oral cavity', 'التجويف الفموي', 'digestive'),
    structure('teeth-tongue', 'Teeth and tongue', 'الأسنان واللسان', 'digestive'),
    structure('salivary-glands', 'Salivary glands', 'الغدد اللعابية', 'digestive'),
    structure('pharynx', 'Pharynx', 'البلعوم', 'digestive'),
    structure('oesophagus', 'Oesophagus', 'المريء', 'digestive'),
    structure('camel-c1', 'Camel compartment C1', 'الحجرة المعدية الأولى C1', 'digestive'),
    structure('camel-c2', 'Camel compartment C2', 'الحجرة المعدية الثانية C2', 'digestive'),
    structure('camel-c3', 'Camel compartment C3', 'الحجرة المعدية الثالثة C3', 'digestive'),
    structure('liver', 'Liver', 'الكبد', 'digestive'),
    structure('pancreas', 'Pancreas', 'البنكرياس', 'digestive'),
    structure('small-intestine', 'Small intestine', 'الأمعاء الدقيقة', 'digestive'),
    structure('caecum-colon', 'Caecum and colon', 'الأعور والقولون', 'digestive'),
    structure('rectum-anus', 'Rectum and anus', 'المستقيم والشرج', 'digestive')
  ]},
  { id: 'respiratory', nameEn: 'Respiratory system', nameAr: 'الجهاز التنفسي', structures: [
    structure('nasal-cavity', 'Nasal cavity', 'التجويف الأنفي', 'respiratory'),
    structure('paranasal-sinuses', 'Paranasal sinuses', 'الجيوب الأنفية', 'respiratory'),
    structure('larynx', 'Larynx', 'الحنجرة', 'respiratory'),
    structure('trachea', 'Trachea', 'القصبة الهوائية', 'respiratory'),
    structure('bronchi', 'Bronchi and bronchioles', 'الشعب والقصيبات الهوائية', 'respiratory'),
    structure('lungs', 'Lungs', 'الرئتان', 'respiratory'),
    structure('respiratory-diaphragm', 'Respiratory diaphragm', 'الحجاب الحاجز التنفسي', 'respiratory')
  ]},
  { id: 'cardiovascular', nameEn: 'Cardiovascular system', nameAr: 'الجهاز الدوري', structures: [
    structure('heart', 'Heart', 'القلب', 'cardiovascular'),
    structure('heart-valves', 'Cardiac valves', 'صمامات القلب', 'cardiovascular'),
    structure('aorta-branches', 'Aorta and major branches', 'الشريان الأورطي وفروعه الرئيسية', 'cardiovascular'),
    structure('venae-cavae', 'Venae cavae', 'الوريدان الأجوفان', 'cardiovascular'),
    structure('pulmonary-vessels', 'Pulmonary vessels', 'الأوعية الرئوية', 'cardiovascular'),
    structure('peripheral-vessels', 'Major peripheral vessels', 'الأوعية الطرفية الرئيسية', 'cardiovascular')
  ]},
  { id: 'lymphatic', nameEn: 'Lymphatic and immune system', nameAr: 'الجهاز اللمفاوي والمناعي', structures: [
    structure('lymph-nodes', 'Major lymph nodes', 'العقد اللمفاوية الرئيسية', 'lymphatic'),
    structure('spleen', 'Spleen', 'الطحال', 'lymphatic'),
    structure('thymus-tonsils', 'Thymus and tonsils', 'الغدة الزعترية واللوزتان', 'lymphatic')
  ]},
  { id: 'urinary', nameEn: 'Urinary system', nameAr: 'الجهاز البولي', structures: [
    structure('kidneys', 'Kidneys', 'الكليتان', 'urinary'),
    structure('ureters', 'Ureters', 'الحالبان', 'urinary'),
    structure('urinary-bladder', 'Urinary bladder', 'المثانة البولية', 'urinary'),
    structure('urethra', 'Urethra', 'الإحليل', 'urinary')
  ]},
  { id: 'nervous', nameEn: 'Nervous system', nameAr: 'الجهاز العصبي', structures: [
    structure('brain', 'Brain', 'الدماغ', 'nervous'),
    structure('spinal-cord', 'Spinal cord', 'الحبل الشوكي', 'nervous'),
    structure('cranial-nerves', 'Cranial nerves', 'الأعصاب القحفية', 'nervous'),
    structure('peripheral-nerves', 'Major peripheral nerves', 'الأعصاب الطرفية الرئيسية', 'nervous'),
    structure('autonomic-nervous-system', 'Autonomic nervous system', 'الجهاز العصبي الذاتي', 'nervous')
  ]},
  { id: 'integumentary', nameEn: 'Integumentary system', nameAr: 'الجهاز اللحافي', structures: [
    structure('skin', 'Skin layers', 'طبقات الجلد', 'integumentary'),
    structure('hair-follicles', 'Hair follicles and coat', 'بصيلات الشعر والغطاء الشعري', 'integumentary'),
    structure('cutaneous-glands', 'Cutaneous glands', 'الغدد الجلدية', 'integumentary')
  ]},
  { id: 'male-reproductive', nameEn: 'Male reproductive', nameAr: 'الجهاز التناسلي الذكري', structures: [
    structure('testes', 'Testes', 'الخصيتان', 'male-reproductive', 'male'),
    structure('epididymides', 'Epididymides', 'البربخان', 'male-reproductive', 'male'),
    structure('spermatic-cords', 'Spermatic cords', 'الحبلان المنويان', 'male-reproductive', 'male'),
    structure('ductus-deferens', 'Ductus deferens', 'الأسهران', 'male-reproductive', 'male'),
    structure('accessory-glands', 'Accessory sex glands', 'الغدد الجنسية الملحقة', 'male-reproductive', 'male'),
    structure('penis-prepuce', 'Penis and prepuce', 'القضيب والقلفة', 'male-reproductive', 'male')
  ]},
  { id: 'female-reproductive', nameEn: 'Female reproductive', nameAr: 'الجهاز التناسلي الأنثوي', structures: [
    structure('ovaries', 'Ovaries', 'المبيضان', 'female-reproductive', 'female'),
    structure('oviducts', 'Oviducts', 'قناتا البيض', 'female-reproductive', 'female'),
    structure('uterine-horns', 'Uterine horns', 'قرنا الرحم', 'female-reproductive', 'female'),
    structure('uterine-body', 'Uterine body', 'جسم الرحم', 'female-reproductive', 'female'),
    structure('cervix', 'Cervix', 'عنق الرحم', 'female-reproductive', 'female'),
    structure('vagina-vulva', 'Vagina and vulva', 'المهبل والفرج', 'female-reproductive', 'female'),
    structure('mammary-gland', 'Mammary gland and teats', 'الغدة اللبنية والحلمات', 'female-reproductive', 'female')
  ]}
];

export const getVisibleSystems = (sex: Sex) => anatomySystems.filter(system =>
  system.id === 'male-reproductive' ? sex === 'male' :
  system.id === 'female-reproductive' ? sex === 'female' : true
);
