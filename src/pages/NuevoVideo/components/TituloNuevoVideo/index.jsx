import styles from "./TituloNuevoVideo.module.css";

const TituloNuevoVideo = () => {
  return (
    <>
      <div className={styles.contenedor_titulo}>
        <h2>NUEVO VIDEO</h2>
        <p>Complete el formulario para agregar un nuevo video</p>
      </div>
    </>
  );
};

export default TituloNuevoVideo;
