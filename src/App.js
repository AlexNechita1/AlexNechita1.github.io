import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaMobileAlt, FaGamepad } from 'react-icons/fa';

const projects = [
  {
    title: "Sentiment Classification of Steam Reviews",
    category: "Big Data & ML",
    icon: <FaCode />,
    description: "Clasificarea sentimentelor folosind PySpark pe Google Cloud Platform. Compară modele precum SVM și Random Forest în medii distribuite.",
    tech: ["PySpark", "Python", "GCP", "Kaggle"],
    link: "#" // Pune link-ul de GitHub aici
  },
  {
    title: "Phishing Website Detection",
    category: "Machine Learning",
    icon: <FaServer />,
    description: "Detectarea automată a site-urilor de phishing folosind Scikit-Learn. Include Logistic Regression, KNN și MLP cu optimizare de hiperparametri.",
    tech: ["Python", "Scikit-Learn", "Pandas", "Matplotlib"],
    link: "#"
  },
  {
    title: "MatchMate – Microservices App",
    category: "Web & Cloud",
    icon: <FaServer />,
    description: "Arhitectură de microservicii pentru matchmaking în gaming. Containerizat cu Docker și deploy-at în Azure.",
    tech: ["Node.js", "Docker", "Azure", "REST API"],
    link: "https://drive.google.com/file/d/1paA5UbmhD5yNbLDHVljPDgMNWdVDRS-y/view?usp=sharing"
  },
  {
    title: "MovieGram – Social App",
    category: "Mobile Development",
    icon: <FaMobileAlt />,
    description: "Aplicație Android (Java) pentru recomandări de filme și socializare, integrată cu IMDb API și Firebase.",
    tech: ["Java", "Android Studio", "Firebase", "IMDb API"],
    link: "#"
  },
  {
    title: "Looping Simulator",
    category: "Game Dev",
    icon: <FaGamepad />,
    description: "Joc 2D asimetric de supraviețuire realizat în VB.NET, axat pe mecanici de coliziune și looping în timp real.",
    tech: ["VB.NET", "WinForms", "GDI+"],
    link: "#"
  }
];

function App() {
  return (
    <div style={{ backgroundColor: '#0f172a', color: 'white', minHeight: '100vh', padding: '40px 20px', fontFamily: 'sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Alex Nechita</h1>
        <p style={{ fontSize: '1.2rem', color: '#94a3b8' }}>IT Student | Data Enthusiast | Software Developer</p>
      </header>

      <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {projects.map((project, index) => (
          <div key={index} style={{ backgroundColor: '#1e293b', padding: '20px', borderRadius: '12px', border: '1px solid #334155', transition: 'transform 0.2s' }}>
            <div style={{ fontSize: '2rem', color: '#38bdf8', marginBottom: '10px' }}>{project.icon}</div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{project.title}</h2>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '20px' }}>{project.description}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
              {project.tech.map((t, i) => (
                <span key={i} style={{ backgroundColor: '#0ea5e9', color: 'white', padding: '4px 10px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 'bold' }}>{t}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: '#38bdf8', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 'bold' }}>
              View Project <FaExternalLinkAlt size={12} />
            </a>
          </div>
        ))}
      </div>
      
      <footer style={{ textAlign: 'center', marginTop: '60px', color: '#64748b' }}>
        <p>© 2025 Alex Nechita </p>
      </footer> 
    </div>

  );
}

export default App;