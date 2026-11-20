import { Suspense, useEffect, useMemo, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Grid } from '@react-three/drei';
import { Activity, Eye, EyeOff, Info, Languages, Layers3, RotateCcw, Search } from 'lucide-react';
import { getVisibleSystems } from './anatomy/catalog';
import { loadCamelAssetManifest } from './anatomy/loadManifest';
import type { CamelAssetRecord } from './anatomy/assetManifest';
import { statusLabel, type AnatomyStructure, type Sex } from './anatomy/types';
import { CamelAssetModel } from './components/AssetModel';

function PlaceholderCamel() {
  return <group position={[0, -0.5, 0]}>
    <mesh position={[0, 0.25, 0]} castShadow><capsuleGeometry args={[0.48, 1.55, 8, 16]} /><meshStandardMaterial color="#b58c60" roughness={0.9} /></mesh>
    <mesh position={[0.05, 1.28, -0.12]} castShadow><capsuleGeometry args={[0.19, 0.9, 6, 12]} /><meshStandardMaterial color="#b58c60" roughness={0.9} /></mesh>
    <mesh position={[0.1, 1.86, -0.18]} castShadow><sphereGeometry args={[0.24, 20, 16]} /><meshStandardMaterial color="#b58c60" roughness={0.9} /></mesh>
    <mesh position={[0.22, 2.02, -0.18]}><coneGeometry args={[0.07, 0.22, 12]} /><meshStandardMaterial color="#8d6747" /></mesh>
    {[-0.32, 0.32].map(x => [-0.48, 0.5].map(z => <mesh key={x + ':' + z} position={[x, -0.75, z]} castShadow><capsuleGeometry args={[0.095, 0.92, 5, 10]} /><meshStandardMaterial color="#9a7654" /></mesh>))}
    <mesh position={[0, 0.82, 0.05]} castShadow><sphereGeometry args={[0.32, 24, 18]} /><meshStandardMaterial color="#c69a6c" roughness={1} /></mesh>
  </group>;
}

export default function App() {
  const [sex, setSex] = useState<Sex>('male');
  const [activeSystem, setActiveSystem] = useState('skeletal');
  const [selected, setSelected] = useState<AnatomyStructure | null>(null);
  const [query, setQuery] = useState('');
  const [arabic, setArabic] = useState(false);
  const [visible, setVisible] = useState(true);
  const [assets, setAssets] = useState<CamelAssetRecord[]>([]);
  const [manifestError, setManifestError] = useState('');
  const systems = useMemo(() => getVisibleSystems(sex), [sex]);
  const current = systems.find(s => s.id === activeSystem) ?? systems[0];
  const structures = current.structures.filter(s => (s.nameEn + s.nameAr).toLowerCase().includes(query.toLowerCase()));
  const lang = (en: string, ar: string) => arabic ? ar : en;

  useEffect(() => {
    let active = true;
    loadCamelAssetManifest()
      .then(manifest => { if (active) { setAssets(manifest.assets); setManifestError(''); } })
      .catch(error => { if (active) setManifestError(error instanceof Error ? error.message : 'Asset manifest unavailable'); });
    return () => { active = false; };
  }, []);

  const renderableAssets = assets.filter(asset =>
    (asset.systemId === activeSystem || asset.systemId === 'whole-body') &&
    (asset.sex === 'all' || asset.sex === sex) &&
    ['verified', 'approved_for_training'].includes(asset.status)
  );
  const hasReviewedModel = renderableAssets.length > 0;

  return <main className="app-shell">
    <header className="topbar">
      <div className="brand-mark"><Activity size={22} /></div>
      <div><strong>VeterinaryBio <span>3D</span> Camel</strong><small>DROMEDARY ANATOMY WORKSPACE</small></div>
      <div className="top-actions"><span className="species-chip">Camelus dromedarius</span><button className="icon-button" onClick={() => setArabic(v => !v)} title="Switch language"><Languages size={18}/><span>{arabic ? 'EN' : 'عربي'}</span></button></div>
    </header>
    <section className="workspace">
      <aside className="sidebar">
        <div className="section-heading"><Layers3 size={17}/><span>{lang('ANATOMY SYSTEMS','الأجهزة التشريحية')}</span></div>
        <div className="sex-switch"><button className={sex === 'male' ? 'chosen' : ''} onClick={() => {setSex('male'); setActiveSystem('skeletal'); setSelected(null);}}>{lang('Male','ذكر')}</button><button className={sex === 'female' ? 'chosen' : ''} onClick={() => {setSex('female'); setActiveSystem('skeletal'); setSelected(null);}}>{lang('Female','أنثى')}</button></div>
        <div className="system-list">{systems.map(system => <button key={system.id} className={activeSystem === system.id ? 'system-item active' : 'system-item'} onClick={() => {setActiveSystem(system.id);setSelected(null);}}><span>{lang(system.nameEn,system.nameAr)}</span><span className="count">{system.structures.length}</span></button>)}</div>
        <div className="sidebar-note"><Info size={15}/><span>{lang('Catalogue entries are not anatomical proof. Each structure needs camel-specific evidence and expert review.','وجود التركيب في الفهرس لا يعني توثيقه؛ يلزم دليل خاص بالجمل العربي ومراجعة مختص.')}</span></div>
      </aside>
      <section className="viewer-column">
        <div className="viewer-toolbar"><div><strong>{lang('3D BODY VIEW','عرض الجسم ثلاثي الأبعاد')}</strong><small>{lang('Full-body workspace · orbit / zoom','مساحة الجسم الكامل · تدوير / تكبير')}</small></div><button className="tool-button" onClick={() => setVisible(v => !v)}>{visible ? <Eye size={16}/> : <EyeOff size={16}/>} {lang('Model','المجسم')}</button><button className="tool-button" onClick={() => setSelected(null)}><RotateCcw size={16}/>{lang('Reset','إعادة')}</button></div>
        <div className="canvas-wrap">
          <Canvas camera={{position:[3.5,2.5,4.5],fov:42}} shadows>
            <ambientLight intensity={1.5}/><directionalLight position={[4,7,5]} intensity={2} castShadow/>
            <Grid args={[12,12]} cellColor="#34433f" sectionColor="#60736a" fadeDistance={16} infiniteGrid/>
            {visible && (hasReviewedModel
              ? <Suspense fallback={null}>{renderableAssets.map(asset => <CamelAssetModel key={asset.id} url={asset.file.startsWith('/') ? asset.file : `${import.meta.env.BASE_URL}${asset.file}`} />)}</Suspense>
              : <PlaceholderCamel />)}
            <OrbitControls makeDefault enableDamping/>
          </Canvas>
          {!hasReviewedModel && <div className="model-disclaimer"><span className="pulse-dot"/> {lang('DEMONSTRATION PLACEHOLDER — NOT AN ANATOMICAL MODEL','مجسم تجريبي — ليس نموذجاً تشريحياً')}</div>}
          <div className="viewer-caption">{hasReviewedModel
            ? lang('Showing reviewed dromedary asset(s).','يعرض ملفات تشريحية تمت مراجعتها.')
            : lang('No verified camel mesh is installed for this system yet.','لا يوجد نموذج تشريحي موثق لهذا الجهاز حتى الآن.')}</div>
          {manifestError && <div className="manifest-warning">{lang('Asset manifest could not be loaded.','تعذر تحميل سجل النماذج.')}</div>}
        </div>
      </section>
      <aside className="details-panel">
        <div className="panel-title"><span>{lang('STRUCTURE EXPLORER','مستكشف التراكيب')}</span><small>{current.nameEn}</small></div>
        <div className="search-box"><Search size={16}/><input value={query} onChange={e => setQuery(e.target.value)} placeholder={lang('Search structures…','ابحث عن تركيب…')}/></div>
        <div className="structure-list">{structures.map(item => <button key={item.id} className={selected?.id === item.id ? 'structure-item selected' : 'structure-item'} onClick={() => setSelected(item)}><span>{lang(item.nameEn,item.nameAr)}</span><small>{item.status.toUpperCase()}</small></button>)}</div>
        <div className="metadata-card"><div className="metadata-heading"><Info size={16}/>{lang('ANATOMY METADATA','بيانات التركيب')}</div>{selected ? <><h3>{lang(selected.nameEn,selected.nameAr)}</h3><p>{lang(selected.descriptionEn,selected.descriptionAr)}</p><dl><dt>{lang('Verification','حالة التوثيق')}</dt><dd>{statusLabel[selected.status]}</dd><dt>{lang('Sources','المراجع')}</dt><dd>{selected.sources.length ? selected.sources.join(', ') : lang('No sources attached','لا توجد مراجع مرفقة')}</dd><dt>{lang('Structure ID','معرّف التركيب')}</dt><dd>{selected.id}</dd></dl></> : <p>{lang('Select a structure to inspect its metadata and evidence status.','اختر تركيباً لعرض بياناته وحالة توثيقه.')}</p>}</div>
        <div className="surgery-note"><strong>{lang('SURGICAL EDUCATION MODE','وضع التعليم الجراحي')}</strong><p>{lang('Surgical approaches and safety zones remain disabled until camel-specific evidence and specialist validation are available.','المداخل الجراحية ومناطق الأمان غير متاحة حتى توفر أدلة خاصة بالإبل ومراجعة اختصاصيين.')}</p></div>
      </aside>
    </section>
    <footer><span>PHASE 1 · FOUNDATION</span><span>Evidence-led anatomy · Educational use only</span></footer>
  </main>;
}