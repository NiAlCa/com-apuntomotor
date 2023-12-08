import './App.css';

function App() {
  return (
    <div className="card">
      <div className="card-header">
        <button type="button" className="btn btn-info">Más información</button>
      </div>
      <div className="card-body">
        <h5 className="card-title">Título</h5>
        <p className="card-text">Texto texto texto texto texto texto texto texto texto texto texto.</p>
        <img src="path_to_your_image.jpg" className="card-img" alt="Bootstrap" />
      </div>
      <div className="card-footer d-flex justify-content-between">
        <a href="#" className="btn btn-secondary flex-grow-1 mr-2">Volver</a>
        <a href="#" className="btn btn-primary flex-grow-1 ml-2">Acciones</a>
      </div>
    </div>
  );
}

export default App;
