import React, { useState } from 'react';
import { 
  FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaMobileAlt, 
  FaGamepad, FaDatabase, FaCloud, FaEnvelope, FaPhone, FaMapMarkerAlt 
} from 'react-icons/fa';

const projects = [
  {
    title: "Sentiment Classification of Steam Reviews",
    category: "Big Data & ML",
    icon: <FaCode />,
    shortDesc: "Clasificarea sentimentelor folosind PySpark pe GCP.",
    longDesc: "Acest proiect evaluează performanța mai multor clasificatori (Naive Bayes, SVM, Random Forest) într-un mediu de calcul distribuit. Analiza a evidențiat scalabilitatea și eficiența instrumentelor de Big Data pe seturi de date masive de pe platforma Steam.",
    tech: ["PySpark", "Python", "GCP", "Kaggle", "Jupyter"],
    link: "https://github.com/AlexNechita1/SentimentClassification",
    media: { type: 'image', url: 'assets/SentimentClasification.png'}
  },
 {
    title: "Phishing Website Detection",
    category: "Machine Learning",
    icon: <FaDatabase />,
    shortDesc: "Cercetare comparativă ML pentru securitate cibernetică.",
    longDesc: "Proiect colaborativ de cercetare a algoritmilor ML (Random Forest, SVM, MLP) pentru detectarea site-urilor malițioase. Am utilizat dataset-ul UCI și am optimizat modelele prin Hyperparameter Tuning și Cross-Validation.",
    tech: ["Python", "Scikit-Learn", "Pandas", "Research"],
    link: "https://github.com/nkororo/Phishing-Websites-Detection",
    media: { type: 'image', url: 'assets/Phishing.png'}
  },
  {
    title: "MatchMate – Microservices",
    category: "Web & Cloud",
    icon: <FaServer />,
    shortDesc: "Platformă de matchmaking pentru gameri bazată pe microservicii.",
    longDesc: "MatchMate conectează utilizatorii în funcție de preferințele de joc și stilul de joc. Arhitectura cloud-native folosește Azure Container Apps și containere Docker pentru a asigura scalabilitatea serviciilor de Chat, User și Matchmaking.",
    tech: ["Node.js", "Docker", "Azure", "MSSQL", "REST API"],
    link: "https://github.com/nkororo/MatchMate-MicroservicesApp",
    media: {}
  },
  {
    title: "MovieGram – Social Movie App",
    category: "Mobile Development",
    icon: <FaMobileAlt />,
    shortDesc: "Aplicație Android pentru cinefili cu recomandări smart.",
    longDesc: "O rețea socială pentru pasionații de filme care folosește IMDb API pentru date și Firebase pentru stocare. Include sisteme de recomandare bazate pe preferințele utilizatorului și funcții de interacțiune socială (urmărire, postări, profiluri).",
    tech: ["Java", "Android Studio", "Firebase", "IMDb API"],
    link: "https://github.com/AlexNechita1/Moviegram",
    media: { type: 'image', url: 'assets/Moviegram.jpg' }
  },
  {
    title: "Looping Simulator",
    category: "Game Dev",
    icon: <FaGamepad />,
    shortDesc: "Joc 2D asimetric de supraviețuire în VB.NET.",
    longDesc: "Inspirat de Dead by Daylight, acest joc pune un jucător în rolul ucigașului și ceilalți în rolul supraviețuitorilor. Implementează mecanici complexe de coliziune, game loops și inteligență de mișcare folosind WinForms și GDI+.",
    tech: ["Visual Basic .NET", "WinForms", "GDI+", "Game Design"],
    link: "https://github.com/AlexNechita1/Loooping-Simulator",
    media: { type: 'image', url: 'assets/LoopingSimulator.png' }
  }
];

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const skillCategories = [
    { title: "Programming", skills: "Python, Java, JavaScript, C++, SQL, Visual Basic, R, Bash" },
    { title: "Data & ML", skills: "PySpark, scikit-learn, TensorFlow, PyTorch, Pandas, NumPy" },
    { title: "Cloud & DevOps", skills: "Azure, GCP, Docker, AWS, GitHub, CI/CD" },
    { title: "Databases", skills: "Oracle, Firebase, MySQL, MSSQL" }
  ];

  return (
    <div style={{ backgroundColor: '#0f172a', color: 'white', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      
      {/* --- HERO SECTION --- */}
      <section style={{ padding: '80px 20px', textAlign: 'center', background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '10px' }}>Alexandru Nechita</h1>
        <p style={{ fontSize: '1.5rem', color: '#38bdf8', fontWeight: '500' }}>Senior QA Analyst & Software Developer</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px', color: '#94a3b8' }}>
          <span><FaMapMarkerAlt /> Timisoara, RO</span>
        </div>
        <p style={{ maxWidth: '800px', margin: '30px auto', fontSize: '1.1rem', lineHeight: '1.6', color: '#cbd5e1' }}>
          Senior QA Analyst cu peste 5 ani de experiență și un background tehnic solid în Python, Big Data și Machine Learning. 
        </p>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section style={{ padding: '60px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Technical Stack</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          {skillCategories.map((cat, i) => (
            <div key={i} style={{ backgroundColor: '#1e293b', padding: '20px', borderRadius: '12px', border: '1px solid #334155' }}>
              <h3 style={{ color: '#38bdf8', marginBottom: '10px' }}>{cat.title}</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>{cat.skills}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section style={{ padding: '60px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Featured Projects</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '25px' }}>
          {projects.map((project, index) => (
            <div key={index} style={{ backgroundColor: '#1e293b', padding: '25px', borderRadius: '15px', border: '1px solid #334155', position: 'relative' }}>
              <div style={{ fontSize: '2rem', color: '#38bdf8', marginBottom: '15px' }}>{project.icon}</div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '10px' }}>{project.title}</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '20px' }}>{project.shortDesc}</p>
              <button 
                onClick={() => setSelectedProject(project)}
                style={{ backgroundColor: '#0ea5e9', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
                Vezi Detalii
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* --- MODAL DETALII --- */}
      {selectedProject && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.85)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000, padding: '20px' }}>
          <div style={{ backgroundColor: '#1e293b', maxWidth: '800px', width: '100%', borderRadius: '20px', padding: '30px', position: 'relative', maxHeight: '90vh', overflowY: 'auto' }}>
            <button onClick={() => setSelectedProject(null)} style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer' }}>✕</button>
            
            <h2 style={{ color: '#38bdf8', marginBottom: '20px' }}>{selectedProject.title}</h2>
            <img src={selectedProject.media.url} alt="Project Preview" style={{ width: '100%', borderRadius: '10px', marginBottom: '20px' }} />
            
            <p style={{ lineHeight: '1.6', color: '#cbd5e1', marginBottom: '20px' }}>{selectedProject.longDesc}</p>
            
            <h4 style={{ marginBottom: '10px' }}>Tehnologii folosite:</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '30px' }}>
              {selectedProject.tech.map((t, i) => (
                <span key={i} style={{ backgroundColor: '#334155', padding: '5px 12px', borderRadius: '20px', fontSize: '0.85rem' }}>{t}</span>
              ))}
            </div>
            
            <a href={selectedProject.link} target="_blank" rel="noreferrer" style={{ backgroundColor: '#38bdf8', color: '#0f172a', padding: '12px 25px', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
              Deschide Proiect <FaExternalLinkAlt size={14} />
            </a>
          </div>
        </div>
      )}

      <footer style={{ textAlign: 'center', padding: '40px', color: '#64748b', borderTop: '1px solid #334155', marginTop: '40px' }}>
        <p>© 2026 Alexandru Nechita | Built with React & GitHub Pages</p>
      </footer>
    </div>
  );
}

export default App;